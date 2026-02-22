import { Link } from "@tanstack/react-router";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
	{
		quote:
			"Edushade's data insights have revolutionized our teaching methods. We've moved from guesswork to strategies.",
		name: "Anya Petrova",
		role: "Director of Innovation, GlobalEd Initi...",
		initial: "AP",
		variant: "white" as const,
		rowSpan: 1,
	},
	{
		quote:
			"Edushade's custom reports gave us key insights into our performance and helped us improve our business.",
		name: "Jane Cooper",
		role: "Founder of Velocity",
		initial: "JC",
		variant: "gradient-pink" as const,
		rowSpan: 2,
	},
	{
		quote:
			"I highly recommend Edushade! It's streamlined operations and created clear growth paths.",
		name: "Anya Petrova",
		role: "Director of Innovation, GlobalEd Initi...",
		initial: "AP",
		variant: "white" as const,
		rowSpan: 1,
	},
	{
		quote:
			"Edushade has transformed our curriculum planning. The customization is amazing! Now, we're more connected with our students!",
		name: "Clara Johnson",
		role: "Curriculum Developer, BrightFuture...",
		initial: "CJ",
		variant: "white" as const,
		rowSpan: 1,
	},
	{
		quote:
			"Edushade has boosted our student engagement. We're more connected with our students than ever!",
		name: "Markus Lee",
		role: "Director of Student Success, LearnW...",
		initial: "ML",
		variant: "white" as const,
		rowSpan: 1,
	},
	{
		quote:
			"Edushade's custom reports gave us key insights into our performance and helped us improve our business.",
		name: "Jane Cooper",
		role: "Founder of Velocity",
		initial: "JC",
		variant: "gradient-green" as const,
		rowSpan: 2,
	},
	{
		quote:
			"I highly recommend Edushade! It's streamlined operations and created clear growth paths.",
		name: "Sofia Patel",
		role: "Founder, NextGen Education",
		initial: "SP",
		variant: "white" as const,
		rowSpan: 1,
	},
];

function TestimonialCard({
	quote,
	name,
	role,
	initial,
	variant,
	rowSpan,
}: (typeof TESTIMONIALS)[number]) {
	const isGradient = variant !== "white";

	return (
		<Card
			className={`flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-(--es-border-1) py-0 shadow-sm ${rowSpan === 2 ? "lg:row-span-2" : ""} ${isGradient ? "border-0 text-white" : "bg-card text-card-foreground"}`}
		>
			<div
				className={`relative flex min-h-0 flex-1 flex-col gap-4 p-6 ${variant === "gradient-pink" ? "bg-linear-to-br from-pink-500 to-purple-600" : ""} ${variant === "gradient-green" ? "bg-linear-to-br from-emerald-500 to-teal-600" : ""}`}
			>
				{/* Subtle grid pattern overlay for gradient cards */}
				{isGradient && (
					<div
						className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.08]"
						aria-hidden
					/>
				)}
				{isGradient && (
					<p className="relative z-10 text-sm font-semibold tracking-wide text-white/95">
						Velocity
					</p>
				)}
				<CardContent className="relative z-10 flex flex-1 flex-col gap-4 p-0">
					<blockquote className="flex-1 text-sm leading-relaxed">
						&quot;{quote}&quot;
					</blockquote>
					<div className="mt-auto flex items-center gap-3">
						<Avatar size="sm" className="size-9 shrink-0">
							<AvatarFallback
								className={
									isGradient
										? "bg-white/20 text-white"
										: "bg-muted text-(--es-text-2)"
								}
							>
								{initial}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0">
							<p
								className={`truncate text-sm font-semibold ${isGradient ? "text-white" : "text-(--es-text-1)"}`}
							>
								{name}
							</p>
							<p
								className={`truncate text-xs ${isGradient ? "text-white/90" : "text-(--es-text-2)"}`}
							>
								{role}
							</p>
						</div>
					</div>
				</CardContent>
			</div>
		</Card>
	);
}

export default function EducatorsSaySection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="mb-10 text-center">
					<h2 className="text-3xl font-bold leading-tight text-(--es-text-1) lg:text-4xl">
						What educators say about Edushade
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-(--es-text-2) leading-relaxed">
						Edushade is built for educators, focusing on how they plan, teach,
						and support students. The platform is tailored to instructional
						needs, not software.
					</p>
				</div>

				{/* SSR-safe staggered grid: CSS Grid + row-span, no JS */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(200px,auto)]">
					{TESTIMONIALS.map((t) => (
						<TestimonialCard key={`${t.name}-${t.quote.slice(0, 20)}`} {...t} />
					))}
				</div>

				<div className="mt-10 flex justify-center">
					<Link
						to="/"
						className="text-sm font-medium text-(--es-text-1) underline-offset-4 hover:underline"
					>
						See More
					</Link>
				</div>
			</div>
		</section>
	);
}
