import { Marquee } from "@/components/ui-custom/marquee";
import { PLATFORMS } from "@/constants/platforms";

function PlatformCard({ name, stat, icon: Icon }: (typeof PLATFORMS)[number]) {
	return (
		<div className="flex flex-col items-center gap-1 px-6">
			<div className="flex items-center gap-1">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center">
					<Icon size={18} className="text-gray-400" />
				</div>
				<p className="text- font-semibold text-gray-400">{name}</p>
			</div>
			<p className="text-sm font-normal text-gray-300">{stat}</p>
		</div>
	);
}

export default function LogosSection() {
	return (
		<section className="py-4 flex flex-col items-center gap-4">
			<p className=" text-center text-sm text-(--es-text-3)">
				We collaborate with over 250 Platforms
			</p>

			<Marquee
				pauseOnHover
				repeat={3}
				className="[--duration:38s] [--gap:0rem]"
			>
				{PLATFORMS.map((platform) => (
					<PlatformCard key={platform.name} {...platform} />
				))}
			</Marquee>
		</section>
	);
}
