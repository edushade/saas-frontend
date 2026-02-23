import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui-custom/typography";
import { PLATFORM_FEATURES } from "@/constants/platforms-features";

export default function EverythingYouNeedSection() {
	const CAROUSEL_ITEM_CLASS = "pl-4 basis-[min(100%,336px)] sm:basis-[336px]";

	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="overflow-hidden rounded-xl bg-bg-secondary p-6">
					<div>
						<div className="mb-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
							<Typography
								variant="h1"
								className="font-medium leading-tight text-text-primary"
							>
								Everything you need for your platform
							</Typography>
							<Typography
								variant="h6"
								className="max-w-[728px]  font-normal leading-relaxed text-text-secondary"
							>
								We replaced the messy tech stack with a clean, all-in-one
								engine. Create, market, and sell your courses without the 3 a.m.
								tech panic.
							</Typography>
						</div>

						<div className="relative -mx-6 overflow-hidden">
							<Carousel
								opts={{ align: "start", loop: true, dragFree: false }}
								className="w-full"
							>
								<CarouselContent className="-ml-4 pl-6 pr-6">
									{PLATFORM_FEATURES.map((feature) => (
										<CarouselItem
											key={feature.title}
											className={CAROUSEL_ITEM_CLASS}
										>
											<PlatformFeatureCard
												title={feature.title}
												description={feature.description}
												imageSrc={feature.imageSrc}
												imageAlt={feature.imageAlt}
											/>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const CARD_CLASS =
	"flex h-full flex-col overflow-hidden rounded-3xl border border-(--es-border-1) bg-bg-primary shadow-sm";
const HEADER_CLASS = "flex flex-row items-start justify-between gap-2 pb-2";
const CONTENT_CLASS = "flex flex-1 flex-col gap-4 pt-0";

interface PlatformFeatureCardProps {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
}

function PlatformFeatureCard({
	title,
	description,
	imageSrc,
	imageAlt,
}: PlatformFeatureCardProps) {
	return (
		<Card className={CARD_CLASS}>
			<CardHeader className={HEADER_CLASS}>
				<div className="flex items-center justify-between gap-2">
					<div className="space-y-1.5">
						<Typography
							variant="h6"
							className="font-medium leading-snug text-text-primary"
						>
							{title}
						</Typography>
						<Typography
							variant="small"
							className="font-normal leading-snug text-text-secondary whitespace-pre-line"
						>
							{description}
						</Typography>
					</div>
				</div>
				<Button
					variant="ghost"
					size="icon"
					className="bg-bg-tertiary hover:bg-bg-tertiary/80"
				>
					<Plus className="size-4" />
				</Button>
			</CardHeader>
			<CardContent className={CONTENT_CLASS}>
				<div>
					<img
						src={imageSrc}
						alt={imageAlt}
						className="h-full w-full object-cover"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
