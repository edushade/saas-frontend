import { ChevronRight, PlayCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TAGS, TRUST_AVATARS } from "@/constants/hero";
import { cn } from "@/lib/utils";

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

				<div className="hidden lg:block">
					<div className="rounded-2xl border border-(--es-border-1) bg-linear-to-br from-blue-50 via-sky-50 to-indigo-50 pt-5 pl-5 shadow-2xl shadow-blue-100">
						<img
							src="/svgs/hero/banner.svg"
							alt="Dashboard"
							className="h-full w-full object-cover object-top"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
