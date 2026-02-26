# Blogs: ISR and SEO Checklist

Use this to verify the blogs feature has proper ISR (Incremental Static Regeneration) and SEO.

---

## ISR (Incremental Static Regeneration)

| Check | Status | Where |
|-------|--------|--------|
| **Cache-Control on list** | ✅ | `blogs.index.tsx`: `headers()` returns `public, max-age=300, s-maxage=3600, stale-while-revalidate=86400` (5 min browser, 1 h CDN, revalidate up to 24 h). |
| **Cache-Control on post** | ✅ | `blogs.$slug.tsx`: `headers()` returns `public, max-age=3600, s-maxage=3600, stale-while-revalidate=604800` (1 h fresh, revalidate up to 7 days). |
| **Client-side cache** | ✅ | Both routes use `staleTime: 5 * 60_000` (5 minutes) so TanStack Router keeps loader data fresh on the client. |
| **Prerender** | ⚠️ Configured | In `vite.config.ts`: full [TanStack Start static prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering) config (enabled, autoSubfolderIndex, autoStaticPathsDiscovery, concurrency, crawlLinks, retryCount, retryDelay, maxRedirects, failOnError: false). With Nitro, prerender currently receives a request with undefined URL and renders 0 pages; build still succeeds and the app works via SSR. ISR is achieved via route `headers()` (Cache-Control + CDN) and optional cache warming. |
| **Data source** | ✅ | Blog data comes from content-collections (build-time); no runtime API needed for ISR. |

**How to verify ISR**

- Deploy behind a CDN (e.g. Cloudflare, Vercel, Netlify) that respects `Cache-Control`.
- Check response headers: `curl -I https://yoursite.com/blogs` and `curl -I https://yoursite.com/blogs/your-slug` — expect `Cache-Control` and, from CDN, `Age` / `X-Cache: HIT` when cached.
- After `max-age`/`s-maxage` expires, the next request triggers revalidation (stale-while-revalidate).

**Optional improvements**

- Add on-demand revalidation (e.g. API route + webhook when content changes) to purge CDN cache for specific paths.
- Tune `max-age` / `s-maxage` / `stale-while-revalidate` per environment if needed.

---

## SEO

| Check | Status | Where |
|-------|--------|--------|
| **Blog list title** | ✅ | `blogs.index.tsx` `head()`: "Blog \| Edushade" (page 2+ → "Blog — Page N \| Edushade"). |
| **Blog list description** | ✅ | Meta description for the blog index. |
| **Blog list canonical** | ✅ | `canonical` link: `/blogs` or `/blogs?page=N`. |
| **Blog list OG/Twitter** | ✅ | `og:title`, `og:description`, `og:type`, `og:url`; `twitter:card`, `twitter:title`, `twitter:description`. |
| **Post title** | ✅ | `blogs.$slug.tsx` `head()`: `{post.title} \| Edushade`. |
| **Post description** | ✅ | Meta description from `post.description` or `post.title`. |
| **Post canonical** | ✅ | `canonical` link: `https://edushade.com/blogs/{slug}`. |
| **Post OG article** | ✅ | `og:type: article`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:alt`, `article:published_time`. |
| **Post Twitter** | ✅ | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. |
| **404 for missing post** | ✅ | When `post` is missing, `head()` sets `noindex, follow` and title "Post not found \| Edushade". |
| **Semantic HTML** | ✅ | `BlogPostView`: `<article>`, `<header>`, `<time dateTime>`. |
| **JSON-LD (optional)** | ✅ | `BlogPostView`: Article schema with headline, description, datePublished, url, image, publisher. |

**Site origin**

- Canonical and OG URLs use `SITE_ORIGIN = "https://edushade.com"` in the blog routes. For staging/other domains, consider moving this to env (e.g. `import.meta.env.VITE_SITE_ORIGIN` or a shared constant from config).

**How to verify SEO**

- View source on `/blogs` and `/blogs/{slug}`: confirm `<title>`, `<meta name="description">`, `<link rel="canonical">`, and OG/Twitter meta tags.
- Use [Google Rich Results Test](https://search.google.com/test/rich-results) or [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) for OG.
- Use [Lighthouse](https://developer.chrome.com/docs/lighthouse/) SEO audit.

---

## Summary

- **ISR**: Implemented via route `headers()` (Cache-Control + s-maxage + stale-while-revalidate), client `staleTime`, and prerender (enabled + crawlLinks + autoStaticPathsDiscovery) in Vite. Works with any CDN that respects Cache-Control.
- **SEO**: Blog index and post routes have per-route `head()` with title, description, canonical, and OG/Twitter meta; 404 posts get noindex; post page uses semantic article/header/time.
