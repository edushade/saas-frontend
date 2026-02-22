import {
	BarChart3,
	BookOpen,
	FileText,
	LayoutDashboard,
	Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NAV_ITEMS = [
	{ label: "Dashboard", icon: LayoutDashboard, active: true },
	{ label: "Learning Pathway", icon: BookOpen, active: false },
	{ label: "My Study", icon: BookOpen, active: false },
	{ label: "Exams", icon: BarChart3, active: false },
	{ label: "Question Bank", icon: BookOpen, active: false },
];

/** Image paths for right-column cards. Put dashboard/settings screenshots in public/resource-center/ */
const SIDE_POSTS = [
	{
		headline: "Designing Learning Systems From the Educator's Perspective",
		tag: "Posts",
		tagClass: "bg-emerald-100 text-emerald-800 border-0",
		date: "Jan 31, 2026",
		imageSrc: "/resource-center/post-dashboard.jpg",
		imageAlt: "Dashboard UI preview",
	},
	{
		headline: "Designing Learning Systems From the Educator's Perspective",
		tag: "Update",
		tagClass: "bg-teal-100 text-teal-800 border-0",
		date: "Jan 31, 2026",
		imageSrc: "/resource-center/post-settings.jpg",
		imageAlt: "Question Settings UI preview",
	},
];

const FALLBACK_IMAGE =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect fill='%23e2e8f0' width='120' height='80'/%3E%3Ctext fill='%2394a3b8' font-size='10' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";

export default function ResourceCenterSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				{/* Header: title + subtitle (left), Browse All Posts (right) */}
				<div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h2 className="text-3xl font-bold leading-tight text-(--es-text-1) lg:text-4xl">
							Resource Center & Insights
						</h2>
						<p className="mt-3 max-w-xl text-(--es-text-2) leading-relaxed">
							Thoughtful updates and practical insights on building and
							delivering modern learning experiences.
						</p>
					</div>
					<Button
						variant="outline"
						className="w-fit shrink-0 rounded-lg border-(--es-border-1) bg-(--es-surface-2) text-(--es-text-1) hover:bg-(--es-border-1) gap-2"
					>
						<FileText className="size-4" />
						Browse All Posts
					</Button>
				</div>

				{/* Two columns: left = one large card, right = stacked cards with images */}
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto]">
					{/* Left column: single large card */}
					<Card className="overflow-hidden rounded-2xl border border-(--es-border-1) bg-linear-to-b from-blue-50/80 to-white shadow-sm">
						<CardContent className="flex flex-col p-0">
							{/* Embedded UI mockup */}
							<div className="border-b border-(--es-border-1) bg-(--es-surface-2)/80 p-5">
								<Button
									size="sm"
									className="mb-4 w-fit rounded-md bg-(--es-brand) hover:bg-(--es-brand-hover) text-white gap-1.5"
								>
									<Plus className="size-4" />
									Join New Class
								</Button>
								<nav className="flex flex-col gap-0.5">
									{NAV_ITEMS.map((item) => (
										<div
											key={item.label}
											className={
												item.active
													? "flex items-center gap-2 rounded-md bg-(--es-brand-light) px-2 py-1.5 text-(--es-brand)"
													: "flex items-center gap-2 px-2 py-1.5 text-(--es-text-2)"
											}
										>
											<item.icon className="size-4 shrink-0" />
											<span className="text-sm">{item.label}</span>
										</div>
									))}
								</nav>
							</div>
							{/* Article details */}
							<div className="flex flex-1 flex-col gap-3 p-6">
								<h3 className="text-lg font-bold leading-tight text-(--es-text-1)">
									Designing Learning Systems From the Educator&apos;s
									Perspective
								</h3>
								<p className="line-clamp-2 text-sm text-(--es-text-2) leading-relaxed">
									Why starting with educator intent leads to better learning
									outcomes and simpler platforms. A clear comparison of system
									design, flexibility, and rol...
								</p>
								<div className="mt-auto flex items-center justify-between gap-4">
									<div className="flex items-center gap-3">
										<Badge className="rounded-full border-0 bg-(--es-brand-light) px-3 py-1 text-(--es-brand)">
											News
										</Badge>
										<span className="text-sm text-(--es-text-2)">
											Jan 31, 2026
										</span>
									</div>
									<Button
										variant="ghost"
										size="icon"
										className="size-9 rounded-full shrink-0"
									>
										<Plus className="size-4" />
										<span className="sr-only">Read more</span>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Right column: stacked cards, each with image inside card */}
					<div className="flex flex-col gap-4">
						{SIDE_POSTS.map((post) => (
							<Card
								key={post.tag + post.imageSrc}
								className="overflow-hidden rounded-xl border border-(--es-border-1) bg-card shadow-sm"
							>
								<CardContent className="flex flex-row gap-4 p-4">
									{/* Image inside card — use screenshot from public/resource-center/ */}
									<div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg border border-(--es-border-1) bg-muted">
										<img
											src={post.imageSrc}
											alt={post.imageAlt}
											className="h-full w-full object-cover"
											onError={(e) => {
												const el = e.currentTarget;
												if (el.src !== FALLBACK_IMAGE) el.src = FALLBACK_IMAGE;
											}}
										/>
									</div>
									<div className="min-w-0 flex-1">
										<h3 className="line-clamp-2 text-sm font-bold leading-tight text-(--es-text-1)">
											{post.headline}
										</h3>
										<div className="mt-2 flex flex-wrap items-center gap-2">
											<Badge
												className={`rounded-full text-xs ${post.tagClass}`}
											>
												{post.tag}
											</Badge>
											<span className="text-xs text-(--es-text-2)">
												{post.date}
											</span>
										</div>
									</div>
									<Button
										variant="ghost"
										size="icon"
										className="size-8 shrink-0 rounded-full"
									>
										<Plus className="size-4" />
										<span className="sr-only">More</span>
									</Button>
								</CardContent>
							</Card>
						))}

						{/* Newsletter CTA card */}
						<Card className="overflow-hidden rounded-xl border-0 bg-linear-to-br from-indigo-600 to-purple-700 shadow-lg">
							<CardContent className="flex flex-col gap-4 p-6">
								<h3 className="text-base font-bold leading-tight text-white">
									Get weekly updates straight to your inbox
								</h3>
								<form
									className="flex flex-col gap-3 sm:flex-row"
									onSubmit={(e) => e.preventDefault()}
								>
									<Input
										type="email"
										placeholder="Enter your email"
										className="min-w-0 flex-1 rounded-lg border-0 bg-white/15 text-white placeholder:text-white/70 focus-visible:ring-2 focus-visible:ring-white/30"
									/>
									<Button
										type="submit"
										className="shrink-0 rounded-lg bg-(--es-brand) hover:bg-(--es-brand-hover) text-white"
									>
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
