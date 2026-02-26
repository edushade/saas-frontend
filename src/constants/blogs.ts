import type { BlogPostCardItem } from "@/components/blog/blog-card-types";

/** Mock list of all blog posts for list/SSR. Replace with API call for production. */
export const ALL_BLOG_POSTS: BlogPostCardItem[] = [
	{
		headline: "Investigating the Role of Technology in Educational Success",
		tag: "Posts",
		tagClass: "bg-[#0E2D2A] text-white border-0",
		date: "Oct 15, 2026",
		imageSrc: "/svgs/resource-center/3.svg",
		imageAlt: "Create your account screen",
		description:
			"Evaluating the relationship between technology usage and student success rates.",
	},
	{
		headline: "Utilizing Educational Technologies for Better Learning Outcomes",
		tag: "Updates",
		tagClass: "bg-[#2FC7B9] text-white border-0",
		date: "May 20, 2026",
		imageSrc: "/svgs/resource-center/4.svg",
		imageAlt: "Overview and design quote",
		description:
			"Exploring the role of educational technologies in improving learning results.",
	},
	{
		headline: "Adapting Technology to Modern Educational Needs",
		tag: "News",
		tagClass: "bg-[#1a6bff] text-white border-0",
		date: "Jul 12, 2026",
		imageSrc: "/svgs/resource-center/Sidebar.svg",
		imageAlt: "Integrations and company logos",
		description:
			"A discussion on how education can evolve through adaptive technology.",
	},
	// Duplicate sets to fill 6 pages of 3 each (18 items)
	{
		headline: "Designing Learning Systems From the Educator's Perspective",
		tag: "Posts",
		tagClass: "bg-[#0E2D2A] text-white border-0",
		date: "Jan 31, 2026",
		imageSrc: "/svgs/resource-center/3.svg",
		imageAlt: "Dashboard UI preview",
		description:
			"Why starting with educator intent leads to better learning outcomes and simpler platforms.",
	},
	{
		headline: "Building Inclusive Learning Environments",
		tag: "Updates",
		tagClass: "bg-[#2FC7B9] text-white border-0",
		date: "Mar 10, 2026",
		imageSrc: "/svgs/resource-center/4.svg",
		imageAlt: "Accessibility in education",
		description:
			"Strategies for creating learning experiences that work for every learner.",
	},
	{
		headline: "The Future of Assessment in Online Education",
		tag: "News",
		tagClass: "bg-[#1a6bff] text-white border-0",
		date: "Apr 5, 2026",
		imageSrc: "/svgs/resource-center/Sidebar.svg",
		imageAlt: "Assessment tools",
		description:
			"Rethinking how we measure learning in digital-first classrooms.",
	},
	{
		headline: "Student Engagement in Hybrid Classrooms",
		tag: "Posts",
		tagClass: "bg-[#0E2D2A] text-white border-0",
		date: "Jun 8, 2026",
		imageSrc: "/svgs/resource-center/3.svg",
		imageAlt: "Hybrid learning",
		description:
			"Keeping learners engaged when teaching both in-person and online.",
	},
	{
		headline: "Data-Driven Decisions in Curriculum Design",
		tag: "Updates",
		tagClass: "bg-[#2FC7B9] text-white border-0",
		date: "Aug 22, 2026",
		imageSrc: "/svgs/resource-center/4.svg",
		imageAlt: "Analytics dashboard",
		description:
			"Using learner data to improve course structure and outcomes.",
	},
	{
		headline: "Scaling Support for Growing Learning Platforms",
		tag: "News",
		tagClass: "bg-[#1a6bff] text-white border-0",
		date: "Sep 14, 2026",
		imageSrc: "/svgs/resource-center/Sidebar.svg",
		imageAlt: "Support and scale",
		description:
			"Practical approaches to supporting more learners without losing quality.",
	},
	{
		headline: "Microlearning and Skill-Based Pathways",
		tag: "Posts",
		tagClass: "bg-[#0E2D2A] text-white border-0",
		date: "Oct 1, 2026",
		imageSrc: "/svgs/resource-center/3.svg",
		imageAlt: "Microlearning",
		description:
			"How short-form content and clear pathways improve completion rates.",
	},
	{
		headline: "Accessibility Standards in EdTech",
		tag: "Updates",
		tagClass: "bg-[#2FC7B9] text-white border-0",
		date: "Nov 9, 2026",
		imageSrc: "/svgs/resource-center/4.svg",
		imageAlt: "Accessibility",
		description:
			"Meeting WCAG and beyond in learning management systems.",
	},
	{
		headline: "Community and Peer Learning Online",
		tag: "News",
		tagClass: "bg-[#1a6bff] text-white border-0",
		date: "Dec 3, 2026",
		imageSrc: "/svgs/resource-center/Sidebar.svg",
		imageAlt: "Community",
		description:
			"Fostering discussion and collaboration in asynchronous courses.",
	},
];

const DEFAULT_PER_PAGE = 3;

export interface BlogListPageResult {
	posts: BlogPostCardItem[];
	totalPages: number;
	currentPage: number;
	totalCount: number;
}

/**
 * Returns a page of blog posts for list view. Intended for use in route loader (SSR).
 * In production, replace ALL_BLOG_POSTS with an API call and add cache headers or
 * revalidation (e.g. Cache-Control: s-maxage=60, stale-while-revalidate) for ISR-like behavior.
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
