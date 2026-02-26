import { MDXContent } from "@content-collections/mdx/react";
import type { Blog } from "content-collections";
import { Typography } from "@/components/ui-custom/typography";

const SITE_ORIGIN = "https://edushade.com";

export interface BlogPostViewProps {
	post: Blog;
}

/**
 * Renders a single blog post: title, meta, and compiled MDX body using @content-collections/mdx.
 */
export function BlogPostView({ post }: BlogPostViewProps) {
	const canonical = `${SITE_ORIGIN}/blogs/${post.slug ?? ""}`;
	const imageUrl = post.imageSrc.startsWith("http")
		? post.imageSrc
		: `${SITE_ORIGIN}${post.imageSrc}`;
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description ?? post.title,
		datePublished: post.date,
		url: canonical,
		image: imageUrl,
		publisher: {
			"@type": "Organization",
			name: "Edushade",
			url: SITE_ORIGIN,
		},
	};

	return (
		<article className="mx-auto max-w-(--es-max-w) px-4 py-8">
			{/* JSON-LD for Article SEO; escaping is safe because value is serialized from app data */}
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from serialized post data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<header className="mb-8">
				<Typography
					variant="h1"
					className="text-2xl font-medium leading-tight text-text-primary md:text-3xl lg:text-4xl"
				>
					{post.title}
				</Typography>
				<div className="mt-3 flex flex-wrap items-center gap-2 text-text-secondary">
					<span className="rounded-full px-2 py-1 text-sm font-medium bg-bg-tertiary">
						{post.tag}
					</span>
					<time dateTime={post.date}>{post.date}</time>
				</div>
			</header>

			{post.description && (
				<p className="mb-6 text-text-secondary">{post.description}</p>
			)}

			{post.mdx ? (
				<div className="prose prose-neutral dark:prose-invert max-w-none [&_a]:text-brand-200 [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_ul]:list-disc [&_ol]:list-decimal">
					<MDXContent code={post.mdx} />
				</div>
			) : (
				<div className="whitespace-pre-wrap text-text-secondary">
					{post.content}
				</div>
			)}
		</article>
	);
}
