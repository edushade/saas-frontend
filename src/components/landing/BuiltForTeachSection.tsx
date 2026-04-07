import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoCard } from "../shared";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

const TAB_CONTENT = {
	creators: {
		leftSrc: "/svgs/build-for-teach/1.svg",
		leftAlt: "Create Learning Path — assign learners",
		rightSrc: "/videos/intro.mp4",
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
};

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

export default function BuiltForTeachSection() {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<Tabs defaultValue="creators" className="flex flex-col gap-11">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 md:gap-8 xl:gap-12 items-end">
						<div className="flex flex-col gap-6">
							<Typography
								variant="h1"
								className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
							>
								Built for how you teach.
							</Typography>
							<Typography
								variant="h6"
								className="font-normal leading-normal text-text-secondary max-w-[728px]"
							>
								From solo creators to academies and universities, Edushade
								supports diverse teaching models with flexibility, clarity, and
								control.
							</Typography>
						</div>
						<TabsList className="bg-bg-tertiary rounded-2xl p-1 h-16 group-data-[orientation=horizontal]/tabs:h-11 w-full max-w-[432px] lg:w-auto">
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
								className="outline-none data-[state=inactive]:hidden"
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
