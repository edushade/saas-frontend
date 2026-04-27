import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';
import { Typography } from '../ui-custom/typography';

export default function CtaSection() {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<Card className="relative border-border-secondary min-h-[400px] flex flex-col justify-center items-center py-0 shadow-none overflow-hidden rounded-4xl bg-bg-primary">
					<img
						src="/svgs/cta/Background Vectors.svg"
						alt=""
						aria-hidden
						className="pointer-events-none absolute bottom-0 left-0 z-0 h-[280px] w-auto max-w-full object-cover object-right"
					/>
					<img
						src="/svgs/cta/Background Vectors 2.svg"
						alt=""
						aria-hidden
						className="pointer-events-none absolute bottom-0 right-0 z-0 h-[280px] w-auto max-w-full  object-cover object-left"
					/>

					<CardShadeOverlay className="backdrop-blur-[80px] bg-[repeating-linear-gradient(270deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0)_40px,rgba(255,255,255,0.2)_80px)]" />

					<CardContent className="relative z-10 flex w-full flex-1 min-h-0 flex-col justify-center items-center px-8 py-14 text-center lg:py-20">
						<Typography
							variant="h1"
							className="mx-auto mb-4 text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
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
						<Button
							asChild
							size="lg"
							className="btn-brand-1 rounded-xl px-5 hover:bg-brand-200/90 py-3 text-base font-medium"
						>
							<Link to="/contact-sales">Build Your Academy</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
