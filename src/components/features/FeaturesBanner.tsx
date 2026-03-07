import { BannerTag } from '@/components/ui-custom/BannerTag';
import { CardShadeOverlay } from '@/components/ui-custom/card-shade-overlay';
import { Typography } from '@/components/ui-custom/typography';

export function FeaturesBanner() {
	return (
		<section className="relative overflow-hidden bg-bg-primary px-4 md:px-8 xl:px-(--es-section-px) py-(--es-section-py)">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 left-0 z-0 h-full w-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative z-10 mx-auto max-w-(--es-max-w) flex flex-col items-center gap-5 text-center">
				<BannerTag tag="All Features" />
				<Typography
					variant="h1"
					className="max-w-[700px] text-2xl md:text-[2rem] lg:text-[2.75rem] font-normal leading-tight text-text-primary"
				>
					Powerful Features for Modern Education
				</Typography>
				<Typography
					variant="base"
					className="max-w-xl text-base leading-relaxed text-text-secondary md:text-base"
				>
					Create courses, engage learners, track progress, and manage your
					academy with tools designed to work together.
				</Typography>
			</div>
		</section>
	);
}
