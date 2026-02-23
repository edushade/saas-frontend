import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/constants/testimonials";
import {
	TESTIMONIALS,
	TESTIMONIALS_INITIAL_COUNT,
	TESTIMONIALS_LOAD_MORE_COUNT,
} from "@/constants/testimonials";
import { Button } from "../ui/button";
import { Typography } from "../ui-custom/typography";

function TestimonialCard({
	quote,
	name,
	role,
	initial,
	variant,
	rowSpan,
	gradientKind,
	company,
}: Testimonial) {
	const isGradient = variant === "gradient";
	const gradientClass =
		gradientKind === "purple-pink"
			? "bg-linear-to-br from-purple-600 to-pink-500"
			: gradientKind === "green"
				? "bg-linear-to-br from-emerald-600 to-teal-500"
				: "";

	return (
		<Card
			className={`flex h-full min-h-0 flex-col overflow-hidden rounded-3xl py-0 border-none shadow-none ${rowSpan === 2 ? "md:row-span-2" : ""} ${isGradient ? "border-0 text-white" : "bg-bg-tertiary shadow-sm text-card-foreground"}`}
		>
			<div
				className={`relative flex min-h-0 flex-1 flex-col gap-4 p-6 ${gradientClass}`}
			>
				{isGradient && (
					<div
						className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.12]"
						aria-hidden
					/>
				)}
				{isGradient && company && (
					<p className="relative z-10 text-sm font-semibold tracking-wide text-white/95">
						{company}
					</p>
				)}
				<CardContent className="relative z-10 flex flex-1 flex-col gap-4 p-0">
					<blockquote className="flex-1 text-base font-normal text-text-primary leading-snug">
						&quot;{quote}&quot;
					</blockquote>
					<div className="mt-auto flex items-center gap-3">
						<Avatar size="lg" className="size-16 shrink-0">
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
		<section className="bg-bg-primary py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="mb-10 text-center">
					<Typography
						variant="h1"
						className="font-medium leading-snug text-text-primary"
					>
						What educators say about Edushade
					</Typography>
					<Typography
						variant="h6"
						className="font-normal leading-snug text-text-secondary"
					>
						Edushade is built for educators, focusing on how they plan, teach,
						and support students. The platform is tailored to instructional
						needs, not software.
					</Typography>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(200px,1fr)]">
					{visible.map((t) => (
						<TestimonialCard key={t.id} {...t} />
					))}
				</div>

				<div className="mt-10 flex justify-center">
					{isExpanded ? (
						<Button
							variant="secondary"
							className="rounded-lg bg-bg-tertiary px-6 font-medium text-sm leading-snug text-text-primary hover:bg-bg-tertiary/80"
							onClick={handleSeeLess}
						>
							See Less
						</Button>
					) : (
						hasMore && (
							<Button
								variant="secondary"
								className="rounded-lg bg-bg-tertiary px-6 font-medium text-sm leading-snug text-text-primary hover:bg-bg-tertiary/80"
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
