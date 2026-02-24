import { ChevronRight } from "lucide-react";
import { VideoWahtIcon } from "@/assets/icons/video-icon";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TAGS, TRUST_AVATARS } from "@/constants/hero";
import { Card, CardContent } from "../ui/card";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { RainbowButton } from "../ui-custom/rainbow-button";
import { Typography } from "../ui-custom/typography";
import { ComposeModelTags } from "./ComposeModelTags";

export default function HeroSection() {
	return (
		<section className="bg-bg-primary pt-(--es-nav-h) px-4 md:px-(--es-section-px)">
			<div className="mx-auto grid max-w-(--es-max-w) grid-cols-1 items-stretch gap-6  pt-8 pb-6  md:pt-16 md:pb-8 lg:grid-cols-2">
				<div className="flex min-h-0 flex-col justify-between gap-2">
					<div className="flex flex-col items-center md:items-start gap-4">
						<RainbowButton
							variant="outline"
							className="w-fit gap-3 shadow rounded-full px-2 py-2 text-sm text-text-secondary"
						>
							<AvatarGroup>
								{TRUST_AVATARS.map((a) => (
									<Avatar key={a.fallback} size="sm">
										<AvatarFallback className={a.className}>
											{a.fallback}
										</AvatarFallback>
									</Avatar>
								))}
							</AvatarGroup>
							<Typography
								variant="small"
								className="font-normal text-[#262626]"
							>
								Trusted by 12,000+ creators
							</Typography>
							<ChevronRight size={14} className="text-[#262626]" />
						</RainbowButton>

						<Typography
							variant="h1"
							className="w-full text-3xl md:text-[50px] lg:text-[60px] font-medium tracking-tight leading-tight text-text-primary"
						>
							One platform for how you actually teach
						</Typography>

						<Typography
							variant="h6"
							className="font-normal	 text-text-secondary"
						>
							Courses, classrooms, communities, and coaching. <br />
							One platform that adapts to how you teach and scale.
						</Typography>

						<div className="flex flex-row items-center gap-2 md:gap-5">
							<Button className="btn-brand-1 font-medium md:text-lg rounded-full  text-white h-auto">
								Build Your Academy
							</Button>
							<Button
								variant="ghost"
								className="text-text-primary font-medium md:text-lg hover:bg-transparent h-auto py-3 px-5 gap-2"
							>
								<VideoWahtIcon className="text-text-primary size-8 shrink-0" />
								Watch Demo
							</Button>
						</div>
					</div>

					<div className="flex flex-col items-center md:items-start gap-2 md:gap-6 pt-2">
						<ComposeModelTags
							tags={TAGS}
							defaultSelected="Analytics"
							className="flex flex-col gap-2"
						/>
					</div>
				</div>

				<Card className="relative  max-h-[642px]  max-w-[610px] h-full min-h-0 overflow-hidden rounded-3xl p-0 shadow-none border-none lg:block bg-bg-primary">
					<div
						aria-hidden
						className="pointer-events-none absolute -top-24 -left-24 z-0 h-[300px] w-[300px] rounded-full bg-brand-300/60 blur-[100px]"
					/>

					<div
						aria-hidden
						className="pointer-events-none absolute -top-24 -right-24 z-0 h-[300px] w-[300px] rounded-full bg-brand-300/60 blur-[100px]"
					/>
					<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
					<CardContent className="relative z-10 h-full min-h-0 p-0">
						<div className="relative h-full min-h-0 rounded-2xl pt-8 pl-8 shadow-3xl">
							<img
								src="/svgs/hero/banner.svg"
								alt="Dashboard"
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
		</section>
	);
}
