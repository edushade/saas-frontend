const FEATURE_GRADIENT_CLASSES = {
	orange:
		"bg-[linear-gradient(53.61deg,#ff9a4d_0%,rgba(248,249,252,0)_45.88%,rgba(255,255,255,0)_71.21%)]",
	blue: "bg-[linear-gradient(53.61deg,#6699ff_0%,rgba(248,249,252,0)_45.88%,rgba(255,255,255,0)_71.21%)]",
	yellow:
		"bg-[linear-gradient(53.61deg,#fbbf24_0%,rgba(248,249,252,0)_45.88%,rgba(255,255,255,0)_71.21%)]",
	sky: "bg-[linear-gradient(53.61deg,#38bdf8_0%,rgba(248,249,252,0)_45.88%,rgba(255,255,255,0)_71.21%)]",
	purple:
		"bg-[linear-gradient(53.61deg,#c084fc_0%,rgba(248,249,252,0)_45.88%,rgba(255,255,255,0)_71.21%)]",
	green:
		"bg-[linear-gradient(53.61deg,#4ade80_0%,rgba(248,249,252,0)_45.88%,rgba(255,255,255,0)_71.21%)]",
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
