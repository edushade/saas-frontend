export interface IntegrationCard {
	name: string;
	slug: string;
	description: string;
	primaryButtonLabel: string;
	iconBgColor: string;
	imageSrc: string;
}

export interface IntegrationDetail {
	name: string;
	slug: string;
	tag: string;
	tagline: string;
	descriptionParagraphs: string[];
	iconBgColor: string;
	imageSrc: string;
}

export const INTEGRATIONS_LIST: IntegrationCard[] = [
	{
		name: "Classflow",
		slug: "classflow",
		description:
			"A unified platform for managing student data and class assignments. Classflow streamlines tasks and enhances communication.",
		primaryButtonLabel: "Support",
		iconBgColor: "bg-teal-500",
		imageSrc: "/svgs/integrations/class-flow.svg",
	},
	{
		name: "Learnwire",
		slug: "learnwire",
		description:
			"Automate your financial processes with Learnwire. Get paid faster, reconcile transactions automatically, and gain insights.",
		primaryButtonLabel: "Payments",
		iconBgColor: "bg-amber-600",
		imageSrc: "/svgs/integrations/learn-wire.svg",
	},
	{
		name: "Coursekey",
		slug: "coursekey",
		description:
			"Simplify data collection and approval workflows with Coursekey. Create custom forms, automate routing, and track progress.",
		primaryButtonLabel: "Data",
		iconBgColor: "bg-lime-500",
		imageSrc: "/svgs/integrations/course-key.svg",
	},
	{
		name: "Eduboost",
		slug: "eduboost",
		description:
			"Unlock deeper insights into student performance with Eduboost. Track progress, identify areas for improvement, and learning.",
		primaryButtonLabel: "Schedule",
		iconBgColor: "bg-emerald-600",
		imageSrc: "/svgs/integrations/edubost.svg",
	},
	{
		name: "Skillshare",
		slug: "skillshare",
		description:
			"Visualize key metrics and track progress with Skillshare. Create custom dashboards, share insights, and make data-driven decisions.",
		primaryButtonLabel: "Organization",
		iconBgColor: "bg-brand-300",
		imageSrc: "/svgs/integrations/skill-share.svg",
	},
];

export const INTEGRATION_DETAILS: Record<string, IntegrationDetail> = {
	classflow: {
		name: "Classflow",
		slug: "classflow",
		tag: "Support",
		imageSrc: "/svgs/integrations/class-flow.svg",
		tagline:
			"A unified platform for managing student data and class assignments. Classflow streamlines tasks and enhances communication.",
		descriptionParagraphs: [
			"Classflow brings together roster management, assignment tracking, and grading in one place. Sync with your LMS and SIS to keep student data accurate and reduce duplicate entry.",
			"Use Classflow to communicate with students and co-instructors, share announcements, and track engagement without leaving Edushade.",
			"Reports and analytics help you spot at-risk students early and improve course design based on real usage and outcomes.",
		],
		iconBgColor: "bg-teal-500",
	},
	learnwire: {
		name: "Learnwire",
		slug: "learnwire",
		tag: "Payments",
		imageSrc: "/svgs/integrations/learn-wire.svg",
		tagline:
			"Automate your financial processes with Learnwire. Get paid faster, reconcile transactions automatically, and gain insights.",
		descriptionParagraphs: [
			"Connect payment gateways and invoicing so revenue from courses and subscriptions flows into your accounting system with minimal manual work.",
			"Reconcile payouts, refunds, and fees automatically and keep financial records in sync for reporting and compliance.",
			"Use Learnwire dashboards to understand revenue by product, cohort, and channel and make data-driven decisions.",
		],
		iconBgColor: "bg-amber-600",
	},
	coursekey: {
		name: "Coursekey",
		slug: "coursekey",
		tag: "Data",
		imageSrc: "/svgs/integrations/course-key.svg",
		tagline:
			"Simplify data collection and approval workflows with Coursekey. Create custom forms, automate routing, and track progress.",
		descriptionParagraphs: [
			"Build custom forms and applications for enrollments, certifications, and approvals without code. Route submissions to the right people and automate follow-ups.",
			"Coursekey keeps an audit trail of every step so you can track progress and comply with internal and external policies.",
			"Connect Coursekey to Edushade to sync completion and approval data into learning records and reporting.",
		],
		iconBgColor: "bg-lime-500",
	},
	eduboost: {
		name: "Eduboost",
		slug: "eduboost",
		tag: "Schedule",
		imageSrc: "/svgs/integrations/edubost.svg",
		tagline:
			"Unlock deeper insights into student performance with Eduboost. Track progress, identify areas for improvement, and learning.",
		descriptionParagraphs: [
			"Eduboost aggregates activity and assessment data from Edushade and other sources to give you a single view of learner progress and readiness.",
			"Identify at-risk learners and recommend next steps, content, or support based on rules and analytics you define.",
			"Use scheduling and capacity insights to plan cohorts, assign instructors, and balance workload across teams.",
		],
		iconBgColor: "bg-emerald-600",
	},
	skillshare: {
		name: "Skillshare",
		slug: "skillshare",
		tag: "Organization",
		imageSrc: "/svgs/integrations/skill-share.svg",
		tagline:
			"Visualize key metrics and track progress with Skillshare. Create custom dashboards, share insights, and make data-driven decisions.",
		descriptionParagraphs: [
			"Skillshare connects to Edushade and other tools to build dashboards for completion, engagement, and business outcomes without writing SQL.",
			"Share live dashboards with stakeholders and set up alerts when metrics cross thresholds so you can act quickly.",
			"Keep organizational structure, roles, and permissions in sync so reporting and access control stay accurate as your team grows.",
		],
		iconBgColor: "bg-brand-300",
	},
};

export function getIntegrationDetail(slug: string): IntegrationDetail | null {
	return INTEGRATION_DETAILS[slug.toLowerCase()] ?? null;
}
