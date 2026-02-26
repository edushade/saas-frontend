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

export function VerticalBlogCard({ post }: BlogCardProps) {
	return (
		<Card className="flex flex-col rounded-2xl shadow-sm border border-border-primary bg-[rgba(248,249,252,1)] md:rounded-4xl lg:min-h-0 lg:h-full">
			<CardContent className="shrink-0">
				<div className="bg-[#F5F5F5] rounded-xl md:rounded-4xl overflow-hidden">
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
			</CardContent>
			<CardContent className="flex flex-1 min-h-0 flex-col gap-3 pt-0">
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
						<Badge className="flex flex-wrap items-center bg-[#F5F5F5] px-2 py-2 rounded-xl gap-2">
							<Badge
								className={`text-base font-medium rounded-sm border-0 ${post.tagClass}`}
							>
								{post.tag}
							</Badge>
							<Typography
								variant="h6"
								className="font-normal text-text-secondary"
							>
								{post.date}
							</Typography>
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
}

export function HorizontalBlogCard({ post }: BlogCardProps) {
	return (
		<Card className="shrink-0 border-none rounded-4xl bg-[#F8F9FC] shadow-none">
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
}
