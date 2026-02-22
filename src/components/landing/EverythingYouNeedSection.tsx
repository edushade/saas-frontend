import {
	BarChart3,
	BookOpen,
	ChevronRight,
	LayoutDashboard,
	Plus,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

const NAV_ITEMS = [
	{ label: "Dashboard", icon: LayoutDashboard, active: true },
	{ label: "Learning Pathway", icon: BookOpen, active: false },
	{ label: "My Study", icon: BookOpen, active: false },
	{ label: "Exams", icon: BarChart3, active: false },
	{ label: "Question Bank", icon: BookOpen, active: false },
];

const LEARNERS = [
	{ name: "Direct Me", initial: "DM" },
	{ name: "Muh", initial: "Mu" },
	{ name: "Abu", initial: "Ab" },
	{ name: "Uma", initial: "Um" },
	{ name: "Usm", initial: "Us" },
	{ name: "Ali H", initial: "AH" },
	{ name: "Md.", initial: "Md" },
];

export default function EverythingYouNeedSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				{/* Header: title (left) + description (right) */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start mb-10">
					<h2 className="text-3xl lg:text-4xl font-bold leading-tight text-(--es-text-1)">
						Everything you need for your platform
					</h2>
					<p className="text-(--es-text-2) leading-relaxed lg:pt-1">
						We replaced the messy tech stack with a clean, all-in-one engine.
						Create, market, and sell your courses without the 3 a.m. tech panic.
					</p>
				</div>

				{/* Carousel of feature cards */}
				<div className="relative">
					<Carousel
						opts={{ align: "start", loop: true, dragFree: false }}
						className="w-full"
					>
						<CarouselContent className="-ml-4">
							{/* Card 1: Smart Course Builder */}
							<CarouselItem className="pl-4 basis-[min(100%,320px)] sm:basis-[320px]">
								<Card className="overflow-hidden rounded-xl border border-(--es-border-1) shadow-sm bg-card h-full flex flex-col">
									<CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
										<div className="space-y-1.5">
											<div className="flex items-center justify-between gap-2">
												<span className="text-sm font-semibold text-(--es-text-1)">
													Smart Course Builder
												</span>
												<Plus className="size-4 text-(--es-text-3)" />
											</div>
											<p className="text-xs text-(--es-text-2) leading-snug">
												Create engaging lessons with quizzes and assignments
											</p>
										</div>
									</CardHeader>
									<CardContent className="flex flex-col gap-4 flex-1 pt-0">
										<Button
											size="sm"
											className="w-fit rounded-md bg-(--es-brand) hover:bg-(--es-brand-hover) text-white gap-1.5"
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
									</CardContent>
								</Card>
							</CarouselItem>

							{/* Card 2: Progress Tracking */}
							<CarouselItem className="pl-4 basis-[min(100%,320px)] sm:basis-[320px]">
								<Card className="overflow-hidden rounded-xl border border-(--es-border-1) shadow-sm bg-card h-full flex flex-col">
									<CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
										<div className="space-y-1.5">
											<div className="flex items-center justify-between gap-2">
												<span className="text-sm font-semibold text-(--es-text-1)">
													Progress Tracking
												</span>
												<Plus className="size-4 text-(--es-text-3)" />
											</div>
											<p className="text-xs text-(--es-text-2) leading-snug">
												Visualize learner progress through modules and
												assessments.
											</p>
										</div>
									</CardHeader>
									<CardContent className="flex flex-col items-center gap-4 flex-1 pt-0">
										<div className="relative size-28">
											<svg
												viewBox="0 0 36 36"
												className="size-full -rotate-90"
												aria-hidden
												role="img"
											>
												<title>64% average activity</title>
												<circle
													cx="18"
													cy="18"
													r="14"
													fill="none"
													stroke="var(--es-border-1)"
													strokeWidth="4"
												/>
												<circle
													cx="18"
													cy="18"
													r="14"
													fill="none"
													stroke="#22c55e"
													strokeWidth="4"
													strokeDasharray="64 24"
												/>
												<circle
													cx="18"
													cy="18"
													r="14"
													fill="none"
													stroke="#f97316"
													strokeWidth="4"
													strokeDasharray="12 76"
													strokeDashoffset="-64"
												/>
											</svg>
											<div className="absolute inset-0 flex flex-col items-center justify-center">
												<span className="text-sm font-bold text-(--es-text-1)">
													64%
												</span>
												<span className="text-[10px] text-(--es-text-3)">
													Avg. Activity
												</span>
											</div>
										</div>
										<div className="flex flex-col gap-1 w-full text-xs text-(--es-text-2)">
											<span className="flex items-center gap-2">
												<span className="size-2 rounded-full bg-green-500" />
												Correct: 412
											</span>
											<span className="flex items-center gap-2">
												<span className="size-2 rounded-full bg-orange-500" />
												Incorrect: 78
											</span>
											<span className="flex items-center gap-2">
												<span className="size-2 rounded-full bg-(--es-text-3)" />
												Skipped: 12
											</span>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>

							{/* Card 3: Content Library */}
							<CarouselItem className="pl-4 basis-[min(100%,320px)] sm:basis-[320px]">
								<Card className="overflow-hidden rounded-xl border border-(--es-border-1) shadow-sm bg-card h-full flex flex-col">
									<CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
										<div className="space-y-1.5">
											<div className="flex items-center justify-between gap-2">
												<span className="text-sm font-semibold text-(--es-text-1)">
													Content Library
												</span>
												<Plus className="size-4 text-(--es-text-3)" />
											</div>
											<p className="text-xs text-(--es-text-2) leading-snug">
												Access a variety of resources and materials for course
												creation.
											</p>
										</div>
									</CardHeader>
									<CardContent className="flex flex-col gap-3 flex-1 pt-0">
										<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--es-brand) text-white text-xl font-bold">
											A
										</div>
										<p className="text-sm font-medium text-(--es-text-1) leading-tight">
											Building High-Performing Project Teams
										</p>
										<p className="text-xs text-(--es-text-2)">
											Entry-level course • 4.9 ★
										</p>
										<Button
											variant="ghost"
											size="sm"
											className="w-fit gap-1.5 text-(--es-brand) hover:text-(--es-brand-hover) hover:bg-(--es-brand-light) -ml-2"
										>
											Join the Class
											<ChevronRight className="size-4" />
										</Button>
									</CardContent>
								</Card>
							</CarouselItem>

							{/* Card 4: Learner Community */}
							<CarouselItem className="pl-4 basis-[min(100%,320px)] sm:basis-[320px]">
								<Card className="overflow-hidden rounded-xl border border-(--es-border-1) shadow-sm bg-card h-full flex flex-col">
									<CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
										<div className="space-y-1.5">
											<div className="flex items-center justify-between gap-2">
												<span className="text-sm font-semibold text-(--es-text-1)">
													Learner Community
												</span>
												<Plus className="size-4 text-(--es-text-3)" />
											</div>
											<p className="text-xs text-(--es-text-2) leading-snug">
												Enable learner interaction, discussions and groups
											</p>
										</div>
									</CardHeader>
									<CardContent className="flex flex-col gap-2 flex-1 pt-0">
										<div className="flex flex-col gap-1.5">
											{LEARNERS.map((learner) => (
												<div
													key={learner.name}
													className="flex items-center gap-2"
												>
													<Avatar size="sm" className="size-7">
														<AvatarFallback className="bg-muted text-(--es-text-2) text-xs">
															{learner.initial}
														</AvatarFallback>
													</Avatar>
													<span className="text-sm text-(--es-text-1)">
														{learner.name}
													</span>
													{learner.name === "Direct Me" && (
														<Badge className="ml-auto size-5 rounded-full bg-red-500 px-1.5 text-[10px] text-white">
															9+
														</Badge>
													)}
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
