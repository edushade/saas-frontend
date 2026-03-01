# Prerender and request.url fix

## Why my-seo-app works without the plugin but saas-frontend needs it

**It is not a base URL or app URL config issue.** Both projects use the default base (no `base` in vite.config, no `basepath` in the router).

| | my-seo-app | saas-frontend |
|---|------------|----------------|
| **base / basepath** | Default (`/`) | Default (`/`) |
| **Plugins** | tailwind, tsconfigPaths, tanstackStart, viteReact, nitro | + content-collections, devtools, **prerenderRequestUrlFix**, viteReact (with babel react-compiler), nitro |
| **Router** | Simple (no query context) | React Query context, more routes |
| **Server bundle** | Small, simple entry | Large (content-collections, many routes) |

When the server bundle is **small and simple**, Nitro’s prerender often invokes the handler with a normal `Request` that has `request.url` set. When the bundle is **larger and more complex** (e.g. content-collections, more chunks), the same Nitro/TanStack code path can end up calling the handler with a request where `request.url` is **undefined** or relative—so TanStack’s `getNormalizedURL(request.url)` → `url.pathname` throws. So the plugin is needed in saas-frontend because of **app size/complexity**, not because of a wrong base URL or our config.

---

## What “fetch” means here

1. **Prerender-time fetch**  
   During `vite build`, TanStack Start’s prerender step asks Nitro to render each route. That is done by **fetching** each URL (e.g. `fetch('http://localhost:3000/')`) against the built app. So “fetch” in this context = the prerender crawler calling the server for each path.

2. **Page-level fetch**  
   Your route loaders and component `fetch()` (e.g. `ContactSalesForm`, blog loaders) run **after** the server has already started handling a request. They are not what triggers the crash. The crash happens earlier, when the server handler first handles the incoming request.

So the issue is **not** your app’s data fetching; it’s **how the request is passed** from Nitro to the TanStack Start handler during that prerender-time fetch.

## Where it breaks

- Nitro invokes the app’s SSR handler for each prerender URL.
- In some Nitro code paths the `request` object passed to the handler has `request.url` **undefined** or relative.
- TanStack’s server code does:  
  `const { url } = getNormalizedURL(request.url);` then uses `url.pathname` without guarding.
- When `request.url` is undefined, `getNormalizedURL` can return an object where `url` is undefined, and accessing `url.pathname` throws:  
  `TypeError: Cannot read properties of undefined (reading 'pathname')`.

So the failure is in the **first line of request handling** (normalizing the request URL), not in your loaders or components.

## Can we fix it only in vite.config?

**No.** There is no Vite or TanStack Start option that controls “how Nitro passes the request” to the handler.

- `tanstackStart({ prerender: { ... } })` controls **which** routes are prerendered (filter, crawlLinks, etc.), not the shape of the `request` object.
- Nitro’s config does not expose “always set `request.url` to the full prerender URL when calling the renderer.”
- So you **cannot** remove the need for the plugin by config alone.

## Is the custom plugin the right fix?

**Yes.** Until TanStack or Nitro fix this upstream:

- The **prerender-request-url-fix** plugin patches the server bundle so that when `request.url` is missing or relative, we build a full URL from `SITE_ORIGIN` / `VITE_SITE_ORIGIN` (or `http://localhost:3000`) and use that before calling `getNormalizedURL`, and we guard `url` so `url.pathname` is never read when `url` is undefined.
- That way prerender’s fetch to the server always sees a valid URL on our side, regardless of how Nitro passed the request.

So:

- **Right:** The problem is the request passed to the handler during **prerender-time fetch** (Nitro → handler), not your page-level fetching. Fixing “prerender-time fetch” would remove the need for the plugin, but that fix has to be in Nitro or TanStack, not in vite.config.
- **Wrong:** The idea that we can fix this **only** by configuring “dynamic fetching” or similar in `vite.config.ts` and then drop the custom plugin. No such option exists; the plugin remains necessary for now.

## References

- [TanStack/router #5939](https://github.com/TanStack/router/issues/5939) – prerender errors (build order, preview server, and handler request shape).
- [TanStack/router #5261](https://github.com/TanStack/router/issues/5261) – base path / trailing slash when fetching during prerender (fixed in 1.132.29).
- Plugin: `vite-plugins/prerender-request-url-fix.ts` (see docblock there).

---

## Why prerender is disabled on Vercel

When you deploy to **Vercel**, prerender is turned off in this project (`prerender.enabled = process.env.VERCEL !== "1"`). Here’s why.

**How prerender works (local / Node hosts):**

1. After the server build, TanStack Start’s plugin starts a **preview server** (via `npx srvx`) that serves the built app.
2. It then **crawls** that server (e.g. `fetch('http://localhost:…/')`) for each route and writes static HTML into the output.
3. So prerender needs a **running HTTP server** during the build.

**Why that fails on Vercel:**

1. **No `srvx` in the build env** – The plugin runs `npx srvx --static ... ./functions/__server.func/index.mjs`. On Vercel’s build machines `srvx` is not installed, so you get `srvx: command not found` and the build fails.
2. **Output format** – On Vercel, Nitro emits **serverless functions** (e.g. under `functions/`), not a single Node server. The prerender step is built around “run one server and crawl it,” which doesn’t match that layout.

So **on Vercel we disable prerender** so the build succeeds. Pages are **server-rendered on each request** by Vercel’s runtime instead of being pre-built as static HTML. For users, the app behaves the same; only the moment of rendering (build time vs request time) changes.

**If you need build-time prerender:**

- Use a **Node host** (e.g. Railway, Render, Fly.io) where the build runs `vite build` and the output is a **node-server**. There the preview server can run and prerender works as usual.
- Or wait for TanStack/Nitro to support a prerender path that works on Vercel (e.g. without spawning a local server, or using a different strategy for serverless output).
