import { useState } from 'react';
import PricingPlansWithToggle from '@/components/pricing/PricingPlansWithToggle';
import type { BillingCycle } from '@/constants/pricing';
import SaasDashboardHeader from './saas-dashboard-header';

export function SaasPlansPage() {
	const [billing, setBilling] = useState<BillingCycle>('monthly');

	return (
		<div className="flex flex-col gap-3 md:gap-4">
			<SaasDashboardHeader />
			<div className="container mx-auto flex w-full flex-col gap-6">
				<PricingPlansWithToggle
					billing={billing}
					onBillingChange={setBilling}
				/>
			</div>
		</div>
	);
}
