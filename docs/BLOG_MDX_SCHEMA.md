# Blog MDX schema reference

Full list of frontmatter fields for `content/blogs/*.mdx`. Use this for long-form posts with author, social links, and rich content (images, lists, blockquotes, code, tables).

---

## Required fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Post title (banner + SEO). |
| `date` | string | Publication date (e.g. `"2026-01-13"` or `"13 Jan 2026"`). |
| `tag` | string | Label on cards (e.g. `"Updates"`, `"News"`). |
| `tagClass` | string | Tailwind classes for the tag (e.g. `"bg-[#2FC7B9] text-white border-0"`). |
| `imageSrc` | string | Path to hero/card image (e.g. `"/svgs/resource-center/4.svg"`). |
| `imageAlt` | string | Alt text for the image. |

---

## Optional – content & meta

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | Short description (cards + meta description). |
| `readTimeMinutes` | number | Estimated read time; if omitted, derived from content. |
| `coverImage` | string | Full URL to the banner/cover image on the post detail page (use a direct link, not a path). Shown behind the gradient in the banner. |
| `coverImageAlt` | string | Alt text for the cover image (accessibility). |

---

## Optional – author (banner)

| Field | Type | Description |
|-------|------|-------------|
| `authorName` | string | Full name; when set, author block and social links show in banner. |
| `authorRole` | string | Role/title (e.g. `"Frontend Engineer"`). |
| `authorAvatar` | string | Avatar URL (relative or absolute). |
| `authorBio` | string | Short bio (reserved for future use). |

---

## Optional – author social links (banner)

All optional. When present, icons appear under the author in the detail banner. Use full URLs.

| Field | Description |
|-------|-------------|
| `authorWebsite` | Personal or profile website. |
| `authorTwitter` | Twitter profile URL. |
| `authorX` | X (Twitter) profile URL (use this or `authorTwitter`). |
| `authorLinkedIn` | LinkedIn profile URL. |
| `authorFacebook` | Facebook profile URL. |
| `authorInstagram` | Instagram profile URL. |
| `authorYouTube` | YouTube channel/profile URL. |
| `authorGitHub` | GitHub profile URL. |
| `authorDiscord` | Discord invite or profile. |
| `authorThreads` | Threads profile URL. |
| `authorTikTok` | TikTok profile URL. |
| `authorMedium` | Medium profile URL. |

---

## Body content (MDX)

You can use standard Markdown and MDX in the body:

- **Headings**: `##`, `###`, `####`
- **Lists**: `-` / `*` (unordered), `1.` (ordered)
- **Links**: `[text](url)`
- **Images**: `![alt](url)` or MDX `<img />`
- **Blockquotes**: `> quote`
- **Code**: `` `inline` `` or fenced ` ``` ` blocks
- **Tables**: `| col | col |`
- **Bold / italic**: `**bold**`, `*italic*`
- **Horizontal rule**: `---`

Prose styling in the app covers headings, lists, blockquotes, code blocks, tables, and images.

---

## Example frontmatter (full author + socials)

```yaml
---
title: "Our top 10 Javascript frameworks to use in 2026"
description: "A practical guide to choosing and using modern JS frameworks."
date: "2026-01-13"
tag: "Updates"
tagClass: "bg-[#2FC7B9] text-white border-0"
imageSrc: "/svgs/resource-center/4.svg"
imageAlt: "Overview illustration"

coverImage: "https://edushade.com/images/blog-covers/your-cover.jpg"
coverImageAlt: "Cover for this post"

readTimeMinutes: 10
authorName: "Damien Smith"
authorRole: "Frontend Engineer"
authorAvatar: "/images/authors/damien.jpg"

authorWebsite: "https://damien.example.com"
authorTwitter: "https://twitter.com/damiensmith"
authorLinkedIn: "https://linkedin.com/in/damiensmith"
authorGitHub: "https://github.com/damiensmith"
authorMedium: "https://medium.com/@damiensmith"
---

Your content here...
```

---

## Slug

The URL path is derived from the **filename** (without `.mdx`). Example: `content/blogs/our-top-10-js-frameworks.mdx` → `/blogs/our-top-10-js-frameworks`. Do not add a `slug` field unless the schema is extended to use it.
