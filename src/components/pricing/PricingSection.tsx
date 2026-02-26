import { BannerTag } from "../ui-custom/BannerTag";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";
import PricingPlansWithToggle from "./PricingPlansWithToggle";

export default function PricingSection() {
	return (
		<section className="relative overflow-hidden bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full 
  bg-[linear-gradient(180deg,#FFFFFF_-6.1%,#FFFFFF_20.43%,#B3E9FF_100%)]"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative z-10 mx-auto w-full max-w-(--es-max-w)">
				<div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-6 text-center">
					<BannerTag tag="Pricing" />
					<Typography
						variant="h1"
						className="font-medium leading-tight text-text-primary"
					>
						Flexible Pricing, Built In
					</Typography>
					<Typography
						variant="h6"
						className="font-normal leading-relaxed text-text-secondary"
					>
						Design and organize learning experiences with flexible lesson types,
						structured paths, and clear pr ogression logic.
					</Typography>
				</div>

				<PricingPlansWithToggle />
			</div>
		</section>
	);
}
