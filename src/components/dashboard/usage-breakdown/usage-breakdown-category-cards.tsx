import type { LucideIcon } from 'lucide-react';
import {
	BookOpen,
	ClipboardCheck,
	GraduationCap,
	Info,
	Video,
} from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Typography } from '@/components/ui-custom/typography';
import { formatCompactInt } from '@/lib/usage/format-compact-int';
import { cn } from '@/lib/utils';

type CategoryTone = 'blue' | 'purple' | 'green' | 'orange';

const toneIconWrap: Record<CategoryTone, string> = {
	blue: 'bg-brand-300/15 text-brand-300',
	purple: 'bg-violet-500/15 text-violet-600 dark:text-violet-400',
	green: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
	orange: 'bg-orange-500/15 text-orange-600 dark:text-orange-400',
};

type CategoryCardProps = {
	title: string;
	icon: LucideIcon;
	tone: CategoryTone;
	metrics: readonly [
		{ label: string; value: string },
		{ label: string; value: string },
		{ label: string; value: string },
	];
	footer: string;
};

function UsageCategoryCard({
	title,
	icon: Icon,
	tone,
	metrics,
	footer,
}: CategoryCardProps) {
	return (
		<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
			<CardContent className="space-y-4">
				<div className="flex items-center gap-3">
					<div
						className={cn(
							'flex size-10 shrink-0 items-center justify-center rounded-lg',
							toneIconWrap[tone],
						)}
					>
						<Icon className="size-5" aria-hidden />
					</div>
					<Typography
						variant="small"
						className="text-text-primary font-semibold"
					>
						{title}
					</Typography>
				</div>
				<div className="grid grid-cols-3 gap-2 text-left sm:gap-3">
					{metrics.map((m) => (
						<div key={m.label} className="min-w-0 space-y-1">
							<Typography
								variant="extraSmall"
								className="text-text-tertiary font-medium"
							>
								{m.label}
							</Typography>
							<Typography
								variant="base"
								className="text-text-primary font-semibold tabular-nums sm:text-xl"
							>
								{m.value}
							</Typography>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter className="border-border-secondary border-t">
				<div className="flex gap-2 text-xs text-text-secondary">
					<Info
						className="mt-0.5 size-3.5 shrink-0 text-text-tertiary"
						aria-hidden
					/>
					<Typography
						variant="extraSmall"
						className="text-text-tertiary font-normal"
					>
						{footer}
					</Typography>
				</div>
			</CardFooter>
		</Card>
	);
}

const CATEGORY_ITEMS: CategoryCardProps[] = [
	{
		title: 'Learning Growth',
		icon: GraduationCap,
		tone: 'blue',
		metrics: [
			{ label: 'Active Learners', value: '285' },
			{ label: 'New This Month', value: '42' },
			{ label: 'Course Completion', value: '74%' },
		],
		footer:
			'Learner activation is pacing ahead of last month—consider adding cohort targets.',
	},
	{
		title: 'Content & Delivery',
		icon: BookOpen,
		tone: 'purple',
		metrics: [
			{ label: 'Courses Live', value: '12' },
			{ label: 'Lessons Published', value: formatCompactInt(348) },
			{ label: 'Storage Used', value: '12 GB' },
		],
		footer:
			'Publishing volume is healthy; archive old drafts to keep storage predictable.',
	},
	{
		title: 'Live Sessions',
		icon: Video,
		tone: 'green',
		metrics: [
			{ label: 'Sessions Held', value: '14' },
			{ label: 'Hours Delivered', value: '18 hrs' },
			{ label: 'Avg. Attendance', value: '23' },
		],
		footer:
			'Live hours are within plan; schedule recurring rooms to stabilize attendance.',
	},
	{
		title: 'Assessments & Engagement',
		icon: ClipboardCheck,
		tone: 'orange',
		metrics: [
			{ label: 'Quizzes Live', value: '28' },
			{ label: 'Attempts (MTD)', value: formatCompactInt(1240) },
			{ label: 'Avg. Score', value: '78%' },
		],
		footer:
			'Engagement on assessments is strong—add adaptive paths for low performers.',
	},
];

export function UsageBreakdownCategorySection() {
	return (
		<section className="space-y-4">
			<div className="flex flex-col gap-1">
				<Typography variant="small" className="font-semibold text-text-primary">
					Categorized Usage
				</Typography>
				<Typography variant="small" className="text-text-secondary font-normal">
					How usage splits across learning, content, live delivery, and
					assessments.
				</Typography>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{CATEGORY_ITEMS.map((item) => (
					<UsageCategoryCard key={item.title} {...item} />
				))}
			</div>
		</section>
	);
}
