import { MDXContent } from "@content-collections/mdx/react";
import type { BlogDetailBannerAuthorSocials } from "@/components/blog/BlogDetailBanner";
import { BlogDetailBanner } from "@/components/blog/BlogDetailBanner";
import { Typography } from "@/components/ui-custom/typography";
import { getSiteOrigin } from "@/env";
import type { BlogDocument } from "@/lib/blog/blogs";
import { formatPostDate } from "@/lib/utils/date-utils";

type PostWithAuthorSocials = BlogDocument & {
	authorWebsite?: string;
	authorTwitter?: string;
	authorX?: string;
	authorLinkedIn?: string;
	authorFacebook?: string;
	authorInstagram?: string;
	authorYouTube?: string;
	authorGitHub?: string;
	authorDiscord?: string;
	authorThreads?: string;
	authorTikTok?: string;
	authorMedium?: string;
	coverImage?: string;
	coverImageAlt?: string;
};

function buildAuthorSocials(
	post: BlogDocument,
): BlogDetailBannerAuthorSocials | undefined {
	const p = post as PostWithAuthorSocials;
	const socials: BlogDetailBannerAuthorSocials = {};
	if (p.authorWebsite) socials.website = p.authorWebsite;
	if (p.authorTwitter) socials.twitter = p.authorTwitter;
	if (p.authorX) socials.x = p.authorX;
	if (p.authorLinkedIn) socials.linkedin = p.authorLinkedIn;
	if (p.authorFacebook) socials.facebook = p.authorFacebook;
	if (p.authorInstagram) socials.instagram = p.authorInstagram;
	if (p.authorYouTube) socials.youtube = p.authorYouTube;
	if (p.authorGitHub) socials.github = p.authorGitHub;
	if (p.authorDiscord) socials.discord = p.authorDiscord;
	if (p.authorThreads) socials.threads = p.authorThreads;
	if (p.authorTikTok) socials.tiktok = p.authorTikTok;
	if (p.authorMedium) socials.medium = p.authorMedium;
	return Object.keys(socials).length > 0 ? socials : undefined;
}

export interface BlogPostViewProps {
	post: BlogDocument;
}

export function BlogPostView({ post }: BlogPostViewProps) {
	const origin = getSiteOrigin();
	const canonical = `${origin}/blogs/${post.slug ?? ""}`;
	const imageUrl = post.imageSrc.startsWith("http")
		? post.imageSrc
		: `${origin}${post.imageSrc}`;
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
			url: origin,
		},
	};

	const author =
		post.authorName != null && post.authorName !== ""
			? {
					name: post.authorName,
					role: post.authorRole ?? "Team",
					avatarUrl: post.authorAvatar?.startsWith("http")
						? post.authorAvatar
						: post.authorAvatar
							? `${origin}${post.authorAvatar}`
							: undefined,
					bio:
						"authorBio" in post
							? (post as { authorBio?: string }).authorBio
							: undefined,
					socials: buildAuthorSocials(post),
				}
			: undefined;

	const p = post as PostWithAuthorSocials;
	const coverImageSrc = p.coverImage
		? p.coverImage.startsWith("http")
			? p.coverImage
			: `${origin}${p.coverImage}`
		: undefined;

	return (
		<>
			<BlogDetailBanner
				title={post.title}
				date={formatPostDate(post.date)}
				readTimeMinutes={
					"readTimeMinutes" in post && typeof post.readTimeMinutes === "number"
						? post.readTimeMinutes
						: undefined
				}
				contentForEstimate={post.content}
				author={author}
			/>

			<article className="mx-auto max-w-(--es-max-w) px-4 py-8">
				{/* JSON-LD for Article SEO; value is serialized from app data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				<header className="mb-8 sr-only">
					<Typography variant="h1">{post.title}</Typography>
					<time dateTime={post.date}>{post.date}</time>
				</header>

				{coverImageSrc && (
					<div className="mb-8 w-full max-w-(--es-max-w) mx-auto overflow-hidden rounded-2xl  flex items-center justify-center">
						<img
							src={coverImageSrc}
							alt={p.coverImageAlt ?? ""}
							className="max-h-[452px] w-full object-contain object-center"
						/>
					</div>
				)}

				<div className="max-w-[680px] mx-auto">
					{post.description && (
						<p className="mb-6 text-text-secondary">{post.description}</p>
					)}

					{post.mdx ? (
						<div
							className="prose prose-neutral dark:prose-invert max-w-none
						[&_a]:text-brand-200 [&_a]:underline
						[&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold
						[&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold
						[&_h4]:mt-6 [&_h4]:text-base [&_h4]:font-semibold
						[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
						[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
						[&_li]:my-1
						[&_blockquote]:border-l-4 [&_blockquote]:border-border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-secondary [&_blockquote]:my-4
						[&_pre]:bg-bg-tertiary [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:my-4
						[&_code]:bg-bg-tertiary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
						[&_pre_code]:bg-transparent [&_pre_code]:p-0
						[&_img]:rounded-lg [&_img]:shadow-sm [&_img]:my-4
						[&_table]:w-full [&_table]:border-collapse [&_table]:my-4
						[&_th]:border [&_th]:border-border-primary [&_th]:bg-bg-tertiary [&_th]:px-3 [&_th]:py-2 [&_th]:text-left
						[&_td]:border [&_td]:border-border-primary [&_td]:px-3 [&_td]:py-2
						[&_p]:my-3
						[&_hr]:my-8 [&_hr]:border-border-primary"
						>
							<MDXContent code={post.mdx} />
						</div>
					) : (
						<div className="whitespace-pre-wrap text-text-secondary">
							{post.content}
						</div>
					)}
				</div>
			</article>
		</>
	);
}
