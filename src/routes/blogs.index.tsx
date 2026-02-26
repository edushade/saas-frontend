import { createFileRoute } from "@tanstack/react-router";
import { BannerBlog, BlogListSection } from "@/components/blog";
import RecentBlogSection from "@/components/landing/RecentBlogSection";
import { getBlogListPage } from "@/constants/blogs";

export const Route = createFileRoute("/blogs/")({
	validateSearch: (search: Record<string, unknown>) => {
		const page = Number(search?.page);
		return { page: Number.isFinite(page) && page >= 1 ? page : 1 };
	},
	loader: async ({ location }) => {
		const search = location.search as { page?: number };
		const page = search?.page ?? 1;
		return getBlogListPage(page);
	},
	component: BlogsIndexPage,
});

function BlogsIndexPage() {
	const { posts, currentPage, totalPages } = Route.useLoaderData();

	return (
		<main className="pt-8">
			<BannerBlog />
			<RecentBlogSection />
			<BlogListSection
				title="All posts"
				posts={posts}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</main>
	);
}
