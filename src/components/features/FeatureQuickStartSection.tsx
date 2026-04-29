import { ArrowRight } from 'lucide-react';
import { Typography } from '@/components/ui-custom/typography';
import { cn } from '@/lib/utils';

export interface QuickStartStepItem {
	step: number;
	title: string;
	description: string;
	imageSrc?: string;
	imageAlt?: string;
}

export interface FeatureQuickStartSectionProps {
	title?: string;
	subtitle?: string;
	steps?: QuickStartStepItem[];
	className?: string;
}

const DEFAULT_TITLE = 'Get started in a few steps';
const DEFAULT_SUBTITLE =
	'Create, structure, and publish in three simple steps. No technical setup, no complex configuration.';

const DEFAULT_STEPS: QuickStartStepItem[] = [
	{
		step: 1,
		title: 'Create your course',
		description: 'Add a course title and outline your lessons in seconds.',
		imageAlt: 'Course creation form',
		imageSrc: '/svgs/courses/course-create.svg',
	},
	{
		step: 2,
		title: 'Add lessons and structure',
		description: 'Upload content, organize modules, and set progression rules.',
		imageAlt: 'Curriculum and structure',
		imageSrc: '/svgs/courses/course-curriculum.svg',
	},
	{
		step: 3,
		title: 'Publish and invite learners',
		description:
			'Make your course live and start enrolling students right away.',
		imageAlt: 'Publish and invite',
		imageSrc: '/svgs/courses/course-publish.svg',
	},
];

export function FeatureQuickStartSection({
	title = DEFAULT_TITLE,
	subtitle = DEFAULT_SUBTITLE,
	steps = DEFAULT_STEPS,
	className,
}: FeatureQuickStartSectionProps) {
	return (
		<section
			className={cn(
				'bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)',
				className,
			)}
		>
			<div className="mx-auto max-w-(--es-max-w)">
				<div className="text-center mb-10 md:mb-14">
					<Typography
						variant="h1"
						className="text-2xl md:text-[2rem] lg:text-[2.75rem] font-semibold leading-tight text-text-primary"
					>
						{title}
					</Typography>
					<Typography
						variant="base"
						className="mt-4 max-w-2xl mx-auto font-normal leading-relaxed text-text-secondary"
					>
						{subtitle}
					</Typography>
				</div>

				<div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
					<div
						aria-hidden
						className="pointer-events-none absolute top-4.5 left-0 right-0 hidden h-px md:block"
						style={{
							backgroundImage:
								'repeating-linear-gradient(to right, rgba(0,102,255,0.45) 0 6px, transparent 6px 14px)',
							WebkitMaskImage:
								'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
							maskImage:
								'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
						}}
					/>

					{steps.map((item, idx) => (
						<div
							key={item.step}
							className="relative flex flex-col items-center text-center gap-6"
						>
							<div className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-white pl-1 pr-3.5 py-1 border border-border-secondary shadow-[0_4px_14px_-6px_rgba(0,102,255,0.25)]">
								<span className="flex size-7 items-center justify-center rounded-full bg-linear-to-br from-brand-300 to-brand-200 text-white text-xs font-semibold shadow-[inset_0_-1px_2px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.4)]">
									{item.step}
								</span>
								<span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-text-tertiary">
									Step
									{idx < steps.length - 1 && (
										<ArrowRight className="size-3 text-brand-300/70" aria-hidden />
									)}
								</span>
							</div>
							
							<div className="display-frame relative overflow-hidden rounded-[22px] w-full">
								<div
									aria-hidden
									className="frame-inset-border inset-3 rounded-[14px]"
								/>

								<span aria-hidden className="frame-marker top-5 left-5 z-20" />
								<span aria-hidden className="frame-marker top-5 right-5 z-20" />
								<span aria-hidden className="frame-marker bottom-5 left-5 z-20" />
								<span aria-hidden className="frame-marker bottom-5 right-5 z-20" />

								<div className="relative z-10 pt-11 pl-11 pr-3 pb-3">
									<div className="h-64 overflow-hidden rounded-tl-lg rounded-br-[10px] bg-white shadow-[0_18px_36px_-20px_rgba(15,60,110,0.35),0_6px_14px_-8px_rgba(15,60,110,0.18)]">
										<img
											src={item.imageSrc}
											alt={item.imageAlt ?? ''}
											className="block h-full w-full object-cover object-top"
										/>
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-1 items-center">
								<Typography
									variant="h6"
									className="font-medium text-text-primary"
								>
									{item.title}
								</Typography>
								<Typography
									variant="base"
									className="font-normal leading-relaxed text-text-secondary"
								>
									{item.description}
								</Typography>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
