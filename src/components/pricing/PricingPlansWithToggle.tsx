import { PricingPlanCard } from '@/components/pricing/pricing-plan-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type BillingCycle, PRICING_PLANS } from '@/constants/pricing';
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
					<PricingPlanCard key={plan.id} plan={plan} billing={billing} />
				))}
			</div>
		</div>
	);
}
