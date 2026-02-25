export interface PricingPlan {
	id: string;
	name: string;
	price: string;
	period?: string;
	headline: string;
	description: string;
	tag?: string;
	featured?: boolean;
	features: string[];
	ctaLabel: string;
}

export const PRICING_PLANS: PricingPlan[] = [
	{
		id: "starter",
		name: "Starter",
		price: "$29",
		period: "/month",
		headline: "Perfect for solo educators",
		description:
			"Designed for independent creators launching their first courses and programs.",
		features: [
			"Student panel access",
			"Teacher panel access",
			"Course and lesson creation",
			"Email support",
			"Up to 100 students",
			"Basic analytics",
			"1 course",
			"Community access",
		],
		ctaLabel: "Get Started",
	},
	{
		id: "growth",
		name: "Growth",
		price: "$79",
		period: "/month",
		headline: "For expanding academies",
		description:
			"Built to scale programs, manage cohorts, and keep learning consistent.",
		tag: "Most Popular",
		featured: true,
		features: [
			"Admin panel access",
			"Cohorts and program management",
			"Advanced assessments and feedback",
			"Priority support",
			"Up to 1,000 students",
			"Advanced analytics",
			"Unlimited courses",
			"API access",
		],
		ctaLabel: "Get Started",
	},
	{
		id: "advanced",
		name: "Advanced",
		price: "Contact Us",
		period: "",
		headline: "Built for institutional scale",
		description:
			"Advanced controls and insights for complex learning environments.",
		features: [
			"Full admin controls and permissions",
			"Advanced reporting and insights",
			"Role-based access management",
			"API and system integrations",
			"Unlimited students",
			"Dedicated success manager",
			"SSO & custom branding",
		],
		ctaLabel: "Get Started",
	},
];

export const PRICING_FEATURED_GRADIENT =
	"bg-[linear-gradient(360deg,#000000_0%,rgba(0,0,0,0)_100%)]";
/** Full-width overlay: repeating stripes + bottom glow (single background) */
export const PRICING_FEATURED_OVERLAY =
	"backdrop-blur-[100px] bg-[repeating-linear-gradient(270deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.08)_60px),linear-gradient(0deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)]";
