import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui-custom/typography';
import type { FeatureBannerContent } from '@/constants/features';
import { VideoCard } from '../shared';
import { Card, CardContent } from '../ui/card';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';

export type FeatureBannerProps = Omit<FeatureBannerContent, 'slug'>;

function splitHeadline(headline: string): { lead: string; accent: string } {
	const trimmed = headline.trim();
	const commaIdx = trimmed.lastIndexOf(',');
	if (commaIdx > 0 && commaIdx < trimmed.length - 1) {
		return {
			lead: trimmed.slice(0, commaIdx).trim(),
			accent: trimmed.slice(commaIdx + 1).trim(),
		};
	}
	const words = trimmed.split(/\s+/);
	if (words.length > 4) {
		const accentLen = words.length >= 6 ? 3 : 2;
		return {
			lead: words.slice(0, words.length - accentLen).join(' '),
			accent: words.slice(words.length - accentLen).join(' '),
		};
	}
	return { lead: trimmed, accent: '' };
}

function HighlightAccent({ children }: { children: React.ReactNode }) {
	return (
		<span className="relative isolate inline-block whitespace-nowrap text-brand-300 stroke-3">
			<svg
				className="absolute bottom-[-0.25em] left-0 w-full h-[0.7em] z-0 overflow-visible opacity-50"
				viewBox="-2 0 104 20"
				preserveAspectRatio="none"
				aria-hidden
			>
				<path
					d="M-2,14 C25,10 75,10 102,14"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<span className="relative z-10">{children}</span>
		</span>
	);
}

export function FeatureBanner({
	tag,
	headline,
	description,
	ctaText,
	ctaTo,
}: FeatureBannerProps) {
	const { lead, accent } = splitHeadline(headline);
	const videoLabel = `Inside ${tag}`;

	return (
		<section className="relative isolate overflow-hidden bg-bg-primary px-4 md:px-8 xl:px-(--es-section-px) pt-(--es-section-py) pb-[calc(var(--es-section-py)+1rem)]">
			{/* Light-blue base — same gradient already used elsewhere on the site */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 -z-30 h-full bg-grad-lightblue"
			/>
			{/* Original vertical light-rays stripe overlay (preserved from prior design) */}
			<CardShadeOverlay className="-z-20 backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
			{/* Subtle dot grid for depth — single color, masked */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-150 bg-hero-dotgrid"
			/>

			<div className="relative mx-auto max-w-(--es-max-w)">
				{/* ───── Header column ───── */}
				<div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
					{/* Eyebrow row — solid white pill, brand-blue live dot */}
					<div
						className="animate-hero-rise pill-eyebrow inline-flex items-center gap-2 rounded-full pl-2 pr-3 py-1.5"
						style={{ animationDelay: '0ms' }}
					>
						<span className="relative flex h-2 w-2 items-center justify-center">
							<span className="absolute inset-0 rounded-full bg-brand-300 animate-hero-ping-soft" />
							<span className="relative h-2 w-2 rounded-full bg-brand-300" />
						</span>
						<span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
							Live in Edushade
						</span>
						<span className="h-3.5 w-px bg-border-secondary" aria-hidden />
						<span className="text-xs font-semibold text-dark-15">{tag}</span>
					</div>

					{/* Headline — same BDO Grotesk font; accent in brand color with underline swoosh */}
					<Typography
						variant="h1"
						className="animate-hero-rise text-balance text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-text-primary md:text-5xl lg:text-[56px]"
						style={{ animationDelay: '90ms' }}
					>
						{accent ? (
							<>
								<span className="block">
									{lead}
									{lead.endsWith(',') ? '' : ','}
								</span>
								<HighlightAccent>{accent}</HighlightAccent>
							</>
						) : (
							lead
						)}
					</Typography>

					{/* Description */}
					<Typography
						variant="base"
						className="animate-hero-rise max-w-2xl text-pretty text-base font-normal leading-relaxed text-text-secondary md:text-lg"
						style={{ animationDelay: '180ms' }}
					>
						{description}
					</Typography>

					{/* CTA row — primary + ghost watch demo (mirrors landing hero) */}
					<div
						className="animate-hero-rise mt-2 flex flex-col items-center gap-2 sm:flex-row sm:gap-4"
						style={{ animationDelay: '260ms' }}
					>
						<Button
							asChild
							className="btn-brand-1 group h-12 rounded-full px-6 text-base font-medium"
						>
							<Link to={ctaTo}>
								{ctaText}
								<ArrowUpRight
									className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									aria-hidden
								/>
							</Link>
						</Button>
						<a
							href="#feature-preview"
							className="group inline-flex h-12 items-center gap-2 rounded-full bg-white pl-1.5 pr-5 text-base font-medium text-text-primary border border-border-secondary shadow-[0_2px_8px_-3px_rgba(15,60,110,0.15)] transition-all duration-300 hover:text-brand-300 hover:border-brand-300/40 hover:shadow-[0_4px_14px_-4px_rgba(0,102,255,0.25)]"
						>
							<span className="flex size-9 items-center justify-center rounded-full bg-linear-to-br from-brand-300 to-brand-200 text-white transition-transform duration-300 group-hover:scale-105 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.4)]">
								<Play className="size-3.5 translate-x-px fill-current" />
							</span>
							Watch demo
						</a>
					</div>

				</div>

				{/* ───── Video preview card ───── */}
				<div
					id="feature-preview"
					className="animate-hero-rise relative mx-auto mt-16 w-full max-w-5xl"
					style={{ animationDelay: '420ms' }}
				>
					{/* Soft ground glow under the player */}
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-12 -bottom-8 h-20 rounded-full bg-brand-300/15 blur-3xl"
					/>

					<div className="hero-device-frame overflow-hidden rounded-3xl">
						{/* Marketing-facing header — single line, no duplicate of play-overlay label */}
						<div className="flex items-center gap-3 border-b border-border-secondary bg-white px-4 py-3 sm:px-5">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-300/10 text-brand-300">
								<Play
									className="size-3.5 translate-x-px fill-current"
									aria-hidden
								/>
							</div>
							<span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-tertiary">
								Quick Tour
								<span className="mx-1.5 text-border-secondary">·</span>
								<span className="text-dark-15">{tag}</span>
							</span>
							<span className="ml-auto hidden items-center gap-1.5 sm:flex">
								<span className="relative flex h-1.5 w-1.5">
									<span className="absolute inset-0 rounded-full bg-brand-300 animate-hero-ping-soft" />
									<span className="relative h-1.5 w-1.5 rounded-full bg-brand-300" />
								</span>
								<span className="text-[11px] font-medium text-text-tertiary">
									Live
								</span>
							</span>
							<span className="hidden h-4 w-px bg-border-secondary sm:block" />
							<span className="hidden rounded-md bg-bg-tertiary px-2 py-0.5 text-[10px] font-bold tracking-[0.08em] text-text-tertiary sm:inline">
								HD
							</span>
						</div>

						{/* Video edge-to-edge */}
						<Card className="overflow-hidden rounded-none border-0 bg-white p-0 shadow-none">
							<CardContent className="relative aspect-video flex min-h-0 flex-1 p-0">
								<VideoCard
									src={'/videos/intro.mp4'}
									alt={videoLabel}
									label={videoLabel}
									className="bg-transparent"
								/>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
