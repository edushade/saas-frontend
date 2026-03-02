# Blogs: ISR and SEO Checklist

Use this to verify the blogs feature has proper ISR (Incremental Static Regeneration) and SEO. **ISR and SEO are required** for the blog and key pages.

---

## ISR (Incremental Static Regeneration) — Required

| Check | Status | Where |
|-------|--------|--------|
| **Cache-Control on blog list** | ✅ | `_main.blogs.index.tsx`: `headers()` returns `public, max-age=300, s-maxage=3600, stale-while-revalidate=86400` (5 min browser, 1 h CDN, revalidate up to 24 h). |
| **Cache-Control on blog post** | ✅ | `_main.blogs.$slug.tsx`: `headers()` returns `public, max-age=3600, s-maxage=3600, stale-while-revalidate=604800` (1 h fresh, revalidate up to 7 days). |
| **Cache-Control on landing** | ✅ | `_main.index.tsx`: `headers()` returns `public, max-age=300, s-maxage=3600, stale-while-revalidate=86400`. |
| **Client-side cache** | ✅ | Blog routes use `staleTime: 5 * 60_000` (5 min) so TanStack Router keeps loader data fresh on the client. |
| **Prerender** | ⚠️ Configured | In `vite.config.ts`: TanStack Start prerender (crawlLinks, autoStaticPathsDiscovery, etc.). ISR is achieved via route `headers()` (Cache-Control) + CDN. |
| **Data source** | ✅ | Blog data from content-collections (build-time); no runtime API needed for ISR. |

**How to verify ISR**

- Deploy behind a CDN (Cloudflare, Vercel, Netlify) that respects `Cache-Control`.
- Check response headers: `curl -I https://yoursite.com/blogs` and `curl -I https://yoursite.com/blogs/your-slug` — expect `Cache-Control` and, from CDN, `Age` / `X-Cache: HIT` when cached.
- After `max-age`/`s-maxage` expires, the next request triggers revalidation (stale-while-revalidate).

**Do not remove** `headers()` from blog or landing routes; ISR depends on it.

---

## SEO — Required

| Check | Status | Where |
|-------|--------|--------|
| **Blog list title** | ✅ | `_main.blogs.index.tsx` `head()`: "Blog \| Edushade" (page 2+ → "Blog — Page N \| Edushade"). |
| **Blog list description** | ✅ | Meta description for the blog index. |
| **Blog list canonical** | ✅ | `canonical` link: `/blogs` or `/blogs?page=N`. |
| **Blog list prev/next** | ✅ | `rel="prev"` and `rel="next"` for pagination. |
| **Blog list OG/Twitter** | ✅ | `og:title`, `og:description`, `og:type`, `og:url`; `twitter:card`, `twitter:title`, `twitter:description`. |
| **Post title** | ✅ | `_main.blogs.$slug.tsx` `head()`: `{post.title} \| Edushade`. |
| **Post description** | ✅ | Meta description from `post.description` or `post.title`. |
| **Post canonical** | ✅ | `canonical` link: `{origin}/blogs/{slug}`. |
| **Post OG article** | ✅ | `og:type: article`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:alt`, `article:published_time`. |
| **Post Twitter** | ✅ | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. |
| **404 for missing post** | ✅ | When `post` is missing, `head()` sets `noindex, follow` and title "Post not found \| Edushade". |
| **Landing page** | ✅ | `_main.index.tsx` `head()`: title, description, canonical, OG, Twitter, JSON-LD. |

**Site origin**

- Canonical and OG URLs use `getSiteOrigin()` (env: `SITE_ORIGIN` / `VITE_SITE_ORIGIN`). Set these in production for your domain.

**How to verify SEO**

- View source on `/blogs` and `/blogs/{slug}`: confirm `<title>`, `<meta name="description">`, `<link rel="canonical">`, and OG/Twitter meta tags.
- Use [Google Rich Results Test](https://search.google.com/test/rich-results) or [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) for OG.
- Use [Lighthouse](https://developer.chrome.com/docs/lighthouse/) SEO audit.

---

## Summary

- **ISR**: Implemented via route `headers()` (Cache-Control + s-maxage + stale-while-revalidate) on blog list, blog post, and landing. Works with any CDN that respects Cache-Control. **Do not remove these headers.**
- **SEO**: Blog index and post routes have per-route `head()` with title, description, canonical, prev/next (list), and OG/Twitter meta; 404 posts get noindex; landing has full meta + JSON-LD.
