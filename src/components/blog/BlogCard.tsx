import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui-custom/typography";
import {
	BLOG_CARD_FALLBACK_IMAGE,
	type BlogPostCardItem,
} from "./blog-card-types";

export interface BlogCardProps {
	post: BlogPostCardItem;
}

function CardLink({
	slug,
	children,
}: {
	slug?: string;
	children: React.ReactNode;
}) {
	if (slug) {
		return (
			<Link to="/blogs/$slug" params={{ slug }} className="block h-full">
				{children}
			</Link>
		);
	}
	return <>{children}</>;
}

export function VerticalBlogCard({ post }: BlogCardProps) {
	const card = (
		<Card className="flex flex-col rounded-2xl shadow-sm p-4 border border-border-tertiary bg-[rgba(248,249,252,1)] md:rounded-4xl lg:min-h-0 lg:h-full transition-shadow hover:shadow-sm">
			<CardContent className="shrink-0 px-0 rounded-3xl space-y-3">
				<div className="bg-[#F5F5F5] rounded-xl md:rounded-2xl overflow-hidden">
					<img
						src={post.imageSrc}
						alt={post.imageAlt}
						className="w-full h-auto min-h-[160px] md:min-h-0 object-cover"
						onError={(e) => {
							const el = e.currentTarget;
							if (el.src !== BLOG_CARD_FALLBACK_IMAGE)
								el.src = BLOG_CARD_FALLBACK_IMAGE;
						}}
					/>
				</div>
				<div className="flex flex-1 min-h-0 flex-col gap-3">
					<div className="flex flex-1 min-h-0 flex-col gap-3">
						<Typography
							variant="h5"
							className="font-medium leading-tight text-text-primary"
						>
							{post.headline}
						</Typography>
						{post.description != null && post.description !== "" && (
							<Typography
								variant="base"
								className="line-clamp-2 font-normal text-text-secondary leading-snug"
							>
								{post.description}
							</Typography>
						)}
						<div className="mt-auto flex items-center justify-between">
							<Badge className="flex flex-wrap items-center bg-bg-tertiary px-2 py-2 rounded-lg gap-2">
								<Badge
									className={`text-base font-medium rounded-lg px-3 py-1.5 border-0 ${post.tagClass}`}
								>
									{post.tag}
								</Badge>
								<Typography
									variant="base"
									className="font-normal text-text-primary"
								>
									{post.date}
								</Typography>
							</Badge>
							<Button
								variant="default"
								size="icon"
								className="bg-bg-tertiary size-10 shadow-none border-none text-text-primary"
							>
								<Plus className="size-4 text-text-secondary" />
								<span className="sr-only">More</span>
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
	return <CardLink slug={post.slug}>{card}</CardLink>;
}

export function HorizontalBlogCard({ post }: BlogCardProps) {
	const card = (
		<Card className="shrink-0 border-none rounded-4xl bg-[#F8F9FC] shadow-none transition-shadow hover:shadow-sm">
			<CardContent className="flex flex-col gap-4 sm:flex-row sm:gap-4">
				<img
					src={post.imageSrc}
					alt={post.imageAlt}
					className="h-40 w-full shrink-0 object-cover rounded-xl sm:h-30 sm:w-56 sm:rounded-none"
					onError={(e) => {
						const el = e.currentTarget;
						if (el.src !== BLOG_CARD_FALLBACK_IMAGE)
							el.src = BLOG_CARD_FALLBACK_IMAGE;
					}}
				/>
				<div className="min-w-0 flex-1">
					<Typography
						variant="h5"
						className="line-clamp-2 font-medium leading-tight text-text-primary"
					>
						{post.headline}
					</Typography>
					<div className="flex items-center justify-between">
						<Badge className="mt-2 flex flex-wrap items-center px-2 py-2 rounded-xl gap-2 bg-white">
							<Badge
								className={`text-base font-medium rounded-sm ${post.tagClass}`}
							>
								{post.tag}
							</Badge>
							<span className="text-base font-normal text-text-secondary">
								{post.date}
							</span>
						</Badge>
						<Button
							variant="default"
							size="icon"
							className="bg-white text-text-primary shadow-sm"
						>
							<Plus className="size-4" />
							<span className="sr-only">More</span>
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
	return <CardLink slug={post.slug}>{card}</CardLink>;
}
