import { CheckRightIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

export interface FeatureSplitSectionProps {
	title: string;
	description: string;
	lists: string[];
	imgSrc?: string;
	reverse?: boolean;
}

export default function FeatureSplitSection({
	title,
	description,
	lists,
	imgSrc = "/svgs/hero/banner.svg",
	reverse = false,
}: FeatureSplitSectionProps) {
	return (
		<section className="bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div
						className={cn(
							"flex flex-col items-stretch gap-6",
							reverse ? "lg:order-2" : "lg:order-1",
						)}
					>
						<h1
							// variant="h1"
							className="text-2xl md:text-[2rem] lg:text-[2.75rem] max-w-xl leading-snug font-medium text-text-primary"
						>
							{title}
						</h1>
						<Typography
							variant="h6"
							className="font-normal leading-relaxed text-text-secondary "
						>
							{description}
						</Typography>

						<ul className="flex flex-col gap-3">
							{lists.map((benefit) => (
								<li key={benefit} className="flex items-center gap-3">
									<CheckRightIcon className="size-4" />
									<Typography
										variant="base"
										className="font-normal leading-snug text-text-tertiary"
									>
										{benefit}
									</Typography>
								</li>
							))}
						</ul>

						<div>
							<Button className="btn-brand-2 rounded-full h-auto px-8 py-3.5 text-base font-medium">
								Get Started Free
							</Button>
						</div>
					</div>

					<Card
						className={cn(
							"relative overflow-hidden border-border-tertiary p-0 shadow-none lg:block bg-[linear-gradient(0deg,#7ADEFF_0%,#DDF7FF_100%)]",
							reverse ? "lg:order-1" : "lg:order-2",
						)}
					>
						<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
						<CardContent className="relative z-10  p-0">
							<div className="h-auto min-h-0 rounded-2xl shadow-2xl ">
								<img
									src={imgSrc}
									alt="Dashboard"
									className="h-full w-full object-cover object-top"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
