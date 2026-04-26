import { Link } from '@tanstack/react-router';
import { Lightbulb, MessageCircleQuestion, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BannerTag } from '@/components/ui-custom/BannerTag';
import { CardShadeOverlay } from '@/components/ui-custom/card-shade-overlay';
import { Typography } from '@/components/ui-custom/typography';

const HIGHLIGHTS = [
	{
		icon: Lightbulb,
		title: 'Have an idea?',
		description:
			'Tell us what your team or institution needs to deliver learning the way you want.',
	},
	{
		icon: MessageCircleQuestion,
		title: 'Not sure if we cover it?',
		description:
			'If a workflow looks missing, chances are we can map it to an existing capability or build it.',
	},
	{
		icon: Send,
		title: 'Talk to our team',
		description:
			'Share your use case with sales and we’ll explore how Edushade can fit your roadmap.',
	},
] as const;

export function MissingFeatureSection() {
	return (
		<section className="bg-bg-secondary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w)">
				<Card className="relative overflow-hidden rounded-4xl border-border-secondary bg-bg-primary p-0 shadow-none">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 z-0 bg-grad-lightblue"
					/>
					<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

					<CardContent className="relative z-10 flex flex-col items-center gap-10 px-6 py-12 md:px-12 md:py-16 lg:py-20">
						<div className="flex flex-col items-center gap-5 text-center">
							<BannerTag tag="Missing Something?" />
							<Typography
								variant="h1"
								className="max-w-3xl text-2xl md:text-[2rem] lg:text-[2.75rem] font-medium leading-tight text-text-primary"
							>
								Don’t see a feature your LMS needs?
							</Typography>
							<Typography
								variant="base"
								className="max-w-2xl font-normal leading-relaxed text-text-secondary"
							>
								Edushade is built around real teaching and learning workflows.
								If something you rely on isn’t listed here, let us know — we
								regularly extend the platform based on what schools, academies,
								and training teams ask for.
							</Typography>
						</div>

						<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
							{HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
								<div
									key={title}
									className="flex flex-col gap-3 rounded-2xl border border-border-secondary bg-bg-primary p-5 shadow-xs"
								>
									<div className="flex size-10 items-center justify-center rounded-lg bg-brand-200/15 text-brand-300">
										<Icon className="size-5" aria-hidden />
									</div>
									<Typography
										variant="h6"
										className="font-medium leading-snug text-text-primary"
									>
										{title}
									</Typography>
									<Typography
										variant="small"
										className="leading-relaxed text-text-secondary"
									>
										{description}
									</Typography>
								</div>
							))}
						</div>

						<div className="flex flex-col items-center gap-3 sm:flex-row">
							<Button
								asChild
								size="lg"
								className="btn-brand-1 rounded-xl px-5 py-3 text-base font-medium hover:bg-brand-300/90"
							>
								<Link to="/contact-sales">Talk to Sales</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-xl border-border-secondary bg-bg-primary px-5 py-3 text-base font-medium text-text-primary hover:bg-bg-secondary"
							>
								<Link to="/contact-us">Send Feedback</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
