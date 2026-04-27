'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CardShadeOverlay } from '@/components/ui-custom/card-shade-overlay';
import { getHeroImageForTag, TAGS } from '@/constants/hero';
import { ComposeModelTags } from './ComposeModelTags';

const DEFAULT_TAG = 'Courses';

function DecorativeAsterisk({ className }: { className?: string }) {
	return (
		<svg
			aria-hidden
			viewBox="0 0 80 80"
			fill="none"
			className={className}
			style={{ filter: 'drop-shadow(0 8px 20px rgba(0,102,255,0.32))' }}
		>
			<defs>
				<linearGradient
					id="hero-sparkle-gradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop offset="0%" stopColor="#0066FF" />
					<stop offset="100%" stopColor="#2B80FF" />
				</linearGradient>
			</defs>
			<path
				d="M30 2 C31.2 20, 38 26.8, 56 28 C38 29.2, 31.2 36, 30 54 C28.8 36, 22 29.2, 4 28 C22 26.8, 28.8 20, 30 2 Z"
				fill="url(#hero-sparkle-gradient)"
			/>
			<path
				d="M62 50 C62.6 58, 65.4 60.6, 73 61.5 C65.4 62.4, 62.6 65, 62 73 C61.4 65, 58.6 62.4, 51 61.5 C58.6 60.6, 61.4 58, 62 50 Z"
				fill="#0066FF"
				fillOpacity="0.7"
			/>
		</svg>
	);
}

export function HeroTaggedBlock({ children }: { children: React.ReactNode }) {
	const [selectedTag, setSelectedTag] = useState(DEFAULT_TAG);
	const { src, alt } = getHeroImageForTag(selectedTag);

	return (
		<div className="mx-auto grid max-w-(--es-max-w) grid-cols-1 lg:grid-cols-2 items-stretch gap-6 ">
			<div className="flex min-h-0 flex-col justify-between gap-2">
				<div className="flex flex-col items-center md:items-start gap-4">
					{children}
				</div>
				<div className="flex flex-col items-center md:items-start gap-2 md:gap-6 pt-2">
					<ComposeModelTags
						tags={TAGS}
						value={selectedTag}
						onChange={setSelectedTag}
						defaultSelected={DEFAULT_TAG}
						className="flex flex-col gap-2"
					/>
				</div>
			</div>

			<div className="relative h-full w-full max-w-152.5">
				<DecorativeAsterisk className="pointer-events-none absolute -top-4 -left-4 lg:-top-7 lg:-left-7 z-30 h-12 w-12 lg:h-20 lg:w-20" />

				<Card className="relative max-h-[642px] h-full w-full min-h-0 overflow-hidden rounded-2xl p-0 shadow-none border-0 lg:block bg-bg-primary">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-cover bg-center bg-no-repeat opacity-100"
						style={{ backgroundImage: "url('/svgs/hero-container.png')" }}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -top-24 -right-24 z-0 h-[300px] w-[300px] rounded-full  blur-[60px]"
					/>
					<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_50px,rgba(255,255,255,0.3)_64px)]" />
					<CardContent className="relative z-10 h-full min-h-0 max-h-[642px] p-0">
						<div className="relative h-full min-h-0 rounded-2xl pt-10 pl-8 shadow-3xl">
							<img
								src={src}
								alt={alt}
								className="h-full w-full object-cover object-top rounded-2xl"
							/>
							<div
								aria-hidden
								className="pointer-events-none absolute bottom-0 left-0 z-10 h-[100px] w-full max-w-[584px] opacity-100 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]"
							/>
							<div
								aria-hidden
								className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[200px] opacity-100 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]"
							/>
						</div>
					</CardContent>

					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 z-30 rounded-2xl border border-dashed border-zinc-400/70"
						style={{
							maskImage:
								'linear-gradient(to right, black 0%, black 50%, transparent 95%)',
							WebkitMaskImage:
								'linear-gradient(to right, black 0%, black 50%, transparent 95%)',
						}}
					/>
				</Card>
			</div>
		</div>
	);
}
