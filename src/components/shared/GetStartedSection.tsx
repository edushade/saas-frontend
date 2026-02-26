import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "../ui/card";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

const STATS = [
	{ value: "10k+", label: "Learners supported" },
	{ value: "60%", label: "Reduction in operational effort" },
	{ value: "0%", label: "Setup complexity" },
	{ value: "250+", label: "Platforms built with Edushade" },
] as const;

export default function GetStartedSection() {
	return (
		<section className="bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<Card className="relative overflow-hidden  border-border-secondary shadow-[0_1.5px_4px_-1px_rgba(10,9,11,0.07)] bg-[linear-gradient(67.68deg,#C3E3FF_0%,rgba(248,249,252,0)_64.42%,rgba(255,255,255,0)_100%)]">
					<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

					<CardContent className="relative z-10 grid grid-cols-1 items-center gap-8 p-0 py-6 lg:grid-cols-2 lg:py-8">
						<div className="px-4 md:px-(--es-section-px) lg:pr-10">
							<div className="flex flex-col items-start gap-6">
								<div className="flex flex-col gap-3">
									<Typography
										variant="h1"
										className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
									>
										Get Started Today
									</Typography>
									<Typography
										variant="h6"
										className="font-normal text-text-secondary leading-tight"
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

						<div className="border-t border-border-primary px-4 md:px-(--es-section-px) pt-8 lg:border-t-0 lg:border-l lg:border-border-primary lg:pl-10 lg:pt-0">
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
