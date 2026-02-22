import { ChevronRight, PlayCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TAGS = [
	"Courses",
	"Analytics",
	"Cohorts",
	"Quizzes",
	"Live Exam",
	"Live Class",
	"Recorded",
	"Problem Solving",
	"PDFs",
];

const SCORE_BARS = [
	{ month: "Jan", h: 40 },
	{ month: "Feb", h: 55 },
	{ month: "Mar", h: 35 },
	{ month: "Apr", h: 60 },
	{ month: "May", h: 45 },
	{ month: "Jun", h: 70 },
	{ month: "Jul", h: 50 },
	{ month: "Aug", h: 65 },
	{ month: "Sep", h: 55 },
	{ month: "Oct", h: 75 },
	{ month: "Nov", h: 60 },
	{ month: "Dec", h: 80 },
];

const EXAM_BARS = [
	{ month: "Jan", h: 30 },
	{ month: "Feb", h: 50 },
	{ month: "Mar", h: 40 },
	{ month: "Apr", h: 65 },
	{ month: "May", h: 55 },
	{ month: "Jun", h: 80 },
];

const TRUST_AVATARS = [
	{ fallback: "A", className: "bg-orange-400 text-white" },
	{ fallback: "B", className: "bg-blue-400 text-white" },
	{ fallback: "C", className: "bg-green-500 text-white" },
];

export default function HeroSection() {
	return (
		<section className="bg-white pt-(--es-nav-h)">
			<div className="mx-auto grid max-w-(--es-max-w) grid-cols-1 items-center gap-14 px-(--es-section-px) py-16 lg:grid-cols-2">
				{/* ── Left column ── */}
				<div className="flex flex-col gap-6">
					{/* Trust badge — Badge (outline) + AvatarGroup */}
					<Badge
						variant="outline"
						className="w-fit gap-3 rounded-full px-4 py-2 text-sm text-(--es-text-2) border-(--es-border-1) shadow-sm"
					>
						<AvatarGroup>
							{TRUST_AVATARS.map((a) => (
								<Avatar key={a.fallback} size="sm">
									<AvatarFallback className={a.className}>
										{a.fallback}
									</AvatarFallback>
								</Avatar>
							))}
						</AvatarGroup>
						<span>Trusted by 12,000+ creators</span>
						<ChevronRight size={14} className="text-(--es-text-3)" />
					</Badge>

					{/* Headline */}
					<h1 className="text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-(--es-text-1)">
						One platform for how you actually teach
					</h1>

					{/* Sub-headline */}
					<p className="text-lg text-(--es-text-2) leading-relaxed max-w-md">
						Courses, classrooms, communities, and coaching. One platform that
						adapts to how you teach and scale.
					</p>

					{/* CTAs — Button shadcn with --es-* overrides */}
					<div className="flex items-center gap-5">
						<Button className="rounded-full bg-(--es-brand) hover:bg-(--es-brand-hover) text-white h-auto px-7 py-3">
							Build Your Academy
						</Button>
						<Button
							variant="ghost"
							className="gap-2 px-0 text-(--es-text-1) hover:text-(--es-brand) hover:bg-transparent"
						>
							<PlayCircle size={22} />
							Watch Demo
						</Button>
					</div>

					{/* Feature tags — Badge (outline) per tag */}
					<div className="pt-2">
						<p className="text-xs text-(--es-text-3) mb-3">
							You can compose your own learning model
						</p>
						<div className="flex flex-wrap gap-2">
							{TAGS.map((tag) => (
								<Badge
									key={tag}
									variant="outline"
									className={cn(
										"cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors",
										tag === "Analytics"
											? "border-(--es-brand) bg-(--es-brand-light) text-(--es-brand) font-medium"
											: "border-(--es-border-1) text-(--es-text-2) hover:border-(--es-brand) hover:text-(--es-brand)",
									)}
								>
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</div>

				{/* ── Right column — dashboard mockup ── */}
				<div className="hidden lg:block">
					<div className="rounded-2xl border border-(--es-border-1) bg-linear-to-br from-blue-50 via-sky-50 to-indigo-50 p-5 shadow-2xl shadow-blue-100">
						{/* Mockup top bar */}
						<div className="mb-4 flex items-center justify-between">
							<span className="text-sm font-semibold text-(--es-text-1)">
								My Study
							</span>
							<div className="flex gap-3 text-xs text-(--es-text-3)">
								{[
									"Overview",
									"Ongoing Exams",
									"Upcoming Exams",
									"Past Exams",
									"Leaderboard",
								].map((tab, i) => (
									<span
										key={tab}
										className={
											i === 0
												? "text-(--es-brand) font-semibold border-b border-(--es-brand) pb-0.5"
												: ""
										}
									>
										{tab}
									</span>
								))}
							</div>
						</div>

						{/* Stat cards */}
						<div className="grid grid-cols-2 gap-3 mb-4">
							<div className="rounded-xl bg-white p-4 shadow-sm">
								<p className="text-xs text-(--es-text-3) mb-1">
									Exams Completed
								</p>
								<p className="text-2xl font-bold text-(--es-text-1)">248</p>
								<p className="mt-1 text-[11px] text-green-500">
									↑ 4.6% from last month
								</p>
								<svg
									className="mt-2 h-8 w-full"
									viewBox="0 0 100 30"
									preserveAspectRatio="none"
									aria-hidden="true"
								>
									<polyline
										points="0,25 20,18 40,20 60,10 80,14 100,8"
										fill="none"
										stroke="var(--es-brand)"
										strokeWidth="2"
									/>
								</svg>
							</div>
							<div className="rounded-xl bg-white p-4 shadow-sm">
								<p className="text-xs text-(--es-text-3) mb-1">
									Average Exam Score
								</p>
								<p className="text-2xl font-bold text-(--es-text-1)">30%</p>
								<p className="mt-1 text-[11px] text-red-400">
									↓ 2.4% from last month
								</p>
								<div className="mt-2 flex h-8 items-end gap-0.5">
									{SCORE_BARS.map(({ month, h }) => (
										<div
											key={month}
											className="flex-1 rounded-sm bg-green-400"
											style={{ height: `${h}%` }}
										/>
									))}
								</div>
							</div>
						</div>

						{/* Charts row */}
						<div className="grid grid-cols-2 gap-3">
							{/* Donut */}
							<div className="rounded-xl bg-white p-4 shadow-sm">
								<p className="text-xs text-(--es-text-3) mb-3">
									Performance Factors
								</p>
								<div className="flex justify-center">
									<div className="relative h-20 w-20">
										<svg
											viewBox="0 0 36 36"
											className="h-full w-full -rotate-90"
											aria-hidden="true"
										>
											<circle
												cx="18"
												cy="18"
												r="14"
												fill="none"
												stroke="#e2e8f0"
												strokeWidth="4"
											/>
											<circle
												cx="18"
												cy="18"
												r="14"
												fill="none"
												stroke="#ef4444"
												strokeWidth="4"
												strokeDasharray="22 66"
											/>
											<circle
												cx="18"
												cy="18"
												r="14"
												fill="none"
												stroke="#22c55e"
												strokeWidth="4"
												strokeDasharray="44 44"
												strokeDashoffset="-22"
											/>
										</svg>
										<div className="absolute inset-0 flex flex-col items-center justify-center">
											<span className="text-base font-bold text-(--es-text-1)">
												60%
											</span>
											<span className="text-[9px] text-(--es-text-3)">
												Correct
											</span>
										</div>
									</div>
								</div>
								<div className="mt-2 flex justify-center gap-3 text-[10px] text-(--es-text-3)">
									<span className="flex items-center gap-1">
										<span className="inline-block h-2 w-2 rounded-full bg-green-500" />
										Correct
									</span>
									<span className="flex items-center gap-1">
										<span className="inline-block h-2 w-2 rounded-full bg-red-400" />
										Wrong
									</span>
								</div>
							</div>

							{/* Bar chart */}
							<div className="rounded-xl bg-white p-4 shadow-sm">
								<p className="text-xs text-(--es-text-3) mb-3">
									Total Exam Taken
								</p>
								<div className="flex h-16 items-end gap-1">
									{EXAM_BARS.map(({ month, h }) => (
										<div
											key={month}
											className="flex flex-1 flex-col items-center gap-1"
										>
											<div
												className="w-full rounded-t-sm bg-blue-400/80"
												style={{ height: `${h}%` }}
											/>
											<span className="text-[9px] text-(--es-text-3)">
												{month.charAt(0)}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
