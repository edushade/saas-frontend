import { CheckBoldIcon } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CardShadeOverlay } from "@/components/ui-custom/card-shade-overlay";
import { Typography } from "@/components/ui-custom/typography";
import type { BillingCycle, PricingPlan } from "@/lib/pricing/data";
import { cn } from "@/lib/utils";

export type PricingPlanCardProps = {
	plan: PricingPlan;
	billing: BillingCycle;
};

/**
 * Single pricing tier card — same layout as the public pricing page, reusable in dashboard Plans.
 */
export function PricingPlanCard({ plan, billing }: PricingPlanCardProps) {
	const isFeatured = plan.featured === true;
	const isAnnually = billing === "annually";
	const displayPrice =
		isAnnually && plan.annualPrice != null ? plan.annualPrice : plan.price;
	const displayPeriod =
		isAnnually && plan.annualPeriod != null ? plan.annualPeriod : plan.period;
	const displayFeatures =
		isAnnually && plan.annualFeatures?.length
			? plan.annualFeatures
			: plan.features;

	return (
		<div
			className={cn(
				"h-full rounded-[20px] transition-shadow hover:shadow-md",
				isFeatured ? "border-2 border-brand-200 p-0.5" : "",
			)}
		>
			<Card
				className={cn(
					"relative flex h-full flex-col overflow-hidden rounded-[20px] border p-0 shadow-sm",
					isFeatured
						? "border-transparent bg-royal-blue text-text-on-brand shadow-sm"
						: "border-border-secondary bg-bg-primary text-card-foreground",
				)}
			>
				{isFeatured && (
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-grad-overlay-white"
					/>
				)}

				{isFeatured && (
					<div
						aria-hidden
						className="pointer-events-none absolute right-0 bottom-0 left-0 z-3 h-full rounded-b-[20px] bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]"
					/>
				)}

				{isFeatured && (
					<CardShadeOverlay className="inset-0 z-1 h-full w-full bg-[repeating-linear-gradient(270deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px),linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)] backdrop-blur-[100px]" />
				)}

				<CardContent className="relative z-10 flex flex-col gap-4 pt-6">
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
						{plan.tag ? (
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
						) : null}
					</div>

					<div className="flex items-baseline gap-1">
						<span
							className={cn(
								"text-3xl font-semibold tracking-tight",
								isFeatured ? "text-white" : "text-text-primary",
							)}
						>
							{displayPrice}
						</span>
						{displayPeriod ? (
							<span
								className={cn(
									"text-base font-normal",
									isFeatured ? "text-white/90" : "text-text-secondary",
								)}
							>
								{displayPeriod}
							</span>
						) : null}
					</div>
				</CardContent>

				<Separator
					className={cn(
						"relative z-10",
						isFeatured ? "bg-white/20" : "bg-border-secondary",
					)}
				/>

				<CardContent className="relative z-10">
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
								isFeatured ? "text-white/90" : "text-text-tertiary",
							)}
						>
							{plan.description}
						</Typography>
					</div>
				</CardContent>

				<Separator
					className={cn(
						"relative z-10",
						isFeatured ? "bg-white/20" : "bg-border-secondary",
					)}
				/>

				<CardContent className="relative z-10 flex min-h-0 flex-1 flex-col">
					<ul className="flex min-h-0 flex-1 flex-col gap-2 pt-2">
						{displayFeatures.map((feature) => (
							<li
								key={feature}
								className="flex items-center gap-2 text-sm leading-snug"
							>
								<div
									className={cn(
										"flex size-4 items-center justify-center rounded-full hover:bg-bg-quaternary",
										isFeatured ? "bg-[#FFFFFF29]" : "bg-bg-tertiary",
									)}
								>
									<CheckBoldIcon
										className={cn(
											"size-2",
											isFeatured ? "text-text-on-brand" : "text-brand-300",
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
				</CardContent>

				<Separator
					className={cn(
						"relative z-10",
						isFeatured ? "bg-white/20" : "bg-border-secondary",
					)}
				/>

				<CardContent className="relative z-10 pb-6">
					<Button
						type="button"
						className={cn(
							"h-12 w-full rounded-xl text-lg font-medium",
							isFeatured
								? "bg-brand-200 text-text-on-brand hover:bg-brand-200/90"
								: "bg-bg-tertiary text-text-primary hover:bg-bg-tertiary/90",
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
