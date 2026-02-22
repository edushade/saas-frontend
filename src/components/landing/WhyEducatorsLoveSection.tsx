import { Card, CardContent } from "@/components/ui/card";

const FEATURES = [
	{
		title: "Intent before setup",
		description:
			"Design learning around goals and outcomes before dealing with structure or settings",
		graphic: "orange",
	},
	{
		title: "Analytics dashboard",
		description:
			"Gain insights into learner progress and engagement through real-time data visualizations.",
		graphic: "blue",
	},
	{
		title: "Customizable course templates",
		description:
			"Easily design and modify courses to fit specific educational goals and branding.",
		graphic: "yellow",
	},
	{
		title: "Integrated communication tools",
		description:
			"Facilitate discussions and feedback seamlessly through built-in messaging and forums.",
		graphic: "sky",
	},
	{
		title: "Scalability for diverse needs",
		description:
			"Support a growing number of users and courses without compromising performance.",
		graphic: "purple",
	},
	{
		title: "Mobile accessibility",
		description:
			"Allow learners to access courses anytime and anywhere using their mobile devices.",
		graphic: "green",
	},
] as const;

function FeatureGraphic({
	type,
}: {
	type: (typeof FEATURES)[number]["graphic"];
}) {
	const base = "h-24 w-full rounded-lg opacity-90";
	switch (type) {
		case "orange":
			return (
				<div
					className={`${base} bg-[linear-gradient(135deg,#f97316_0%,#ea580c_50%,#c2410c_100%)]`}
					aria-hidden
				/>
			);
		case "blue":
			return (
				<div
					className={`${base} bg-[linear-gradient(145deg,#3b82f6_0%,#1d4ed8_100%)]`}
					aria-hidden
				/>
			);
		case "yellow":
			return (
				<div
					className={`${base} bg-[linear-gradient(145deg,#eab308_0%,#ca8a04_100%)]`}
					aria-hidden
				/>
			);
		case "sky":
			return (
				<div
					className={`${base} bg-[linear-gradient(145deg,#0ea5e9_0%,#0284c7_100%)] opacity-[0.85]`}
					aria-hidden
				/>
			);
		case "purple":
			return (
				<div
					className={`${base} bg-[linear-gradient(145deg,#a855f7_0%,#7c3aed_100%)]`}
					aria-hidden
				/>
			);
		case "green":
			return (
				<div
					className={`${base} bg-[linear-gradient(145deg,#22c55e_0%,#16a34a_100%)]`}
					aria-hidden
				/>
			);
		default:
			return <div className={`${base} bg-muted`} aria-hidden />;
	}
}

export default function WhyEducatorsLoveSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="mb-10 max-w-2xl">
					<h2 className="text-3xl lg:text-4xl font-bold leading-tight text-(--es-text-1)">
						Why educators loves Edushade
					</h2>
					<p className="mt-4 text-(--es-text-2) leading-relaxed">
						Edushade is designed by starting with how educators plan, teach, and
						support learners. Every part of the platform follows real
						instructional needs, not predefined software workflows.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{FEATURES.map((feature) => (
						<Card
							key={feature.title}
							className="overflow-hidden rounded-xl border border-(--es-border-1) shadow-sm bg-card"
						>
							<div className="px-6 pt-6">
								<FeatureGraphic type={feature.graphic} />
							</div>
							<CardContent>
								<h3 className="text-base font-semibold text-(--es-text-1)">
									{feature.title}
								</h3>
								<p className="mt-1.5 text-sm text-(--es-text-2) leading-snug">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
