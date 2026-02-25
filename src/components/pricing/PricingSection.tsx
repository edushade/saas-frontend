import { useState } from "react";
import { CheckBoldIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	PRICING_FEATURED_GRADIENT,
	PRICING_FEATURED_OVERLAY,
	PRICING_PLANS,
	type PricingPlan,
} from "@/constants/pricing";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

function PricingCard({ plan }: { plan: PricingPlan }) {
	const isFeatured = plan.featured === true;

	return (
		<div
			className={cn(
				isFeatured ? "border-2 border-brand-200 rounded-[20px] p-0.5" : "",
			)}
		>
			<Card
				className={cn(
					"relative flex flex-col overflow-hidden rounded-[20px] border py-0 shadow-sm",
					isFeatured
						? "border-transparent bg-[#003E9C] text-white shadow-lg"
						: "bg-bg-primary text-card-foreground border-border",
				)}
			>
				{isFeatured && (
					<div
						aria-hidden
						className={cn(
							"pointer-events-none absolute inset-0 z-0 rounded-2xl",
							PRICING_FEATURED_GRADIENT,
						)}
					/>
				)}

				{isFeatured && (
					<div
						aria-hidden
						className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3]  h-full	 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] rounded-b-[20px]"
					/>
				)}

				<CardShadeOverlay
					className={cn(
						isFeatured &&
							"inset-0 z-1 w-full h-full " + PRICING_FEATURED_OVERLAY,
					)}
				/>

				<CardContent className="relative z-10 flex flex-1 flex-col gap-4 p-6">
					<div className="flex items-center justify-between gap-2">
						<Typography
							variant="h6"
							className={cn(
								"font-semibold",
								isFeatured ? "text-white" : "text-text-primary",
							)}
						>
							{plan.name}
						</Typography>
						{plan.tag && (
							<Badge
								className={cn(
									"w-fit rounded-full px-3 py-1 text-xs font-medium",
									isFeatured
										? "bg-white/20 text-white"
										: "bg-brand-300 text-text-on-brand",
								)}
							>
								{plan.tag}
							</Badge>
						)}
					</div>

					<div className="flex items-baseline gap-1">
						<span
							className={cn(
								"text-3xl font-semibold tracking-tight",
								isFeatured ? "text-white" : "text-text-primary",
							)}
						>
							{plan.price}
						</span>
						{plan.period && (
							<span
								className={cn(
									"text-base font-normal",
									isFeatured ? "text-white/90" : "text-text-secondary",
								)}
							>
								{plan.period}
							</span>
						)}
					</div>

					<Separator
						className={cn("", isFeatured ? "bg-white/20" : "bg-border")}
					/>

					<div>
						<Typography
							variant="base"
							className={cn(
								"font-medium",
								isFeatured ? "text-white" : "text-text-primary",
							)}
						>
							{plan.headline}
						</Typography>
						<Typography
							variant="small"
							className={cn(
								"",
								isFeatured ? "text-white/90" : "text-text-tertiary",
							)}
						>
							{plan.description}
						</Typography>
					</div>

					<Separator
						className={cn("", isFeatured ? "bg-white/20" : "bg-border")}
					/>

					<ul className="flex flex-1 flex-col gap-2 pt-2">
						{plan.features.map((feature) => (
							<li
								key={feature}
								className="flex items-center gap-2 text-sm leading-snug"
							>
								<div
									className={cn(
										"rounded-full flex justify-center items-center hover:bg-bg-quaternary size-4",
										isFeatured ? "bg-[#FFFFFF29]" : "bg-bg-tertiary ",
									)}
								>
									<CheckBoldIcon
										className={cn(
											"size-2",
											isFeatured ? "text-white" : "text-brand-300",
										)}
									/>
								</div>

								<Typography
									variant="small"
									className={cn(
										"font-normal",
										isFeatured ? "text-text-on-brand" : "text-text-primary",
									)}
								>
									{feature}
								</Typography>
							</li>
						))}
					</ul>
					<Button
						className={cn(
							"mt-auto w-full text-lg rounded-md font-medium",
							isFeatured
								? "bg-brand-200 text-text-on-brand hover:bg-white/95"
								: "bg-bg-tertiary text-text-primary hover:bg-bg-quaternary",
						)}
						variant={isFeatured ? "default" : "secondary"}
					>
						{plan.ctaLabel}
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default function PricingSection() {
	const [billing, setBilling] = useState<"monthly" | "annually">("monthly");

	return (
		<section className="relative overflow-hidden bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(0deg,#ffffff,#ffffff),linear-gradient(180deg,#ffffff_-6.1%,#ffffff_20.43%,#b3e9ff_100%)]"
			/>

			<CardShadeOverlay
				aria-hidden
				className="bottom-0 left-0 right-0 top-auto z-0 h-1/2 min-h-[200px] w-full border-0 bg-[repeating-linear-gradient(270deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px),linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)] backdrop-blur-[100px]"
			/>

			{/* Content on top — same as Hero CardContent relative z-10 */}
			<div className="relative z-10 mx-auto w-full max-w-(--es-max-w) py-16">
				<div className="mx-auto mb-10 flex max-w-4xl flex-col items-center gap-4 text-center">
					<span className="rounded-full bg-bg-tertiary px-4 py-1.5 text-sm font-medium text-text-primary">
						Pricing
					</span>
					<Typography
						variant="h1"
						className="font-medium leading-tight text-text-primary"
					>
						Flexible Pricing, Built In
					</Typography>
					<Typography
						variant="h6"
						className="font-normal leading-relaxed text-text-secondary"
					>
						Design and organize learning experiences with flexible lesson types,
						structured paths, and clear pr ogression logic.
					</Typography>
					<div className="flex flex-col items-center gap-3 pt-2">
						<div className="relative flex items-center gap-1">
							<span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-text-primary px-2 py-0.5 text-xs font-medium text-white">
								Save 20%
							</span>
							<Tabs
								value={billing}
								onValueChange={(v) => setBilling(v as "monthly" | "annually")}
								className="flex flex-col items-center"
							>
								<TabsList className="h-20 rounded-sm border border-border bg-bg-primary p-1.5 w-fit">
									<TabsTrigger
										value="monthly"
										className="rounded-sm px-4 py-2.5 font-medium data-[state=active]:bg-brand-200 data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-primary"
									>
										Monthly
									</TabsTrigger>
									<TabsTrigger
										value="annually"
										className="rounded-sm px-4 py-2.5 font-medium data-[state=active]:bg-brand-200 data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-primary"
									>
										Annually
									</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{PRICING_PLANS.map((plan) => (
						<PricingCard key={plan.id} plan={plan} />
					))}
				</div>
			</div>
		</section>
	);
}
