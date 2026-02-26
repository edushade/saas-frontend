import { createFileRoute } from "@tanstack/react-router";
import { BlogPostView } from "@/components/blog/BlogPostView";
import { getBlogBySlug } from "@/constants/blogs";

const SITE_ORIGIN = "https://edushade.com";

export const Route = createFileRoute("/blogs/$slug")({
	loader: ({ params }) => {
		const post = getBlogBySlug(params.slug);
		return { post };
	},
	head: ({ loaderData }) => {
		const post = loaderData?.post;
		if (!post) {
			return {
				meta: [
					{ title: "Post not found | Edushade" },
					{ name: "robots", content: "noindex, follow" },
				],
			};
		}
		const title = `${post.title} | Edushade`;
		const description = post.description ?? post.title;
		const canonical = `${SITE_ORIGIN}/blogs/${post.slug}`;
		const imageUrl = post.imageSrc.startsWith("http")
			? post.imageSrc
			: `${SITE_ORIGIN}${post.imageSrc}`;
		return {
			meta: [
				{ title },
				{ name: "description", content: description },
				{ property: "og:type", content: "article" },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
				{ property: "og:url", content: canonical },
				{ property: "og:image", content: imageUrl },
				{ property: "og:image:alt", content: post.imageAlt },
				{ property: "article:published_time", content: post.date },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: title },
				{ name: "twitter:description", content: description },
				{ name: "twitter:image", content: imageUrl },
			],
			links: [{ rel: "canonical", href: canonical }],
		};
	},
	headers: () => ({
		"Cache-Control":
			"public, max-age=3600, s-maxage=3600, stale-while-revalidate=604800",
	}),
	staleTime: 5 * 60_000,
	component: BlogPostPage,
});

function BlogPostPage() {
	const { post } = Route.useLoaderData();

	if (!post) {
		return (
			<main className="mx-auto max-w-(--es-max-w) px-4 py-16 text-center">
				<h1 className="text-xl font-semibold text-text-primary">
					Post not found
				</h1>
				<p className="mt-2 text-text-secondary">
					The blog post you’re looking for doesn’t exist or was removed.
				</p>
				<a
					href="/blogs"
					className="mt-4 inline-block font-medium text-brand-200 hover:underline"
				>
					Back to all posts
				</a>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-bg-primary pt-8">
			<BlogPostView post={post} />
		</main>
	);
}
