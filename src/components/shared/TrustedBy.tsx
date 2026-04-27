import { Marquee } from "@/components/ui-custom/marquee";
import { PLATFORMS } from "@/lib/platform/data";
import { Typography } from "../ui-custom/typography";

function PlatformCard({
	name,
	stat,
	logo,
	logoScale = 1,
}: (typeof PLATFORMS)[number]) {
	return (
		<div className="flex flex-col items-center justify-center px-4  md:px-8">
			<div className="flex h-[40px] w-[120px] md:h-[60px] md:w-[180px] items-center justify-center gap-1">
				<img
					src={logo}
					alt={name}
					className="h-full w-full object-contain"
					style={
						logoScale !== 1 ? { transform: `scale(${logoScale})` } : undefined
					}
				/>
			</div>
			<Typography variant="small" className="font-normal text-text-tertiary">
				{stat}
			</Typography>
		</div>
	);
}

export default function TrustedBy() {
	return (
		<section className="relative flex w-full flex-col items-center gap-4 overflow-hidden py-(--es-section-py)">
			<Typography
				variant="h6"
				className="font-normal text-center text-text-tertiary"
			>
				We collaborate with over 250 Platforms
			</Typography>

			<Marquee
				pauseOnHover
				repeat={3}
				className="[--duration:38s] [--gap:0rem]"
			>
				{PLATFORMS.map((platform) => (
					<PlatformCard key={platform.name} {...platform} />
				))}
			</Marquee>

			<div
				className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r"
				aria-hidden
			/>
			<div
				className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l"
				aria-hidden
			/>
		</section>
	);
}
