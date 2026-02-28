import { allBlogs } from "content-collections";
import type { BlogPostCardItem } from "@/components/blog/blog-card-types";

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

const DEFAULT_PER_PAGE = 9;
export const RECENT_BLOG_SECTION_SIZE = 3;

export function getRecentBlogPosts(): BlogPostCardItem[] {
	return ALL_BLOG_POSTS.slice(0, RECENT_BLOG_SECTION_SIZE);
}

export interface BlogListPageResult {
	posts: BlogPostCardItem[];
	totalPages: number;
	currentPage: number;
	totalCount: number;
}

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

export type BlogDocument = (typeof allBlogs)[number];

export function getBlogBySlug(slug: string): BlogDocument | undefined {
	return allBlogs.find((post) => post.slug === slug);
}
