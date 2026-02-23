/** Shade overlay: use Figma CSS from styles.css (.feature-card-shade-overlay). */
export const FEATURE_CARD_SHADE_OVERLAY_CLASS = "feature-card-shade-overlay";

const FEATURE_GRADIENT_CLASSES = {
	orange:
		"bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_34%,#fff0e6_34%,#fff0e6_51%,#ffd8b8_51%,#ffd8b8_67%,#ffbc82_67%,#ffbc82_83%,#ff9a4d_83%,#ff9a4d_100%)]",
	blue: "bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_34%,#e8f0ff_34%,#e8f0ff_51%,#c4d8ff_51%,#c4d8ff_67%,#93b8ff_67%,#93b8ff_83%,#6699ff_83%,#6699ff_100%)]",
	yellow:
		"bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_34%,#fffbe6_34%,#fffbe6_51%,#fef3a0_51%,#fef3a0_67%,#fde047_67%,#fde047_83%,#fbbf24_83%,#fbbf24_100%)]",
	sky: "bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_34%,#e0f5ff_34%,#e0f5ff_51%,#bae6fd_51%,#bae6fd_67%,#7dd3fc_67%,#7dd3fc_83%,#38bdf8_83%,#38bdf8_100%)]",
	purple:
		"bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_34%,#f5eeff_34%,#f5eeff_51%,#e9d5ff_51%,#e9d5ff_67%,#d8b4fe_67%,#d8b4fe_83%,#c084fc_83%,#c084fc_100%)]",
	green:
		"bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_34%,#e6fff0_34%,#e6fff0_51%,#bbf7d0_51%,#bbf7d0_67%,#86efac_67%,#86efac_83%,#4ade80_83%,#4ade80_100%)]",
} as const;

export const FEATURES = [
	{
		title: "Intent before setup",
		description:
			"Design learning around goals and outcomes before dealing with structure or settings",
		image: "/svgs/educator-love/intent.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.orange,
		cardShadowClassName: "feature-card-figma-shadow",
	},
	{
		title: "Analytics dashboard",
		description:
			"Gain insights into learner progress and engagement through real-time data visualizations.",
		image: "/svgs/educator-love/2-analytics.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.blue,
		cardShadowClassName: "feature-card-figma-shadow",
	},
	{
		title: "Customizable course templates",
		description:
			"Easily design and modify courses to fit specific educational goals and branding.",
		image: "/svgs/educator-love/3-customizable.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.yellow,
		cardShadowClassName: undefined,
	},
	{
		title: "Integrated communication tools",
		description:
			"Facilitate discussions and feedback seamlessly through built-in messaging and forums.",
		image: "/svgs/educator-love/4-integrated.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.sky,
		cardShadowClassName: undefined,
	},
	{
		title: "Scalability for diverse needs",
		description:
			"Support a growing number of users and courses without compromising performance.",
		image: "/svgs/educator-love/5-scalability.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.purple,
		cardShadowClassName: undefined,
	},
	{
		title: "Mobile accessibility",
		description:
			"Allow learners to access courses anytime and anywhere using their mobile devices.",
		image: "/svgs/educator-love/6-mobile.svg",
		gradientClassName: FEATURE_GRADIENT_CLASSES.green,
		cardShadowClassName: undefined,
	},
];
