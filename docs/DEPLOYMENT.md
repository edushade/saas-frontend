# Deployment guide

This app is **TanStack Start + Nitro + Vite** with prerender. Build output is in **`.output/`** (Nitro).

---

## Deploy from local to Vercel (no GitHub)

You can deploy straight from your machine using the Vercel CLI. No GitHub or Git required.

### 1. Install Vercel CLI globally and log in (one time)

Install the CLI on your machine (not in this project):

```bash
npm install -g vercel
```

Or with pnpm:

```bash
pnpm add -g vercel
```

Then log in:

```bash
vercel login
```

### 2. Deploy

From this project folder, run:

**Preview (staging URL):**

```bash
vercel
```

Or use the script:

```bash
pnpm run deploy
```

**Production:**

```bash
vercel --prod
```

Or:

```bash
pnpm run deploy:prod
```

First time you run `vercel` or `vercel --prod`, Vercel will ask:

- **Set up and deploy?** Yes
- **Which scope?** Your account or team
- **Link to existing project?** No (or Yes if you already created one)
- **Project name?** e.g. `saas-frontend` or leave default
- **Directory?** `./` (current directory)

Vercel will upload your project, run `npm run build` on their servers, and give you a URL.

### 3. Environment variables

After the first deploy, add env vars in the [Vercel dashboard](https://vercel.com/dashboard) → your project → **Settings** → **Environment Variables**:

- `SITE_ORIGIN` = `https://your-app.vercel.app` (use the URL Vercel gives you)
- `VITE_SITE_ORIGIN` = same as `SITE_ORIGIN`
- Add any email/API keys if you use them (see table below).

Redeploy after adding variables so they take effect.

**Note:** On Vercel, static prerender is disabled (the build would otherwise try to run a preview server that isn’t available). Pages are server-rendered on request instead.

### 4. Later deploys

From the project folder, run:

- `pnpm run deploy` — new preview URL
- `pnpm run deploy:prod` — update production

---

## Best options for this setup (with GitHub)

### 1. **Vercel** (recommended)

- **Why:** Zero config for Nitro, auto-detects preset. Great for SSR + prerender, env vars, preview deployments.
- **Steps:**
  1. Push repo to GitHub/GitLab/Bitbucket.
  2. In [Vercel](https://vercel.com): Import project → select repo.
  3. **Build command:** `pnpm build` (or `npm run build`).
  4. **Output directory:** leave default (Vercel uses Nitro’s output automatically).
  5. **Install command:** `pnpm install` (or `npm install`).
  6. Add **Environment variables** (see below).
  7. Deploy.

- **Production URL:** Set `SITE_ORIGIN` and `VITE_SITE_ORIGIN` to your Vercel URL (e.g. `https://your-app.vercel.app`).

---

### 2. **Netlify**

- **Why:** Also zero config for Nitro, good free tier.
- **Steps:**
  1. Connect repo in [Netlify](https://netlify.com).
  2. **Build command:** `pnpm build` (or `npm run build`).
  3. **Publish directory:** `.output/public` — **and** use a Netlify preset so the server runs. Easiest: use “Detect build settings” or set:
     - Build command: `pnpm build`
     - Publish directory: (Nitro may output differently; check [Nitro Netlify docs](https://nitro.build/deploy/providers/netlify)).
  4. Add env vars in Netlify dashboard.

- For Nitro’s Node server on Netlify you may need **Netlify Functions** or **Netlify’s Nitro support**; confirm with current [Nitro deploy docs](https://v3.nitro.build/deploy).

---

### 3. **Any Node.js host** (Railway, Render, Fly.io, DigitalOcean App Platform, etc.)

Current build uses Nitro preset **node-server**. You run the built server with Node.

- **Steps:**
  1. **Build:** `pnpm build` (or `npm run build`).
  2. **Start:** `pnpm start` (runs `node .output/server/index.mjs`).
  3. Set **root directory** to the app folder and set **build** and **start** as above.
  4. Add environment variables in the host’s dashboard.
  5. Expose port **3000** (or the port Nitro uses; some hosts set `PORT` automatically).

- **Railway:** New Project → Deploy from repo → set Build: `pnpm build`, Start: `pnpm start` → add env vars.
- **Render:** New Web Service → connect repo → Build: `pnpm build`, Start: `pnpm start` → add env vars.
- **Fly.io:** Use a `Dockerfile` that runs `node .output/server/index.mjs`, or use their Node.js guide and same build/start.

---

## Environment variables

Set these in the deployment platform’s dashboard (or in a `.env` file only if the host supports it and it’s not committed).

| Variable | Required | Description |
|--------|----------|-------------|
| `SITE_ORIGIN` | Production | Full origin, e.g. `https://your-domain.com` (used by prerender and links). |
| `VITE_SITE_ORIGIN` | Production | Same as `SITE_ORIGIN` for client-side. |
| `EMAIL_PROVIDER` | If using contact/email | Email provider key. |
| `EMAIL_SMTP_HOST` | If SMTP | SMTP host. |
| `EMAIL_SMTP_PORT` | If SMTP | SMTP port. |
| `EMAIL_SMTP_USERNAME` | If SMTP | SMTP user. |
| `EMAIL_SMTP_PASSWORD` | If SMTP | SMTP password (use secrets). |

For **preview/build** only (e.g. Vercel previews), `.env` is loaded; for **production** set these in the platform so they’re available at runtime.

---

## Summary

- **Easiest / “deploy anywhere”:** **Vercel** — connect repo, set build + env, deploy.
- **Alternative:** **Netlify** (confirm Nitro Node support for your Nitro version).
- **Full control / existing Node host:** Use **build** + **start** (`node .output/server/index.mjs`) and the env vars above.

After deploy, set `SITE_ORIGIN` and `VITE_SITE_ORIGIN` to your live URL so prerender and canonical links are correct.
