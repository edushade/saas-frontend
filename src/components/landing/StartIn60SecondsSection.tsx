import { CheckRightIcon } from "@/assets/icons/check-icons";
import { Button } from "@/components/ui/button";
import { Typography } from "../ui-custom/typography";

const BENEFITS = [
	"No coding or integrations required",
	"Ready-to-use structure from day one",
	"Customize as you grow",
];

export default function StartIn60SecondsSection() {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div className="flex flex-col gap-6">
						<Typography
							variant="h1"
							className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
						>
							Start Your EdTech <br /> Platform in 60 Seconds
						</Typography>
						<Typography
							variant="h6"
							className="font-normal leading-snug text-text-secondary"
						>
							Set up your own learning platform without technical setup or long
							onboarding. Edushade gives you the structure so you can focus on
							building and teaching.
						</Typography>
						<ul className="flex flex-col gap-3">
							{BENEFITS.map((benefit) => (
								<li key={benefit} className="flex items-center gap-2">
									<CheckRightIcon className="size-6" />
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
							<Button className="btn-brand-2 rounded-2xl h-auto px-5 hover:bg-brand-200/80 py-3 text-base font-medium">
								Get Started Free
							</Button>
						</div>
					</div>

					<div className="flex items-center justify-center">
						<img
							src="/svgs/BG.svg"
							alt=""
							aria-hidden="true"
							className="w-full h-auto object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
