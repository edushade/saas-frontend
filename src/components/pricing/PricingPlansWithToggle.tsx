import { CheckBoldIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	type BillingCycle,
	PRICING_PLANS,
	type PricingPlan,
} from "@/constants/pricing";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

function PricingCard({
	plan,
	billing,
}: {
	plan: PricingPlan;
	billing: BillingCycle;
}) {
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
					"relative flex h-full flex-col overflow-hidden rounded-[20px] border py-0 shadow-sm ",
					isFeatured
						? "border-transparent bg-royal-blue text-text-on-brand shadow-lg"
						: "bg-bg-primary text-card-foreground border-border",
				)}
			>
				{/* background gradient */}
				{isFeatured && (
					<div
						aria-hidden
						className={cn(
							"pointer-events-none absolute inset-0 z-0 rounded-2xl bg-grad-overlay-white",
						)}
					/>
				)}

				{isFeatured && (
					<div
						aria-hidden
						className="pointer-events-none absolute bottom-0 left-0 right-0 z-3 h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] rounded-b-[20px]"
					/>
				)}

				{/* shade overlay */}
				{isFeatured && (
					<CardShadeOverlay className="inset-0 z-1 w-full h-full backdrop-blur-[100px] bg-[repeating-linear-gradient(270deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px),linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)]" />
				)}

				<CardContent className="relative z-10 flex min-h-0 flex-1 flex-col gap-4 p-6">
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
							{displayPrice}
						</span>
						{displayPeriod && (
							<span
								className={cn(
									"text-base font-normal",
									isFeatured ? "text-white/90" : "text-text-secondary",
								)}
							>
								{displayPeriod}
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

					<ul className="flex min-h-0 flex-1 flex-col gap-2 pt-2">
						{displayFeatures.map((feature) => (
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
							"mt-auto w-full h-12 text-lg rounded-xl font-medium",
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

export default function PricingPlansWithToggle({
	billing,
	onBillingChange,
}: {
	billing: BillingCycle;
	onBillingChange: (v: BillingCycle) => void;
}) {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col items-center gap-3">
				<div className="relative flex items-center gap-1">
					<span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-text-primary px-2 py-0.5 text-xs font-medium text-white">
						Save 20%
					</span>
					<Tabs
						value={billing}
						onValueChange={(v) => onBillingChange(v as BillingCycle)}
						className="flex flex-col items-center"
					>
						<TabsList className="rounded-xl border border-border bg-bg-primary  p-1 h-16 group-data-[orientation=horizontal]/tabs:h-11 w-full lg:w-auto">
							<TabsTrigger
								value="monthly"
								className="rounded-md px-2 py-2.5 font-medium data-[state=active]:bg-brand-200 data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-primary"
							>
								Monthly
							</TabsTrigger>
							<TabsTrigger
								value="annually"
								className="rounded-md px-2 py-2.5 font-medium data-[state=active]:bg-brand-200 data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-primary"
							>
								Annually
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
				{PRICING_PLANS.map((plan) => (
					<PricingCard key={plan.id} plan={plan} billing={billing} />
				))}
			</div>
		</div>
	);
}
