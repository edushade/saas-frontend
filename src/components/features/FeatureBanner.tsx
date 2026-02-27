import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BannerTag } from "@/components/ui-custom/BannerTag";
import { Typography } from "@/components/ui-custom/typography";
import type { FeatureBannerContent } from "@/constants/features";
import { VideoCard } from "../shared";
import { Card, CardContent } from "../ui/card";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";

export interface FeatureBannerProps extends FeatureBannerContent {}

export function FeatureBanner({
	tag,
	headline,
	description,
	ctaText,
	ctaTo,
}: FeatureBannerProps) {
	return (
		<section className="relative bg-bg-primary px-4 py-12 md:px-(--es-section-px) md:py-(--es-section-py)">
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-full w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
			<div className="relative mx-auto max-w-(--es-max-w)">
				<div className="flex flex-col items-center text-center">
					<BannerTag tag={tag} />
					<Typography
						variant="h1"
						className="mt-4 text-3xl font-semibold leading-tight text-text-primary md:text-4xl lg:text-5xl"
					>
						{headline}
					</Typography>
					<Typography
						variant="base"
						className="mt-4 max-w-2xl font-normal leading-relaxed text-text-secondary"
					>
						{description}
					</Typography>
					<Button
						asChild
						className="btn-brand-1 mt-8 rounded-lg px-6 py-3 text-base font-medium shadow-sm"
					>
						<Link to={ctaTo}>{ctaText}</Link>
					</Button>
				</div>

				<Card className="flex overflow-hidden rounded-xl border border-border-primary shadow-sm bg-card p-0 mt-10">
					<CardContent className="relative flex min-h-0 flex-1 p-0">
						<VideoCard
							src={"/videos/intro.mp4"}
							alt="Introduction to Edushade"
							label="Introduction to Edushade"
						/>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
