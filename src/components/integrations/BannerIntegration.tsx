import { Typography } from '@/components/ui-custom/typography';
import { BannerTag } from '../ui-custom/BannerTag';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';

export default function BannerIntegration() {
	return (
		<section className="relative overflow-hidden px-4 md:px-8 xl:px-(--es-section-px) py-(--es-section-py) bg-bg-primary">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative mx-auto max-w-(--es-max-w)">
				<div className="flex flex-col items-center text-center">
					<BannerTag tag="Integrations" />

					<Typography
						variant="h1"
						className="mt-4 text-3xl font-medium leading-tight text-text-primary md:text-4xl lg:text-5xl"
					>
						Connect Edushade to Your Workflow
					</Typography>

					<Typography
						variant="h6"
						className="mt-4 max-w-2xl font-normal leading-relaxed text-text-secondary"
					>
						Connect Edushade to your existing systems to streamline operations
						and automate workflows at scale.
					</Typography>
				</div>
			</div>
		</section>
	);
}
