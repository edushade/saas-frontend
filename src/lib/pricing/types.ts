export type BillingCycle = "monthly" | "annually";

export interface PricingPlan {
	id: string;
	name: string;
	price: string;
	period?: string;
	annualPrice?: string;
	annualPeriod?: string;
	annualFeatures?: string[];
	headline: string;
	description: string;
	tag?: string;
	featured?: boolean;
	features: string[];
	ctaLabel: string;
}

export interface PricingCompareRow {
	feature: string;
	tooltip?: string;
	starter: string;
	growth: string;
	advanced: string;
	starterAnnual?: string;
	growthAnnual?: string;
	advancedAnnual?: string;
}
