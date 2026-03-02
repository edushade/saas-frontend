"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardShadeOverlay } from "@/components/ui-custom/card-shade-overlay";
import { getHeroImageForTag, TAGS } from "@/constants/hero";
import { ComposeModelTags } from "./ComposeModelTags";

const DEFAULT_TAG = "Courses";

export function HeroTaggedBlock({ children }: { children: React.ReactNode }) {
	const [selectedTag, setSelectedTag] = useState(DEFAULT_TAG);
	const { src, alt } = getHeroImageForTag(selectedTag);

	return (
		<div className="mx-auto grid max-w-(--es-max-w) grid-cols-1 items-stretch gap-6  lg:grid-cols-2">
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

			<Card className="relative max-h-[642px] max-w-[610px] h-full min-h-0 overflow-hidden rounded-2xl p-0 shadow-none border-border-secondary lg:block bg-bg-primary">
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
			</Card>
		</div>
	);
}
