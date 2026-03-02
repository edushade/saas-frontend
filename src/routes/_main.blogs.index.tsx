import { createFileRoute } from "@tanstack/react-router";
import { BannerBlog, BlogListSection } from "@/components/blog";
import RecentBlogSection from "@/components/landing/RecentBlogSection";
import { getBlogListPage } from "@/constants/blogs";
import { getSiteOrigin } from "@/env";

export const Route = createFileRoute("/_main/blogs/")({
	validateSearch: (search: Record<string, unknown>) => {
		const page = Number(search?.page);
		return { page: Number.isFinite(page) && page >= 1 ? page : 1 };
	},
	loader: async ({ location }) => {
		const search = (location?.search ?? {}) as { page?: number };
		const page = search?.page ?? 1;
		return getBlogListPage(page);
	},
	head: ({ loaderData }) => {
		const page = loaderData?.currentPage ?? 1;
		const origin = getSiteOrigin();
		const title =
			page > 1 ? `Blog — Page ${page} | Edushade` : "Blog | Edushade";
		const description =
			"Thoughtful updates and practical insights on building and delivering modern learning experiences.";
		const canonical =
			page > 1 ? `${origin}/blogs?page=${page}` : `${origin}/blogs`;
		return {
			meta: [
				{ title },
				{ name: "description", content: description },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: canonical },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: title },
				{ name: "twitter:description", content: description },
			],
			links: [{ rel: "canonical", href: canonical }],
		};
	},
	headers: () => ({
		"Cache-Control":
			"public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
	}),
	staleTime: 5 * 60_000,
	component: BlogsIndexPage,
});

function BlogsIndexPage() {
	const { posts, currentPage, totalPages } = Route.useLoaderData();

	return (
		<main className="pt-(--es-section-pt)">
			<BannerBlog />
			<RecentBlogSection posts={posts} />
			<BlogListSection
				title="All posts"
				posts={posts}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</main>
	);
}
