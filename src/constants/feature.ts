const FEATURE_GRADIENT_CLASSES = {
	orange: "bg-grad-orange-1",
	blue: "bg-grad-orange-1",
	yellow: "bg-grad-yellow-1",
	sky: "bg-grad-sky-1",
	purple: "bg-grad-purple-1",
	green: "bg-grad-green-1",
} as const;

export const FEATURES = [
	{
		title: "Intent before setup",
		description:
			"Design learning around goals and outcomes before dealing with structure or settings",
		image: "/svgs/educator-love/1-intent.png",
		gradientClassName: FEATURE_GRADIENT_CLASSES.orange,
	},
	{
		title: "Analytics dashboard",
		description:
			"Gain insights into learner progress and engagement through real-time data visualizations.",
		image: "/svgs/educator-love/2-analytics.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.blue,
	},
	{
		title: "Customizable course templates",
		description:
			"Easily design and modify courses to fit specific educational goals and branding.",
		image: "/svgs/educator-love/3-customizable.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.yellow,
	},
	{
		title: "Integrated communication tools",
		description:
			"Facilitate discussions and feedback seamlessly through built-in messaging and forums.",
		image: "/svgs/educator-love/4-integrated.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.sky,
	},
	{
		title: "Scalability for diverse needs",
		description:
			"Support a growing number of users and courses without compromising performance.",
		image: "/svgs/educator-love/5-scalability.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.purple,
	},
	{
		title: "Mobile accessibility",
		description:
			"Allow learners to access courses anytime and anywhere using their mobile devices.",
		image: "/svgs/educator-love/6-mobile.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.green,
	},
];
