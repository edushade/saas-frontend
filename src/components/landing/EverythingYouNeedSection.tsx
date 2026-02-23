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
import { cn } from "@/lib/utils";

export default function EverythingYouNeedSection() {
	const CAROUSEL_ITEM_CLASS = "pl-4 basis-[min(100%,336px)] sm:basis-[336px]";

	return (
		<section className="bg-bg-primary py-8 md:py-(--es-section-py)">
			<div className="mx-auto max-w-(--es-max-w) px-4 md:px-(--es-section-px)">
				<div className="overflow-hidden rounded-xl bg-bg-secondary p-4 md:p-6">
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

						<div className="relative -mx-4 md:-mx-6 overflow-hidden">
							<Carousel
								opts={{ align: "start", loop: true, dragFree: false }}
								className="w-full"
							>
								<CarouselContent className="-ml-4 md:-ml-6 pl-4 md:pl-6 pr-4 md:pr-6">
									{PLATFORM_FEATURES.map((feature, index) => (
										<CarouselItem
											key={feature.title}
											className={CAROUSEL_ITEM_CLASS}
										>
											<PlatformFeatureCard
												title={feature.title}
												description={feature.description}
												imageSrc={feature.imageSrc}
												imageAlt={feature.imageAlt}
												cardClassName={
													CARD_VARIANT_CLASSNAMES[index] ?? undefined
												}
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
