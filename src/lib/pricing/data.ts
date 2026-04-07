import type { PricingCompareRow, PricingPlan } from "@/lib/pricing";

export interface PricingCompareSection {
	title: string;
	rows: PricingCompareRow[];
}

export const PRICING_COMPARE_SECTIONS: PricingCompareSection[] = [
	{
		title: "Platform Setup",
		rows: [
			{
				feature: "Starting price",
				tooltip: "Per month; annual billing saves 20%.",
				starter: "$29",
				growth: "$79",
				advanced: "Contact us",
				starterAnnual: "$23",
				growthAnnual: "$63",
				advancedAnnual: "Contact us",
			},
			{
				feature: "Custom Platform Domains",
				tooltip: "Connect your own domain to your learning platform.",
				starter: "1",
				growth: "3",
				advanced: "Unlimited",
			},
			{
				feature: "White Label Branding",
				tooltip: "Remove Edushade branding and use your own.",
				starter: "Limited",
				growth: "Full",
				advanced: "Full",
			},
		],
	},
	{
		title: "Courses & Content",
		rows: [
			{
				feature: "Courses",
				tooltip: "Number of courses you can publish.",
				starter: "5",
				growth: "25",
				advanced: "Unlimited",
			},
			{
				feature: "Lessons per Course",
				tooltip: "Maximum lessons per course.",
				starter: "Limited",
				growth: "Unlimited",
				advanced: "Unlimited",
			},
			{
				feature: "Learning Paths",
				tooltip: "Structured sequences of courses.",
				starter: "2",
				growth: "10",
				advanced: "Unlimited",
			},
			{
				feature: "Content Storage",
				tooltip: "Total storage for videos and files.",
				starter: "10 GB",
				growth: "100 GB",
				advanced: "Custom",
			},
		],
	},
	{
		title: "Learners & Access",
		rows: [
			{
				feature: "Active Learners",
				tooltip: "Concurrent or monthly active learners.",
				starter: "50",
				growth: "500",
				advanced: "Unlimited",
			},
			{
				feature: "Cohort-Based Courses",
				tooltip: "Courses with fixed start and end dates.",
				starter: "3",
				growth: "15",
				advanced: "Unlimited",
			},
			{
				feature: "Certificates",
				tooltip: "Issue completion certificates.",
				starter: "Limited",
				growth: "Full",
				advanced: "Custom",
			},
		],
	},
	{
		title: "Engagement & Delivery",
		rows: [
			{
				feature: "Live Classes",
				tooltip: "Number of live class sessions you can run.",
				starter: "10",
				growth: "50",
				advanced: "Unlimited",
			},
			{
				feature: "Community & Discussions",
				tooltip: "Communities or discussion spaces you can create.",
				starter: "1",
				growth: "5",
				advanced: "Unlimited",
			},
			{
				feature: "Announcements per Month",
				tooltip: "Platform-wide or course announcements you can send.",
				starter: "50",
				growth: "500",
				advanced: "Unlimited",
			},
		],
	},
	{
		title: "Assessments & Progress",
		rows: [
			{
				feature: "Quizzes per Course",
				tooltip: "Quizzes or assessments per course.",
				starter: "10",
				growth: "50",
				advanced: "Unlimited",
			},
			{
				feature: "Assignments per Course",
				tooltip: "Assignments you can add per course.",
				starter: "5",
				growth: "25",
				advanced: "Unlimited",
			},
			{
				feature: "Reports per Month",
				tooltip: "Report exports or generated reports per month.",
				starter: "10",
				growth: "100",
				advanced: "Unlimited",
			},
		],
	},
	{
		title: "Roles & Administration",
		rows: [
			{
				feature: "Instructors",
				tooltip: "Number of instructor accounts you can add.",
				starter: "2",
				growth: "10",
				advanced: "Unlimited",
			},
			{
				feature: "Admin Users",
				tooltip:
					"Define and manage different access levels for instructors, admins, and team members.",
				starter: "1",
				growth: "5",
				advanced: "Unlimited",
			},
			{
				feature: "Permission Sets",
				tooltip: "Custom permission or role sets you can define.",
				starter: "5",
				growth: "25",
				advanced: "Unlimited",
			},
		],
	},
	{
		title: "Monetization",
		rows: [
			{
				feature: "Paid Courses",
				tooltip: "Number of courses you can sell as paid.",
				starter: "5",
				growth: "25",
				advanced: "Unlimited",
			},
			{
				feature: "Subscription Plans",
				tooltip: "Recurring subscription plans you can offer.",
				starter: "1",
				growth: "5",
				advanced: "Unlimited",
			},
			{
				feature: "Checkout Pages",
				tooltip: "Custom or branded checkout pages.",
				starter: "3",
				growth: "15",
				advanced: "Unlimited",
			},
		],
	},
	{
		title: "Support & Setup",
		rows: [
			{
				feature: "Support Requests per Month",
				tooltip: "Priority or dedicated support requests per month.",
				starter: "10",
				growth: "100",
				advanced: "Unlimited",
			},
			{
				feature: "Onboarding Sessions",
				tooltip: "Dedicated onboarding or setup sessions included.",
				starter: "0",
				growth: "1",
				advanced: "Custom",
			},
		],
	},
];

export const PRICING_PLANS: PricingPlan[] = [
	{
		id: "starter",
		name: "Starter",
		price: "$29",
		period: "/month",
		annualPrice: "$23",
		annualPeriod: "/month, billed annually",
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
		annualFeatures: [
			"Everything in Monthly",
			"Save 20% when billed annually",
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
		annualPrice: "$63",
		annualPeriod: "/month, billed annually",
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
		annualFeatures: [
			"Everything in Monthly",
			"Save 20% when billed annually",
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
