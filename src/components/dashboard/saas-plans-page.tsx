import { useState } from "react";
import PricingPlansWithToggle from "@/components/pricing/PricingPlansWithToggle";
import { Typography } from "@/components/ui-custom/typography";
import type { BillingCycle } from "@/constants/pricing";

/**
 * Dashboard plans view — reuses the same pricing cards and monthly/annual toggle as the marketing site (`PRICING_PLANS`).
 */
export function SaasPlansPage() {
	const [billing, setBilling] = useState<BillingCycle>("monthly");

	return (
		<div className="flex flex-col gap-6">
			<Typography variant="h5" className="font-semibold text-text-primary">
				Plans
			</Typography>
			<PricingPlansWithToggle billing={billing} onBillingChange={setBilling} />
		</div>
	);
}
