import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui-custom/typography';
import {
	type FeatureCapabilityIconKey,
	FEATURE_CAPABILITY_ICON_MAP,
} from '@/lib/features/feature-capability-icons';

const DEFAULT_SECTION_TITLE = 'What this feature lets you do';
const DEFAULT_SECTION_DESCRIPTION =
	'Edushade is designed by starting with how educators plan, teach, and support learners. Every part of the platform follows real instructional needs, not predefined software workflows.';

export interface FeatureCapabilityHighlightItem {
	title: string;
	description: string;
	icon: FeatureCapabilityIconKey;
}

const DEFAULT_CAPABILITIES: FeatureCapabilityHighlightItem[] = [
	{
		title: 'Course Builder',
		description:
			'Organize lessons, modules, and sections into a clear structure, easy to manage.',
		icon: 'notebookBookmark',
	},
	{
		title: 'Flexible Lesson Types',
		description:
			'Combine video, text, slides, and documents to match different styles.',
		icon: 'clapperboardPlay',
	},
	{
		title: 'Prerequisite Logic',
		description: 'Unlock lessons only after required content is completed.',
		icon: 'arrowRight',
	},
	{
		title: 'Certificates',
		description: 'Automatically recognize course completion with certificates.',
		icon: 'diploma',
	},
	{
		title: 'Learning Paths',
		description:
			'Arrange lessons in a logical sequence that guides learners through the material.',
		icon: 'routing',
	},
	{
		title: 'Assignments & Quizzes',
		description:
			'Reinforce learning with tasks and assessments that track progress.',
		icon: 'clipboardList',
	},
];

export interface FeatureCapabilityHighlightsSectionProps {
	title?: string;
	description?: string;
	capabilities?: FeatureCapabilityHighlightItem[];
}

/**
 * Icon grid for feature detail pages. Driven by `capabilityHighlights` in
 * `content/features/<slug>.mdx`.
 */
export function FeatureCapabilityHighlightsSection({
	title = DEFAULT_SECTION_TITLE,
	description = DEFAULT_SECTION_DESCRIPTION,
	capabilities = DEFAULT_CAPABILITIES,
}: FeatureCapabilityHighlightsSectionProps = {}) {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) space-y-12">
				<div className="text-center space-y-6">
					<Typography
						variant="h1"
						className="text-2xl md:text-[2rem] lg:text-[2.75rem] font-semibold leading-tight text-text-primary"
					>
						{title}
					</Typography>
					<Typography
						variant="base"
						className="mt-4 max-w-3xl mx-auto font-normal leading-relaxed text-text-secondary"
					>
						{description}
					</Typography>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{capabilities.map((item) => {
						const Icon = FEATURE_CAPABILITY_ICON_MAP[item.icon];
						return (
							<Card
								key={item.title}
								className="rounded-[20px] border border-border-secondary bg-bg-primary shadow-md hover:shadow-md duration-300 hover:transition-shadow hover:scale-[1.01]"
							>
								<CardContent>
									<div className="flex size-11 items-center justify-center rounded-lg bg-brand-200/15 text-brand-300 mb-4">
										<Icon className="size-6" aria-hidden />
									</div>
									<Typography
										variant="h5"
										className="font-medium leading-snug text-text-primary"
									>
										{item.title}
									</Typography>
									<Typography
										variant="h6"
										className="mt-2 font-normal leading-snug text-text-secondary"
									>
										{item.description}
									</Typography>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
