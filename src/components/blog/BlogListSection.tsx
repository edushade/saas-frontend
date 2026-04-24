import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
} from "@/components/ui/pagination";
import { Typography } from "@/components/ui-custom/typography";
import { cn } from "@/lib/utils";
import type { BlogPostCardItem } from "../../lib/blog/blog-card-types";
import { VerticalBlogCard } from "./BlogCard";

export interface BlogListSectionProps {
	title?: string;
	posts: BlogPostCardItem[];
	currentPage: number;
	totalPages: number;
}

export function BlogListSection({
	title = "All Blog Posts",
	posts,
	currentPage,
	totalPages,
}: BlogListSectionProps) {
	const showLeftEllipsis = currentPage > 9;
	const showRightEllipsis = currentPage < totalPages - 2;

	return (
		<section className="bg-bg-secondary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w)">
				<Typography
					variant="h1"
					className="mb-8 text-2xl font-medium leading-tight text-text-primary md:text-3xl lg:text-3xl"
				>
					{title}
				</Typography>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
					{posts.map((post, index) => (
						<VerticalBlogCard
							key={`${post.headline}-${post.date}-${index}`}
							post={post}
						/>
					))}
				</div>

				{totalPages > 1 && (
					<Pagination className="mt-10 w-full flex-wrap justify-between gap-4">
						{/* Left: Previous */}
						<PaginationContent className="flex-1 justify-start">
							<PaginationItem>
								{currentPage > 1 ? (
									<Link
										to="/"
										search={{ page: currentPage - 1 }}
										aria-label="Go to previous page"
										className={cn(
											"inline-flex items-center justify-center gap-1 px-2.5 sm:pl-2.5",
											buttonVariants({ variant: "outline", size: "default" }),
										)}
									>
										<span className=" sm:block">Previous</span>
									</Link>
								) : (
									<span
										aria-disabled
										className={cn(
											"inline-flex items-center justify-center gap-1 px-2.5 sm:pl-2.5",
											buttonVariants({ variant: "outline", size: "default" }),
											"pointer-events-none opacity-50",
										)}
									>
										<span className=" sm:block">Previous</span>
									</span>
								)}
							</PaginationItem>
						</PaginationContent>

						{/* Center: Page numbers (box style) */}
						<PaginationContent className="flex flex-1 justify-center gap-1">
							{currentPage > 2 && (
								<PaginationItem>
									<Link
										to="/"
										search={{ page: 1 }}
										className={cn(
											buttonVariants({
												variant: currentPage === 1 ? "outline" : "ghost",
												size: "icon",
											}),
										)}
										aria-current={currentPage === 1 ? "page" : undefined}
									>
										1
									</Link>
								</PaginationItem>
							)}
							{showLeftEllipsis && (
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
							)}
							{[currentPage - 1, currentPage, currentPage + 1]
								.filter((p) => p >= 1 && p <= totalPages)
								.filter((p, i, arr) => arr.indexOf(p) === i)
								.map((p) => (
									<PaginationItem key={p}>
										<Link
											to="/"
											search={{ page: p }}
											className={cn(
												"",
												buttonVariants({
													variant: p === currentPage ? "outline" : "ghost",
													size: "icon",
												}),
											)}
											aria-current={p === currentPage ? "page" : undefined}
										>
											{p}
										</Link>
									</PaginationItem>
								))}
							{showRightEllipsis && (
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
							)}
							{currentPage < totalPages - 1 && (
								<PaginationItem>
									<Link
										to="/"
										search={{ page: totalPages }}
										className={cn(
											buttonVariants({
												variant:
													currentPage === totalPages ? "outline" : "ghost",
												size: "icon",
											}),
										)}
										aria-current={
											currentPage === totalPages ? "page" : undefined
										}
									>
										{totalPages}
									</Link>
								</PaginationItem>
							)}
						</PaginationContent>

						{/* Right: Next */}
						<PaginationContent className="flex-1 justify-end">
							<PaginationItem>
								{currentPage < totalPages ? (
									<Link
										to="/"
										search={{ page: currentPage + 1 }}
										aria-label="Go to next page"
										className={cn(
											"inline-flex items-center justify-center gap-1 px-2.5 sm:pr-2.5",
											buttonVariants({ variant: "outline", size: "default" }),
										)}
									>
										<span className="sm:block">Next</span>
									</Link>
								) : (
									<span
										aria-disabled
										className={cn(
											"inline-flex items-center justify-center gap-1 px-2.5 sm:pr-2.5",
											buttonVariants({ variant: "outline", size: "default" }),
											"pointer-events-none opacity-50",
										)}
									>
										<span className="sm:block">Next</span>
									</span>
								)}
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				)}
			</div>
		</section>
	);
}
