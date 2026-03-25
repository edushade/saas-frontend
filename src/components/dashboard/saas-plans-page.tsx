import { useState } from 'react';
import PricingPlansWithToggle from '@/components/pricing/PricingPlansWithToggle';
import type { BillingCycle } from '@/constants/pricing';

export function SaasPlansPage() {
	const [billing, setBilling] = useState<BillingCycle>('monthly');

	return (
		<div className="flex flex-col gap-6 container w-full mx-auto">
			<PricingPlansWithToggle billing={billing} onBillingChange={setBilling} />
		</div>
	);
}
