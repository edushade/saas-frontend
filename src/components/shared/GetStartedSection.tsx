import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useInView } from '@/hooks/useInView';
import { Card, CardContent } from '../ui/card';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';
import { Typography } from '../ui-custom/typography';
import { StatCounter } from './StatCounter';

const STATS = [
	{ value: '10k+', label: 'Learners supported' },
	{ value: '60%', label: 'Reduction in operational effort' },
	{ value: '0%', label: 'Setup complexity' },
	{ value: '250+', label: 'Platforms built with Edushade' },
] as const;

export default function GetStartedSection() {
	const [statsRef, statsInView] = useInView({ threshold: 0.2 });

	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) overflow-anchor-none">
				<Card className="relative overflow-hidden rounded-[36px]  border-border-secondary shadow-[0_1.5px_4px_-1px_rgba(10,9,11,0.07)] bg-bg-primary">
					<div className="absolute inset-0 z-0 bg-grad-cyan-2 pointer-events-none" />

					<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)64.33px)]" />

					<CardContent className="relative z-10 grid grid-cols-1 items-center gap-8 p-0 py-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-0 lg:py-8">
						<div className="px-4 md:px-8 xl:px-(--es-section-px) lg:pr-10">
							<div className="flex flex-col items-start gap-6">
								<div className="flex flex-col gap-3">
									<Typography
										variant="h1"
										className="text-2xl md:text-[2rem] lg:text-[2.75rem] leading-tight font-medium text-text-primary"
									>
										Get Started Today
									</Typography>
									<Typography
										variant="h6"
										className="font-normal text-text-secondary leading-tight"
									>
										Create your Edushade account and start building learning
										programs with clarity, structure, and control from day one.
									</Typography>
								</div>
								<Button className="btn-brand-2 text-white rounded-lg px-6 h-10 text-sm font-medium">
									Get started
								</Button>
							</div>
						</div>

						<Separator className="mb-10 lg:hidden bg-border-secondary" />
						<Separator
							orientation="vertical"
							className="hidden h-full min-h-[200px] lg:block bg-border-secondary"
						/>

						<div
							className="px-4 md:px-8 xl:px-(--es-section-px) pt-8 lg:pl-10 lg:pt-0"
							ref={statsRef}
						>
							<div className="grid grid-cols-2 gap-x-8 gap-y-10">
								{STATS.map(({ value, label }) => (
									<div key={label}>
										<Typography
											variant="h1"
											className="text-4xl font-semibold text-text-primary leading-none mb-2 tabular-nums"
										>
											<StatCounter displayValue={value} inView={statsInView} />
										</Typography>
										<Typography
											variant="small"
											className="text-text-secondary leading-snug"
										>
											{label}
										</Typography>
									</div>
								))}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
