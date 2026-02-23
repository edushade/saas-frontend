import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

export default function CtaSection() {
	return (
		<section className="bg-bg-primary py-16">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<Card className="relative border-border-secondary shadow-none overflow-hidden rounded-3xl bg-bg-primary">
					{/* Bottom-left glow — must be before shade so shade overlays it */}
					<div
						aria-hidden
						className="pointer-events-none absolute -bottom-24 -left-24 z-0 h-[300px] w-[300px] rounded-full bg-brand-300/60 blur-[100px]"
					/>

					{/* Bottom-right glow */}
					<div
						aria-hidden
						className="pointer-events-none absolute -bottom-24 -right-24 z-0 h-[300px] w-[300px] rounded-full bg-brand-300/60 blur-[100px]"
					/>

					<CardShadeOverlay className="backdrop-blur-[80px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0)_53.53px,rgba(255,255,255,0.2)_85.33px)]" />

					<CardContent className="relative z-10 px-8 py-14 text-center lg:py-20">
						<Typography
							variant="h1"
							className="mx-auto mb-4  font-medium leading-snug text-text-primary"
						>
							Start Building Learning Your Way
						</Typography>
						<Typography
							variant="h6"
							className="mx-auto mb-8 max-w-4xl font-normal leading-relaxed text-text-secondary"
						>
							Set up courses, programs, and learning experiences without forcing
							your process into rigid software. A connected system for students,
							educators, and administrators.
						</Typography>
						<Button size="lg" className="btn-brand-1 rounded-full px-8">
							Build Your Academy
						</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
