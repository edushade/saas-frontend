# MDX Content Collections for Blogs (TanStack Start)

## Research summary

**Does TanStack Start support MDX content collections?**  
Yes. TanStack Start is supported by **[Content Collections](https://content-collections.dev)** (content-collections.dev), which provides build-time content management and works with the Vite-based TanStack Start setup.

**References**

- [Content Collections – TanStack Start quickstart](https://content-collections.dev/docs/quickstart/tanstack-start)
- [TanStack Start – Rendering Markdown](https://tanstack.com/start/latest/docs/framework/react/guide/rendering-markdown)
- [Content Collections – MDX](https://content-collections.dev/docs/content/mdx)

**Requirements**

- TanStack Start **v1.121.0+** (this project uses `@tanstack/react-start`).
**Packages**: `@content-collections/core`, `@content-collections/vite`, `zod`. For MDX parsing (optional): `@content-collections/mdx`. The Vite plugin uses a **default** export: `import contentCollections from '@content-collections/vite'`.

**How it works**

1. **Build-time**: The Content Collections Vite plugin runs first, reads files from a content directory (e.g. `content/blogs/**/*.mdx`), parses frontmatter, validates with a Zod schema, and (optionally) compiles MDX. It writes generated TypeScript into `.content-collections/generated`.
2. **Runtime**: You import the generated collection (e.g. `import { allBlogs } from "content-collections"`) and use it in loaders or components. No runtime file system access; everything is bundled at build time.
3. **SSR/ISR**: Route loaders that use `allBlogs` run on the server; combined with cache headers or your host’s ISR, you get SSR/ISR-style behavior.

**Plugin order**

The Content Collections plugin must be the **first** plugin in `vite.config.ts` so it can generate types before other plugins run.

**Path alias**

A `tsconfig.json` path alias points `content-collections` to `.content-collections/generated` so imports like `import { allBlogs } from "content-collections"` resolve correctly.

---

## Implementation in this repo

- **Config**: `content-collections.ts` at project root defines the `blogs` collection (directory `content/blogs`, glob `**/*.mdx`, Zod schema for frontmatter).
- **Content**: MDX files live under `content/blogs/` with frontmatter: `title`, `description`, `date`, `tag`, `tagClass`, `imageSrc`, `imageAlt`. The parser also captures `content` (body).
- **Usage**: `src/constants/blogs.ts` imports `allBlogs` from `content-collections` and maps each document to `BlogPostCardItem` for `getBlogListPage()`. The blogs list and pagination are driven by the collection.
- **Optional**: For full MDX body rendering (blog post page), the collection uses **`@content-collections/mdx`**: a `transform` calls **`compileMDX(context, document)`** so each document gets a compiled **`mdx`** string. The blog post detail route (`/blogs/$slug`) uses **`MDXContent`** from **`@content-collections/mdx/react`** with `code={post.mdx}` to render the body. This is the recommended, type-safe way to render MDX from content-collections.
