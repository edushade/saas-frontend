import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/constants/testimonials";
import {
	TESTIMONIALS,
	TESTIMONIALS_INITIAL_COUNT,
	TESTIMONIALS_LOAD_MORE_COUNT,
} from "@/constants/testimonials";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

function TestimonialCard({
	id,
	quote,
	name,
	role,
	initial,
	variant,
	company,
	avatarSrc,
	profileSrc,
	logoSrc,
}: Testimonial) {
	const isGradient = variant === "gradient";
	const isId3 = id === "3";
	const isId4 = id === "4";

	const cardBgClass = isId3 ? "bg-[#B30065]" : isId4 ? "bg-[#108700]" : "";
	const gradientLayerClass = isId3
		? "bg-[linear-gradient(360deg,#1A1918_0%,rgba(26,25,24,0)_90%)]"
		: isId4
			? "bg-[linear-gradient(360deg,#108700_0%,rgba(16,135,0,0)_90%)]"
			: "";
	const overlayClass = isId3
		? "backdrop-blur-[100px] bg-[repeating-linear-gradient(270deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px)] [background-image:repeating-linear-gradient(270deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px),linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)]"
		: isId4
			? " backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px)] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px),linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)]"
			: "";

	return (
		<Card
			className={`flex h-full min-h-0 flex-col overflow-hidden max-w-[408px] rounded-[20px] py-0 border-none shadow-none ${isGradient ? "border-0 text-white" : "bg-bg-tertiary shadow-sm text-card-foreground"} ${cardBgClass}`}
		>
			<div
				className={`relative z-20 flex min-h-0 flex-1 flex-col gap-4 p-6 ${gradientLayerClass}`}
			>
				<CardShadeOverlay className={overlayClass} />

				{isGradient && (
					<div
						aria-hidden
						className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3]  h-full	 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] rounded-b-[20px]"
					/>
				)}

				{isGradient && (
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-6"
					>
						<img
							src="/svgs/educator-say/Vector.svg"
							alt=""
							className="h-auto max-h-full w-auto max-w-full object-contain opacity-90 animate-vector-float"
						/>
					</div>
				)}

				{isGradient && company && logoSrc && (
					<div className="relative z-20 flex h-[40px] w-[120px] shrink-0 items-center">
						<img
							src={logoSrc}
							alt={company}
							className="h-full w-full object-contain object-left"
						/>
					</div>
				)}
				<CardContent
					className={cn(
						"relative z-10 flex min-h-0 flex-1 flex-col gap-4 p-0",
						isGradient && "justify-end",
					)}
				>
					<blockquote
						className={cn(
							"text-base font-normal leading-snug",
							isGradient
								? "shrink-0  text-white/90"
								: "min-h-0 flex-1 text-text-primary",
						)}
					>
						&quot;{quote}&quot;
					</blockquote>
					<div
						className={cn(
							"flex shrink-0 items-center gap-3",
							!isGradient && "mt-auto",
							isGradient && "pt-2",
						)}
					>
						<Avatar size="lg" className="size-16 shrink-0">
							{(profileSrc ?? avatarSrc) && (
								<AvatarImage
									src={profileSrc ?? avatarSrc}
									alt={name}
									className={profileSrc ? "object-contain" : "object-cover"}
								/>
							)}
							<AvatarFallback
								className={`size-16 ${
									isGradient
										? "bg-bg-tertiary text-white"
										: "bg-bg-tertiary text-text-secondary"
								}`}
							>
								{initial}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0">
							<Typography
								variant="base"
								className={`truncate font-semibold ${isGradient ? "text-white" : "text-text-primary"}`}
							>
								{name}
							</Typography>
							<Typography
								variant="base"
								className={`truncate font-normal text-text-secondary ${isGradient ? "text-white/90" : "text-text-secondary"}`}
							>
								{role}
							</Typography>
						</div>
					</div>
				</CardContent>
			</div>
		</Card>
	);
}

export default function EducatorsSaySection() {
	const [visibleCount, setVisibleCount] = useState(TESTIMONIALS_INITIAL_COUNT);
	const visible = TESTIMONIALS.slice(0, visibleCount);
	const hasMore = visibleCount < TESTIMONIALS.length;
	const isExpanded = visibleCount > TESTIMONIALS_INITIAL_COUNT;

	const handleSeeMore = () => {
		setVisibleCount((c) =>
			Math.min(c + TESTIMONIALS_LOAD_MORE_COUNT, TESTIMONIALS.length),
		);
	};

	const handleSeeLess = () => {
		setVisibleCount(TESTIMONIALS_INITIAL_COUNT);
	};

	return (
		<section className="bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w)  flex flex-col gap-10 lg:gap-14">
				<div className="flex flex-col gap-4 items-center justify-center">
					<Typography
						variant="h1"
						className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
					>
						What educators say about Edushade
					</Typography>
					<Typography
						variant="h6"
						className="font-normal leading-snug text-text-secondary max-w-[960px] text-center"
					>
						Edushade is built for educators, focusing on how they plan, teach,
						and support students. The platform is tailored to instructional
						needs, not software.
					</Typography>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7 md:auto-rows-[minmax(200px,1fr)]">
					{visible.map((t) => (
						<div key={t.id} className={t.rowSpan === 2 ? "md:row-span-2" : ""}>
							<TestimonialCard {...t} />
						</div>
					))}
				</div>

				<div className="flex justify-center">
					{isExpanded ? (
						<Button
							variant="secondary"
							className="rounded-xl bg-bg-tertiary  font-medium text-sm leading-snug text-text-primary hover:bg-bg-tertiary/80"
							onClick={handleSeeLess}
						>
							See Less
						</Button>
					) : (
						hasMore && (
							<Button
								variant="secondary"
								className="rounded-xl bg-bg-tertiary  font-medium text-sm leading-snug text-text-primary hover:bg-bg-tertiary/80"
								onClick={handleSeeMore}
							>
								See More
							</Button>
						)
					)}
				</div>
			</div>
		</section>
	);
}
