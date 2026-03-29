import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Typography } from '@/components/ui-custom/typography';
import { clampPercent } from '@/lib/usage/clamp-percent';

export type UsageBreakdownLimitRowProps = {
	label: string;
	current: number;
	capacity: number;
	percent: number;
	footer: string;
};

export function UsageBreakdownLimitRow({
	label,
	current,
	capacity,
	percent,
	footer,
}: UsageBreakdownLimitRowProps) {
	const p = clampPercent(percent);
	return (
		<div className="space-y-2">
			<div className="flex flex-wrap items-center justify-between gap-2">
				<Typography variant="small" className="text-text-primary  font-medium">
					{label}
				</Typography>
				<div className="flex items-center gap-2">
					<Typography
						variant="small"
						className="text-text-secondary font-normal"
					>
						<span className="text-text-primary font-semibold">{current} </span>
						<span className="text-text-secondary font-normal">
							/ {capacity}
						</span>
					</Typography>
					<Badge className="rounded-full bg-brand-300/15  text-xs font-medium text-brand-300">
						{p}%
					</Badge>
				</div>
			</div>
			<Progress
				value={p}
				className="bg-bg-tertiary h-2.5 **:data-[slot=progress-indicator]:bg-brand-300"
				aria-label={`${label} usage ${p} percent`}
			/>
			<Typography
				variant="extraSmall"
				className="text-text-tertiary font-normal"
			>
				{footer}
			</Typography>
		</div>
	);
}
