import AutoScroll from "embla-carousel-auto-scroll";
import { Plus } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui-custom/typography";
import { PLATFORM_FEATURES } from "@/data/platforms-features";
import { cn } from "@/lib/utils";

const LOOP_REPEAT = 3;

export default function EverythingYouNeedSection() {
	const autoScrollPlugin = useRef(
		AutoScroll({
			speed: 0.7,
			startDelay: 600,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
			stopOnFocusIn: true,
		}),
	);

	const loopedFeatures = Array.from(
		{ length: LOOP_REPEAT },
		() => PLATFORM_FEATURES,
	).flat();

	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w)">
				<Card className="overflow-hidden shadow-none border-none	gap-0 rounded-4xl bg-bg-secondary">
					<CardHeader className="grid grid-cols-1 items-end gap-6 md:gap-8 lg:grid-cols-2 lg:gap-24">
						<Typography
							variant="h1"
							className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
						>
							Everything you need for your platform
						</Typography>
						<Typography
							variant="h6"
							className="font-normal leading-relaxed text-text-secondary"
						>
							We replaced the messy tech stack with a clean, all-in-one engine.
							Create, market, and sell your courses without the 3 a.m. tech
							panic.
						</Typography>
					</CardHeader>

					<CardContent className="relative -mr-4 md:-mr-6 overflow-hidden pt-0">
						<Carousel
							opts={{
								align: "start",
								loop: true,
								dragFree: true,
								containScroll: false,
								watchDrag: true,
							}}
							plugins={[autoScrollPlugin.current]}
							className="w-full"
						>
							<CarouselContent className="-ml-6 md:-ml-8 pl-6 md:pl-8 pr-6 md:pr-8">
								{loopedFeatures.map((feature, index) => {
									const variantIndex = index % PLATFORM_FEATURES.length;
									return (
										<CarouselItem
											key={`${feature.title}-${index}`}
											className="pl-6 basis-[min(100%,336px)] sm:basis-[336px]"
										>
											<PlatformFeatureCard
												title={feature.title}
												description={feature.description}
												imageSrc={feature.imageSrc}
												imageAlt={feature.imageAlt}
												cardClassName={
													CARD_VARIANT_CLASSNAMES[variantIndex] ?? undefined
												}
											/>
										</CarouselItem>
									);
								})}
							</CarouselContent>
						</Carousel>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}

const CARD_GRADIENT_SHADOW =
	"!border-none !shadow-[0px_0px_0px_1px_#0A090B0D,0px_2px_7px_0px_#0A090B0D,0px_2px_5px_-2px_#0A090B0F]";

const CARD_1_CLASSNAME =
	"!bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_22%,#C5D1FF_100%)] " +
	CARD_GRADIENT_SHADOW;
const CARD_2_CLASSNAME =
	"!bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_22%,#C5FFE6_100%)] " +
	CARD_GRADIENT_SHADOW;
const CARD_3_CLASSNAME =
	"!bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_22%,#F2FFC5_100%)] " +
	CARD_GRADIENT_SHADOW;
const CARD_4_CLASSNAME =
	"!bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_22%,#FFC5F0_100%)] " +
	CARD_GRADIENT_SHADOW;

const CARD_VARIANT_CLASSNAMES = [
	CARD_1_CLASSNAME,
	CARD_2_CLASSNAME,
	CARD_3_CLASSNAME,
	CARD_4_CLASSNAME,
] as const;

interface PlatformFeatureCardProps {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	cardClassName?: string;
}

function PlatformFeatureCard({
	title,
	description,
	imageSrc,
	imageAlt,
	cardClassName,
}: PlatformFeatureCardProps) {
	return (
		<Card
			className={cn(
				"flex max-h-[372px] max-w-[336px] h-full gap-0 flex-col overflow-hidden rounded-3xl border border-border-primary bg-bg-primary shadow-sm pb-0",
				cardClassName,
			)}
		>
			<CardHeader className="flex flex-row items-start justify-between gap-2">
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
					className="bg-bg-tertiary hover:bg-bg-primary"
				>
					<Plus className="size-4" />
				</Button>
			</CardHeader>
			<CardContent className="flex flex-1 min-h-0 flex-col px-2">
				<div className="flex min-h-0 flex-1 flex-col justify-end">
					<img
						src={imageSrc}
						alt={imageAlt}
						className={`max-h-full w-full object-contain object-bottom`}
					/>
				</div>
			</CardContent>
		</Card>
	);
}
