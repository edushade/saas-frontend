import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/** Placeholder when image fails: keeps card shape and avoids broken icon. */
const PLACEHOLDER_SRC =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect fill='%23f1f5f9' width='800' height='500'/%3E%3Ctext fill='%2394a3b8' font-family='sans-serif' font-size='18' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";

const TAB_CONTENT = {
	creators: {
		leftSrc: "/teach-left.png",
		leftAlt: "Create Learning Path — assign learners",
		rightSrc: "/teach-video.jpg",
		rightAlt: "Watch Intro",
		videoLabel: "Watch Intro",
	},
	academies: {
		leftSrc: "/teach-academies.png",
		leftAlt: "For Academies — manage courses",
		rightSrc: "/teach-academies-video.jpg",
		rightAlt: "Academy overview",
		videoLabel: "Watch Overview",
	},
	schools: {
		leftSrc: "/teach-schools.png",
		leftAlt: "For Schools — classroom tools",
		rightSrc: "/teach-schools-video.jpg",
		rightAlt: "School intro",
		videoLabel: "Watch Intro",
	},
} as const;

function ImageCard({
	src,
	alt,
	fallbackSrc = PLACEHOLDER_SRC,
}: {
	src: string;
	alt: string;
	fallbackSrc?: string;
}) {
	return (
		<div className="aspect-video w-full bg-muted">
			<img
				src={src}
				alt={alt}
				className="h-full w-full object-cover"
				onError={(e) => {
					const el = e.currentTarget;
					if (el.src !== fallbackSrc) el.src = fallbackSrc;
				}}
			/>
		</div>
	);
}

function VideoCard({
	src,
	alt,
	label,
	fallbackSrc = PLACEHOLDER_SRC,
}: {
	src: string;
	alt: string;
	label: string;
	fallbackSrc?: string;
}) {
	return (
		<div className="relative aspect-video w-full bg-muted">
			<img
				src={src}
				alt={alt}
				className="h-full w-full object-cover"
				onError={(e) => {
					const el = e.currentTarget;
					if (el.src !== fallbackSrc) el.src = fallbackSrc;
				}}
			/>
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
		<section className="bg-white py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<Tabs defaultValue="creators">
					{/* Row 1: heading (left) + tabs (right) — same row on desktop */}
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
						<div className="flex flex-col gap-4">
							<h2 className="text-3xl lg:text-4xl font-bold leading-tight text-(--es-text-1)">
								Built for how you teach.
							</h2>
							<p className="text-(--es-text-2) leading-relaxed max-w-xl">
								From solo creators to academies and universities, Edushade
								supports diverse teaching models with flexibility, clarity, and
								control.
							</p>
						</div>
						<TabsList className="bg-muted rounded-lg p-1 h-9 w-full lg:w-auto">
							<TabsTrigger
								value="creators"
								className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md px-4"
							>
								For Creators
							</TabsTrigger>
							<TabsTrigger value="academies" className="rounded-md px-4">
								For Academies
							</TabsTrigger>
							<TabsTrigger value="schools" className="rounded-md px-4">
								For Schools
							</TabsTrigger>
						</TabsList>
					</div>

					{/* Row 2: full-width two-column cards — below the heading row, updates per tab */}
					{(["creators", "academies", "schools"] as const).map((tab) => {
						const c = TAB_CONTENT[tab];
						return (
							<TabsContent
								key={tab}
								value={tab}
								className="mt-10 outline-none data-[state=inactive]:hidden"
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
									<Card className="overflow-hidden rounded-xl border border-(--es-border-1) shadow-sm bg-card">
										<CardContent className="p-0">
											<ImageCard src={c.leftSrc} alt={c.leftAlt} />
										</CardContent>
									</Card>
									<Card className="overflow-hidden rounded-xl border border-(--es-border-1) shadow-sm bg-card">
										<CardContent className="p-0 relative">
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
