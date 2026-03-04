import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { BannerTag } from '@/components/ui-custom/BannerTag';
import { Typography } from '@/components/ui-custom/typography';
import type { FeatureBannerContent } from '@/constants/features';
import { VideoCard } from '../shared';
import { Card, CardContent } from '../ui/card';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';

export interface FeatureBannerProps extends FeatureBannerContent {}

export function FeatureBanner({
	tag,
	headline,
	description,
	ctaText,
	ctaTo,
}: FeatureBannerProps) {
	return (
		<section className="relative bg-bg-primary px-4 md:px-8 xl:px-(--es-section-px) py-(--es-section-py)">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
			<div className="relative mx-auto max-w-(--es-max-w) space-y-16">
				<div className="flex flex-col gap-6 items-center text-center">
					<BannerTag tag={tag} />
					<Typography
						variant="h1"
						className="text-3xl max-w-[742px] mx-auto font-medium leading-tight text-text-primary md:text-4xl lg:text-6xl"
					>
						{headline}
					</Typography>
					<Typography
						variant="base"
						className="max-w-2xl font-normal leading-relaxed text-text-secondary"
					>
						{description}
					</Typography>
					<Button
						asChild
						className="btn-brand-1 rounded-full py-5 text-lg font-medium shadow-sm"
					>
						<Link to={ctaTo}>{ctaText}</Link>
					</Button>
				</div>

				<Card className="flex overflow-hidden rounded-xl border border-border-primary shadow-sm bg-bg-tertiary p-1">
					<CardContent className="relative flex min-h-0 flex-1 p-1 bg-[#FFFFFF] rounded-xl">
						<VideoCard
							src={'/videos/intro.mp4'}
							alt="Introduction to Edushade"
							label="Introduction to Edushade"
							className="bg-transparent"
						/>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
