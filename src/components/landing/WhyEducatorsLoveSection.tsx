import {
	FEATURE_CARD_SHADE_OVERLAY_CLASS,
	FEATURES,
} from "@/constants/feature";
import { Card, CardContent } from "../ui/card";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

export default function WhyEducatorsLoveSection() {
	return (
		<section className="py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto w-full max-w-(--es-max-w)">
				<div className="mb-10 max-w-4xl mx-auto flex flex-col gap-4 items-center text-center justify-center">
					<Typography
						variant="h1"
						className="font-medium leading-snug text-text-primary"
					>
						Why educators loves Edushade
					</Typography>
					<Typography
						variant="h6"
						className="font-normal leading-relaxed text-text-secondary"
					>
						Edushade is designed by starting with how educators plan, teach, and
						support learners. Every part of the platform follows real
						instructional needs, not predefined software workflows.
					</Typography>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{FEATURES.map((feature) => (
						<Card
							key={feature.title}
							className={`bg-white border-none relative overflow-hidden rounded-xl h-[312px] flex flex-col transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl cursor-pointer ${feature.cardShadowClassName ?? ""}`}
						>
							<div
								aria-hidden
								className={`pointer-events-none absolute inset-0 z-0 rounded-xl ${feature.gradientClassName}`}
							/>
							<CardShadeOverlay className={FEATURE_CARD_SHADE_OVERLAY_CLASS} />
							<CardContent className="relative z-10">
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
								className="absolute bottom-0 right-0 z-20 h-[60%] w-auto object-contain pointer-events-none"
							/>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
