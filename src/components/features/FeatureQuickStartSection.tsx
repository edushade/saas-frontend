import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui-custom/typography';
import { cn } from '@/lib/utils';
import { BannerTag } from '../ui-custom/BannerTag';

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

/**
 * Numbered steps with imagery for feature pages. Driven by `quickStart` in
 * `content/features/<slug>.mdx`.
 */
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

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
					{steps.map((item) => (
						<div
							key={item.step}
							className="flex flex-col items-center text-center gap-6"
						>
							<BannerTag
								tag={item.step.toString()}
								className="flex size-8 shrink-0 items-center justify-center font-medium"
							/>
							<Card className="relative overflow-hidden border-border-tertiary p-0  bg-bg-secondary shadow-[0px_2px_8px_0px_rgba(10,9,11,0.06)]">
								<CardContent className="relative z-10  p-0 ">
									<div className="rounded-2xl shadow-2xl">
										<img
											src={item.imageSrc}
											alt={item.imageAlt ?? ''}
											aria-hidden
											className="h-full w-full object-cover object-top"
										/>
									</div>
								</CardContent>
							</Card>

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
