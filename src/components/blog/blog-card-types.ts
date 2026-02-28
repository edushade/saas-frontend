export interface BlogPostCardItem {
	headline: string;
	tag: string;
	tagClass: string;
	date: string;
	imageSrc: string;
	imageAlt: string;
	description?: string;
	/** Used to link to the blog detail page (/blogs/$slug). Omit for cards that don’t have a detail page. */
	slug?: string;
}

export const BLOG_CARD_FALLBACK_IMAGE =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect fill='%23e2e8f0' width='120' height='80'/%3E%3Ctext fill='%2394a3b8' font-size='10' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";
