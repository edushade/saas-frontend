import { ChevronRight } from "lucide-react";
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage,
} from "@/components/ui/avatar";
import { TRUST_AVATARS } from "@/constants/hero";
import { RainbowButton } from "../ui-custom/rainbow-button";
import { Typography } from "../ui-custom/typography";
import { HeroCtaButtons } from "./HeroCtaButtons";
import { HeroTaggedBlock } from "./HeroTaggedBlock";

export default function HeroSection() {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<HeroTaggedBlock>
				<RainbowButton
					variant="outline"
					className="w-fit gap-3 shadow rounded-full px-1 py-2 text-sm"
				>
					<AvatarGroup>
						{TRUST_AVATARS.map((a) => (
							<Avatar key={a.fallback} size="sm">
								<AvatarImage src={a.src} alt="" />
								<AvatarFallback className={a.className}>
									{a.fallback}
								</AvatarFallback>
							</Avatar>
						))}
					</AvatarGroup>
					<Typography variant="small" className="font-medium text-[#262626]">
						Trusted by 12,000+ creators
					</Typography>
					<ChevronRight size={14} className="text-[#262626]" />
				</RainbowButton>

				<Typography
					variant="h1"
					className="w-full mt-3 text-3xl md:text-[50px] lg:text-[60px] font-medium tracking-tight leading-tight text-text-primary"
				>
					One platform for how you actually teach
				</Typography>

				<Typography variant="h6" className="font-normal	 text-text-secondary">
					Courses, classrooms, communities, and coaching. <br />
					One platform that adapts to how you teach and scale.
				</Typography>

				<HeroCtaButtons />
			</HeroTaggedBlock>
		</section>
	);
}
