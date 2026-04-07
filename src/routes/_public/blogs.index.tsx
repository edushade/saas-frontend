import { createFileRoute } from "@tanstack/react-router";
import { BannerBlog, BlogListSection } from "@/components/blog";
import RecentBlogSection from "@/components/landing/RecentBlogSection";
import { getSiteOrigin } from "@/env";
import { getBlogListPage } from "@/lib/blog/blogs";

export const Route = createFileRoute("/_public/blogs/")({
	validateSearch: (search: Record<string, unknown>) => {
		const page = Number(search?.page);
		return { page: Number.isFinite(page) && page >= 1 ? page : 1 };
	},
	loaderDeps: ({ search }) => ({ page: search.page }),
	loader: async ({ deps }) => {
		const page = deps.page ?? 1;
		return getBlogListPage(page);
	},
	head: ({ loaderData }) => {
		const page = loaderData?.currentPage ?? 1;
		const totalPages = loaderData?.totalPages ?? 1;
		const origin = getSiteOrigin();
		const title =
			page > 1 ? `Blog — Page ${page} | Edushade` : "Blog | Edushade";
		const description =
			"Thoughtful updates and practical insights on building and delivering modern learning experiences.";
		const canonical =
			page > 1 ? `${origin}/blogs?page=${page}` : `${origin}/blogs`;
		const links: { rel: string; href: string }[] = [
			{ rel: "canonical", href: canonical },
		];
		if (page > 1) {
			links.push({
				rel: "prev",
				href:
					page === 2 ? `${origin}/blogs` : `${origin}/blogs?page=${page - 1}`,
			});
		}
		if (page < totalPages) {
			links.push({
				rel: "next",
				href: `${origin}/blogs?page=${page + 1}`,
			});
		}
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
			links,
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
			<RecentBlogSection />
			<BlogListSection
				posts={posts}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</main>
	);
}
