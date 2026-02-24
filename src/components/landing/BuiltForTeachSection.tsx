import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

const TAB_CONTENT = {
	creators: {
		leftSrc: "/svgs/build-for-teach/1.svg",
		leftAlt: "Create Learning Path — assign learners",
		rightSrc: "/svgs/build-for-teach/2.svg",
		rightAlt: "Watch Intro",
		videoLabel: "Watch Intro",
	},
	academies: {
		leftSrc: "/svgs/build-for-teach/1.svg",
		leftAlt: "For Academies — manage courses",
		rightSrc: "/svgs/build-for-teach/2.svg",
		rightAlt: "Academy overview",
		videoLabel: "Watch Overview",
	},
	schools: {
		leftSrc: "/svgs/build-for-teach/1.svg",
		leftAlt: "For Schools — classroom tools",
		rightSrc: "/svgs/build-for-teach/3.svg",
		rightAlt: "School intro",
		videoLabel: "Watch Intro",
	},
} as const;

function ImageCard({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="w-full overflow-hidden shadow-xl">
			<div className="h-full w-full overflow-hidden ">
				<img
					src={src}
					alt={alt}
					className="h-full w-full object-cover object-top"
				/>
			</div>
		</div>
	);
}

function VideoCard({
	src,
	alt,
	label,
}: {
	src: string;
	alt: string;
	label: string;
}) {
	return (
		<div className="relative h-full min-h-0 w-full overflow-hidden bg-bg-tertiary">
			<img src={src} alt={alt} className="h-full w-full object-cover" />
			<div className="absolute inset-0 flex items-center justify-center bg-black/30">
				<Button
					size="lg"
					className="rounded-lg bg-black/70 hover:bg-black/80 text-white gap-2 h-auto px-5 py-3"
				>
					<Play className="size-5" />
					{label}
				</Button>
			</div>
		</div>
	);
}

export default function BuiltForTeachSection() {
	return (
		<section className="bg-bg-primary py-8 md:py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<Tabs defaultValue="creators">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
						<div className="flex flex-col gap-4">
							<Typography
								variant="h1"
								className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
							>
								Built for how you teach.
							</Typography>
							<Typography
								variant="h6"
								className="font-normal leading-relaxed text-text-secondary max-w-[728px]"
							>
								From solo creators to academies and universities, Edushade
								supports diverse teaching models with flexibility, clarity, and
								control.
							</Typography>
						</div>
						<TabsList className="bg-bg-tertiary rounded-2xl p-1 h-16 group-data-[orientation=horizontal]/tabs:h-11 w-full lg:w-auto">
							<TabsTrigger
								value="creators"
								className="data-[state=active]:bg-brand-300 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-xl px-4 h-full py-2 text-sm font-medium"
							>
								For Creators
							</TabsTrigger>
							<TabsTrigger
								value="academies"
								className="data-[state=active]:bg-brand-300 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-xl px-4 h-full py-2 text-sm font-medium"
							>
								For Academies
							</TabsTrigger>
							<TabsTrigger
								value="schools"
								className="data-[state=active]:bg-brand-300 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-xl px-4 h-full py-2 text-sm font-medium"
							>
								For Schools
							</TabsTrigger>
						</TabsList>
					</div>

					{(["creators", "academies", "schools"] as const).map((tab) => {
						const c = TAB_CONTENT[tab];
						return (
							<TabsContent
								key={tab}
								value={tab}
								className="mt-10 outline-none data-[state=inactive]:hidden"
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
									<Card className="relative overflow-hidden rounded-2xl border-none bg-bg-tertiary p-0">
										<CardShadeOverlay className="backdrop-blur-[80px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.2)_100%)]" />
										<CardContent className="relative z-10 p-0">
											<ImageCard src={c.leftSrc} alt={c.leftAlt} />
										</CardContent>
									</Card>
									<Card className="flex overflow-hidden rounded-xl border border-border-primary shadow-sm bg-card p-0">
										<CardContent className="relative flex min-h-0 flex-1 p-0">
											<VideoCard
												src={c.rightSrc}
												alt={c.rightAlt}
												label={c.videoLabel}
											/>
										</CardContent>
									</Card>
								</div>
							</TabsContent>
						);
					})}
				</Tabs>
			</div>
		</section>
	);
}
