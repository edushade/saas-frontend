import { ChevronRight, PlayCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TAGS, TRUST_AVATARS } from "@/constants/hero";
import { Card, CardContent } from "../ui/card";
import { RainbowButton } from "../ui-custom/rainbow-button";
import { Typography } from "../ui-custom/typography";
import { ComposeModelTags } from "./ComposeModelTags";

export default function HeroSection() {
	return (
		<section className="bg-white pt-(--es-nav-h)">
			<div className="mx-auto grid max-w-(--es-max-w) grid-cols-1 items-stretch gap-14 px-(--es-section-px) pt-16 pb-8 lg:grid-cols-2">
				<div className="flex min-h-0 flex-col justify-between gap-2">
					<div className="flex flex-col gap-4">
						<RainbowButton
							variant="outline"
							className="w-fit gap-3 shadow rounded-full px-4 py-2 text-sm text-(--es-text-2)"
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
							<span>Trusted by 12,000+ creators</span>
							<ChevronRight size={14} className="text-(--es-text-3)" />
						</RainbowButton>

						<Typography
							variant="h1"
							className="font-medium lg:max-w-[500px] leading-[1.3] tracking-tight"
						>
							One platform for how you actually teach
						</Typography>

						<Typography
							variant="h6"
							className="max-w-md font-normal	 text-text-secondary"
						>
							Courses, classrooms, communities, and coaching. One platform that
							adapts to how you teach and scale.
						</Typography>

						<div className="flex items-center gap-5">
							<Button className="btn-brand-1 font-medium text-xl rounded-full text-white h-auto px-7 py-3">
								Build Your Academy
							</Button>
							<Button
								variant="ghost"
								className="text-text-primary font-medium text-xl hover:bg-transparent"
							>
								<PlayCircle size={28} className="text-text-primary size-6" />
								Watch Demo
							</Button>
						</div>
					</div>

					<div className="flex flex-col gap-6 pt-2">
						<ComposeModelTags
							tags={TAGS}
							defaultSelected="Analytics"
							className="flex flex-col gap-2"
						/>
					</div>
				</div>

				<Card className="hidden h-full min-h-0 lg:block p-0 shadow-none border-none">
					<CardContent className="h-full min-h-0 p-0">
						<div className="h-full min-h-0 rounded-2xl border border-(--es-border-1) bg-linear-to-br from-blue-50 via-sky-50 to-indigo-50 pt-5 pl-5 shadow-2xl shadow-blue-100">
							<img
								src="/svgs/hero/banner.svg"
								alt="Dashboard"
								className="h-full w-full object-cover object-top"
							/>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
