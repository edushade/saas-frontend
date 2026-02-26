// Sourced from MDX content collection (content/blogs/*.mdx). Generated at build by @content-collections/vite.
import { allBlogs } from "content-collections";
import type { BlogPostCardItem } from "@/components/blog/blog-card-types";

/**
 * All blog posts for list/SSR, mapped from the content collection to card shape.
 * Sorted by date descending (newest first).
 */
export const ALL_BLOG_POSTS: BlogPostCardItem[] = [...allBlogs]
	.map((doc) => ({
		headline: doc.title,
		tag: doc.tag,
		tagClass: doc.tagClass,
		date: doc.date,
		imageSrc: doc.imageSrc,
		imageAlt: doc.imageAlt,
		description: doc.description ?? undefined,
		slug: doc.slug ?? undefined,
	}))
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const DEFAULT_PER_PAGE = 3;

/** Number of posts shown in the Recent Blogs section (1 featured + 2 side). */
export const RECENT_BLOG_SECTION_SIZE = 3;

/**
 * Returns the most recent posts for the landing Recent Blogs section.
 * Same order as list (newest first): first = featured, rest = side cards.
 */
export function getRecentBlogPosts(): BlogPostCardItem[] {
	return ALL_BLOG_POSTS.slice(0, RECENT_BLOG_SECTION_SIZE);
}

export interface BlogListPageResult {
	posts: BlogPostCardItem[];
	totalPages: number;
	currentPage: number;
	totalCount: number;
}

/**
 * Returns a page of blog posts for list view. Used by route loader (SSR).
 * Data comes from the blogs content collection (MDX); add cache headers for ISR-like behavior.
 */
export async function getBlogListPage(
	page: number,
	perPage: number = DEFAULT_PER_PAGE,
): Promise<BlogListPageResult> {
	const totalCount = ALL_BLOG_POSTS.length;
	const totalPages = Math.max(1, Math.ceil(totalCount / perPage));
	const safePage = Math.max(1, Math.min(page, totalPages));
	const start = (safePage - 1) * perPage;
	const posts = ALL_BLOG_POSTS.slice(start, start + perPage);
	return {
		posts,
		totalPages,
		currentPage: safePage,
		totalCount,
	};
}

/** Full blog document from content-collections (includes mdx and slug). Used for post detail page. */
export type BlogDocument = (typeof allBlogs)[number];

export function getBlogBySlug(slug: string): BlogDocument | undefined {
	return allBlogs.find((post) => post.slug === slug);
}
