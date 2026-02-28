import { Link } from "@tanstack/react-router";
import {
	type BlogPostCardItem,
	HorizontalBlogCard,
	VerticalBlogCard,
} from "@/components/blog";
import { getRecentBlogPosts } from "@/constants/blogs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Typography } from "../ui-custom/typography";

export interface RecentBlogSectionProps {
	/** When provided (e.g. from route loader), use these instead of fetching recent posts. */
	posts?: BlogPostCardItem[];
}

export default function RecentBlogSection({ posts: postsProp }: RecentBlogSectionProps = {}) {
	const recentPosts = postsProp ?? getRecentBlogPosts();
	const featuredPost = recentPosts[0];
	const sidePosts = recentPosts.slice(1, 3);

	return (
		<section className="bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<div className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
					<div className="min-w-0 max-w-[500px] sm:max-w-none">
						<Typography
							variant="h1"
							className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
						>
							Recent Blogs
						</Typography>
						<Typography
							variant="small"
							className="block font-normal w-full sm:max-w-[500px] text-text-secondary leading-relaxed"
						>
							Thoughtful updates and practical insights on building and
							delivering modern learning experiences.
						</Typography>
					</div>
					<Badge
						variant="outline"
						className="rounded-lg px-6 text-text-primary h-10 text-sm font-medium"
						asChild
					>
						<Link to="/blogs" search={{ page: 1 }}>
							Browse All Posts
						</Link>
					</Badge>
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
					{featuredPost && <VerticalBlogCard post={featuredPost} />}

					<div className="flex min-h-0 flex-col gap-4 lg:h-full">
						{sidePosts.map((post) => (
							<HorizontalBlogCard
								key={post.slug ?? `${post.tag}-${post.imageSrc}`}
								post={post}
							/>
						))}

						<Card className="mt-auto shrink-0 overflow-hidden rounded-4xl border-0 bg-[#1A1918]">
							<CardContent className="flex flex-col gap-4">
								<Typography
									variant="h4"
									className="font-medium max-w-[399px] leading-tight text-white"
								>
									Get weekly updates straight to your inbox
								</Typography>
								<form
									className="flex items-center rounded-lg bg-white/15 px-2 py-1.5 focus-within:ring-2 focus-within:ring-white/30"
									onSubmit={(e) => e.preventDefault()}
								>
									<Input
										type="email"
										placeholder="Enter your email"
										className="min-w-0 flex-1 border-0 bg-transparent text-white placeholder:text-white/70 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
									<Button type="submit" className="btn-brand-1">
										Subscribe
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
