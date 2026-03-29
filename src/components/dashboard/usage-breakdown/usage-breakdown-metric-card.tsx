import { ArrowDown, ArrowUp } from 'lucide-react';
import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui-custom/typography';
import { cn } from '@/lib/utils';

export type TrendBadgeProps = {
	positive: boolean;
	children: ReactNode;
	className?: string;
};

export function UsageBreakdownTrendBadge({
	positive,
	children,
	className,
}: TrendBadgeProps) {
	return (
		<span
			className={cn(
				'inline-flex items-center gap-0.5 text-xs font-medium',
				positive
					? 'text-emerald-600 dark:text-emerald-400'
					: 'text-red-600 dark:text-red-400',
				className,
			)}
		>
			{positive ? (
				<ArrowUp className="size-3.5 shrink-0" aria-hidden />
			) : (
				<ArrowDown className="size-3.5 shrink-0" aria-hidden />
			)}
			{children}
		</span>
	);
}

export type UsageBreakdownMetricCardProps = {
	label: string;
	trend: ReactNode;
	value: string;
	footnote: string;
};

export function UsageBreakdownMetricCard({
	label,
	trend,
	value,
	footnote,
}: UsageBreakdownMetricCardProps) {
	return (
		<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
			<CardContent className="space-y-2">
				<div className="flex items-start justify-between gap-2">
					<Typography
						variant="small"
						className="text-text-secondary text-sm font-semibold"
					>
						{label}
					</Typography>
					<span className="text-success-600 font-normal">{trend}</span>
				</div>
				<div className="flex items-end gap-3">
					<Typography
						variant="h3"
						className="text-text-primary font-medium tracking-tight"
					>
						{value}
					</Typography>
					<Typography
						variant="small"
						className="text-text-secondary font-normal"
					>
						{footnote}
					</Typography>
				</div>
			</CardContent>
		</Card>
	);
}
