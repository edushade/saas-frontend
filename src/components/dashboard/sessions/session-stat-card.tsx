import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui-custom/typography';

export type SessionStatCardProps = {
	label: string;
	value: string;
	subLabel: string;
};

/**
 * Compact metric card for the Sessions summary row (label, value, footnote).
 */
export function SessionStatCard({ label, value, subLabel }: SessionStatCardProps) {
	return (
		<Card className="rounded-xl border-border-secondary bg-bg-primary shadow-sm">
			<CardContent className="space-y-1">
				<Typography
					variant="small"
					className="text-text-secondary text-sm font-semibold"
				>
					{label}
				</Typography>
				<Typography
					variant="h3"
					className="text-text-primary font-semibold tracking-tight"
				>
					{value}
				</Typography>
				<Typography variant="small" className="text-text-tertiary text-xs">
					{subLabel}
				</Typography>
			</CardContent>
		</Card>
	);
}
