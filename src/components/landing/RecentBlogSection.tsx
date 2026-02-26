import {
	type BlogPostCardItem,
	HorizontalBlogCard,
	VerticalBlogCard,
} from "@/components/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Typography } from "../ui-custom/typography";

const SIDE_POSTS: BlogPostCardItem[] = [
	{
		headline: "Designing Learning Systems From the Educator's Perspective",
		tag: "Posts",
		tagClass: "bg-[#0E2D2A] text-white border-0",
		date: "Jan 31, 2026",
		imageSrc: "/svgs/resource-center/3.svg",
		imageAlt: "Dashboard UI preview",
	},
	{
		headline: "Designing Learning Systems From the Educator's Perspective",
		tag: "Update",
		tagClass: "bg-[#2FC7B9] text-white border-0",
		date: "Jan 31, 2026",
		imageSrc: "/svgs/resource-center/4.svg",
		imageAlt: "Question Settings UI preview",
	},
];

const FEATURED_POST: BlogPostCardItem = {
	headline: "Designing Learning Systems From the Educator's Perspective",
	tag: "News",
	tagClass: "bg-[#0E2D2A] text-white",
	date: "Jan 31, 2026",
	imageSrc: "/svgs/resource-center/Sidebar.svg",
	imageAlt: "Resource Center",
	description:
		"Why starting with educator intent leads to better learning outcomes and simpler platforms. A clear comparison of system design, flexibility, and rol...",
};

export default function RecentBlogSection() {
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
					>
						Browse All Posts
					</Badge>
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
					<VerticalBlogCard post={FEATURED_POST} />

					<div className="flex min-h-0 flex-col gap-4 lg:h-full">
						{SIDE_POSTS.map((post) => (
							<HorizontalBlogCard
								key={`${post.tag}-${post.imageSrc}`}
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
