import { BarChart3, BookOpen, LayoutDashboard, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Typography } from "../ui-custom/typography";

const NAV_ITEMS = [
	{ label: "Dashboard", icon: LayoutDashboard, active: true },
	{ label: "Learning Pathway", icon: BookOpen, active: false },
	{ label: "My Study", icon: BookOpen, active: false },
	{ label: "Exams", icon: BarChart3, active: false },
	{ label: "Question Bank", icon: BookOpen, active: false },
];

const SIDE_POSTS = [
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

const FALLBACK_IMAGE =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect fill='%23e2e8f0' width='120' height='80'/%3E%3Ctext fill='%2394a3b8' font-size='10' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";

export default function ResourceCenterSection() {
	return (
		<section className="bg-white py-10 md:py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				{/* Header: title + subtitle (left), Browse All Posts (right) */}
				<div className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
					<div className="min-w-0 max-w-[500px] sm:max-w-none">
						<Typography
							variant="h1"
							className="font-medium text-text-primary leading-tight"
						>
							Resource Center & Insights
						</Typography>
						<Typography
							variant="small"
							className="block font-normal max-w-[500px] text-text-secondary leading-relaxed sm:max-w-[500px]"
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

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto]">
					<Card className="overflow-hidden rounded-2xl shadow-sm border border-(--es-border-1) bg-[rgba(248, 249, 252, 1)] md:rounded-4xl">
						<CardContent className="">
							<div className="bg-[#F5F5F5] rounded-xl md:rounded-4xl overflow-hidden">
								<img
									src="/svgs/resource-center/Sidebar.svg"
									alt="Resource Center"
									className="w-full h-auto min-h-[160px] md:min-h-0 object-cover"
								/>
							</div>
						</CardContent>
						<CardContent className="">
							<div className="flex flex-1 flex-col gap-3">
								<Typography
									variant="h5"
									className="font-medium leading-tight text-(--es-text-1)"
								>
									Designing Learning Systems From the Educator&apos;s
									Perspective
								</Typography>
								<Typography
									variant="h6"
									className="line-clamp-2 font-normal text-(--es-text-2) leading-relaxed"
								>
									Why starting with educator intent leads to better learning
									outcomes and simpler platforms. A clear comparison of system
									design, flexibility, and rol...
								</Typography>
								<div className="flex items-center justify-between ">
									<Badge className="mt-2 flex flex-wrap items-center bg-[#F5F5F5] px-2 py-2 rounded-xl gap-2">
										<Badge
											className={`text-base font-medium rounded-sm bg-[#0E2D2A] text-white border-0`}
										>
											News
										</Badge>
										<Typography
											variant="h6"
											className="font-normal text-(--es-text-2)"
										>
											Jan 31, 2026
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

					<div className="flex flex-col gap-4">
						{SIDE_POSTS.map((post) => (
							<Card
								key={post.tag + post.imageSrc}
								className="border-none rounded-4xl bg-[#F8F9FC] shadow-none"
							>
								<CardContent className="flex flex-row gap-4">
									{/* <div className="h-30 w-56 shrink-0 overflow-hidden rounded-4xl border border-(--es-border-1) bg-muted"> */}
									<img
										src={post.imageSrc}
										alt={post.imageAlt}
										className="h-30 w-56"
										onError={(e) => {
											const el = e.currentTarget;
											if (el.src !== FALLBACK_IMAGE) el.src = FALLBACK_IMAGE;
										}}
									/>
									{/* </div> */}
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
												<span className="text-base font-normal text-(--es-text-2)">
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
						))}

						<Card className="overflow-hidden rounded-4xl border-0 bg-[#1A1918]">
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
