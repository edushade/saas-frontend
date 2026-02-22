import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui-custom/typography";

const FEATURES = [
	{
		title: "Intent before setup",
		description:
			"Design learning around goals and outcomes before dealing with structure or settings",
		image: "/svgs/educator-love/intent.svg",
		gradientClass: "feature-card-orange",
	},
	{
		title: "Analytics dashboard",
		description:
			"Gain insights into learner progress and engagement through real-time data visualizations.",
		image: "/svgs/educator-love/intent.svg",
		gradientClass: "feature-card-blue",
	},
	{
		title: "Customizable course templates",
		description:
			"Easily design and modify courses to fit specific educational goals and branding.",
		image: "/svgs/educator-love/intent.svg",
		gradientClass: "feature-card-yellow",
	},
	{
		title: "Integrated communication tools",
		description:
			"Facilitate discussions and feedback seamlessly through built-in messaging and forums.",
		image: "/svgs/educator-love/intent.svg",
		gradientClass: "feature-card-sky",
	},
	{
		title: "Scalability for diverse needs",
		description:
			"Support a growing number of users and courses without compromising performance.",
		image: "/svgs/educator-love/intent.svg",
		gradientClass: "feature-card-purple",
	},
	{
		title: "Mobile accessibility",
		description:
			"Allow learners to access courses anytime and anywhere using their mobile devices.",
		image: "/svgs/educator-love/intent.svg",
		gradientClass: "feature-card-green",
	},
];

export default function WhyEducatorsLoveSection() {
	return (
		<section className="py-16">
			<div className="mx-auto w-full max-w-(--es-max-w) px-(--es-section-px)">
				<div className="mb-10 max-w-4xl mx-auto flex flex-col gap-4 items-center text-center justify-center">
					<Typography
						variant="h1"
						className="font-medium text-text-primary leading-tight"
					>
						Why educators loves Edushade
					</Typography>
					<Typography
						variant="h6"
						className="font-normal text-text-secondary leading-relaxed"
					>
						Edushade is designed by starting with how educators plan, teach, and
						support learners. Every part of the platform follows real
						instructional needs, not predefined software workflows.
					</Typography>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{FEATURES.map((feature) => (
						<Card
							key={feature.title}
							className={`${feature.gradientClass} relative overflow-hidden rounded-xl h-[312px] flex flex-col transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl cursor-pointer`}
						>
							<CardContent className="relative z-10">
								<div className="feature-card-text-bg" />
								<Typography
									variant="h5"
									className="relative z-10 font-medium text-text-primary leading-snug"
								>
									{feature.title}
								</Typography>
								<Typography
									variant="h6"
									className="mt-2 font-normal text-text-secondary leading-snug"
								>
									{feature.description}
								</Typography>
							</CardContent>

							<img
								src={feature.image}
								alt={feature.title}
								aria-hidden="true"
								className="absolute bottom-0 right-0 h-[60%] w-auto object-contain pointer-events-none"
							/>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
