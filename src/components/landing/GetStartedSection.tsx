import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui-custom/typography";

const STATS = [
	{ value: "10k+", label: "Learners supported" },
	{ value: "60%", label: "Reduction in operational effort" },
	{ value: "0%", label: "Setup complexity" },
	{ value: "250+", label: "Platforms built with Edushade" },
] as const;

export default function GetStartedSection() {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w)  px-(--es-section-px)">
				<Card
					className="overflow-hidden py-0"
					style={{
						background:
							"linear-gradient(67.68deg, rgba(195, 227, 255, 1) 0%, rgba(248, 249, 252, 0) 64.42%, rgba(255, 255, 255, 0) 100%)",
						border: "1px solid rgba(233, 234, 235, 1)",
						boxShadow: "0 1.5px 4px -1px rgba(10, 9, 11, 0.07)",
					}}
				>
					<CardContent className="grid grid-cols-1 items-center gap-8 p-0 py-6 lg:grid-cols-2 lg:py-8">
						{/* Left: CTA + copy — horizontal padding from edge and from divider */}
						<div className="relative px-(--es-section-px) lg:pr-10">
							<div
								className="absolute inset-0 pointer-events-none"
								style={{
									background:
										"radial-gradient(ellipse 80% 70% at 0% 100%, rgba(219,234,254,0.75) 0%, transparent 65%)",
								}}
								aria-hidden="true"
							/>

							<div className="relative z-10 flex flex-col items-start gap-6">
								<div className="flex flex-col gap-3">
									<Typography
										variant="h1"
										className="font-medium  text-text-primary leading-tight max-w-md"
									>
										Get Started Today
									</Typography>
									<Typography
										variant="h6"
										className="font-normal text-text-secondary leading-relaxed"
									>
										Create your Edushade account and start building learning
										programs with clarity, structure, and control from day one.
									</Typography>
								</div>
								<Button className="btn-brand-2 text-white rounded-lg px-6 h-10 text-sm font-medium">
									Get started
								</Button>
							</div>
						</div>

						{/* Right: stats — horizontal padding from divider and from edge */}
						<div className="border-t border-(--es-border-1) px-(--es-section-px) pt-8 lg:border-t-0 lg:border-l lg:border-(--es-border-1) lg:pl-10 lg:pt-0">
							<Separator className="mb-10 lg:hidden" />

							<div className="grid grid-cols-2 gap-x-8 gap-y-10">
								{STATS.map(({ value, label }) => (
									<div key={label}>
										<Typography
											variant="h1"
											className="text-4xl font-semibold text-text-primary leading-none mb-2"
										>
											{value}
										</Typography>
										<Typography
											variant="small"
											className="text-text-secondary leading-snug"
										>
											{label}
										</Typography>
									</div>
								))}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
