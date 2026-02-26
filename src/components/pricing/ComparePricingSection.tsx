import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui-custom/typography";
import { PRICING_PLANS, type PricingPlan } from "@/constants/pricing";
import { cn } from "@/lib/utils";
import { PricingCompareTable } from "./PricingCompareTable";

function CompareCard({ plan }: { plan: PricingPlan }) {
	const isFeatured = plan.featured === true;
	const isContact = plan.price.toLowerCase() === "contact us";

	return (
		<Card
			className={cn(
				"flex min-h-[184px] flex-col rounded-2xl border border-border-secondary bg-bg-primary shadow-sm transition-shadow hover:shadow-md",
			)}
		>
			<CardContent className="flex flex-1 flex-col gap-4">
				<Typography variant="h6" className="font-semibold text-text-primary">
					{plan.name}
				</Typography>

				<div className="flex items-baseline gap-1">
					{isContact ? (
						<Typography variant="h4" className="font-medium text-text-primary">
							{plan.price}
						</Typography>
					) : (
						<>
							<span className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
								{plan.price}
							</span>
							{plan.period && (
								<span className="text-base font-normal text-text-secondary">
									{plan.period}
								</span>
							)}
						</>
					)}
				</div>

				<Button
					className={cn(
						"mt-auto w-full rounded-md font-medium",
						isFeatured
							? "bg-brand-300 text-text-on-brand hover:bg-brand-200"
							: "bg-bg-tertiary text-text-primary hover:bg-bg-quaternary",
					)}
					variant={isFeatured ? "default" : "secondary"}
				>
					{plan.ctaLabel}
				</Button>
			</CardContent>
		</Card>
	);
}

export default function ComparePricingSection() {
	const [billing, setBilling] = useState<"monthly" | "annually">("monthly");

	return (
		<section className="bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto w-full max-w-(--es-max-w)">
				<div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="">
						<Typography
							variant="h1"
							className="font-medium leading-tight text-text-primary"
						>
							Compare Pricing Plans
						</Typography>
						<Typography
							variant="base"
							className="mt-2 font-normal text-text-secondary"
						>
							See what&apos;s included in each plan and choose the one that fits
							your teaching goals and scale.
						</Typography>
					</div>

					{/* Billing toggle: Save 20% badge with tooltip (same tooltip design as rest of app) */}
					<div className="relative flex flex-col items-end gap-1">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<span className="absolute -top-6 right-0 cursor-help rounded bg-text-primary px-2 py-0.5 text-xs font-medium text-white">
										Save 20%
									</span>
								</TooltipTrigger>
							</Tooltip>
						</TooltipProvider>
						<Tabs
							value={billing}
							onValueChange={(v) => setBilling(v as "monthly" | "annually")}
							className="flex flex-col items-end"
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

				{/* Cards at section end (right side), under the toggle — fixed card size */}
				<div className="flex justify-end">
					<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:w-[960px] lg:max-w-full">
						{PRICING_PLANS.map((plan) => (
							<CompareCard key={plan.id} plan={plan} />
						))}
					</div>
				</div>

				<div className="mt-12">
					<PricingCompareTable />
				</div>
			</div>
		</section>
	);
}
