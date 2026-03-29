import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui-custom/typography';

export function UsageBreakdownCtaBanner() {
	return (
		<Card className="rounded-2xl bg-[linear-gradient(90deg,#4F46E5_0%,#4E4BE6_7.14%,#4D50E8_14.29%,#4C54E9_21.43%,#4B59EA_28.57%,#4A5DEB_35.71%,#4962EC_42.86%,#4866EE_50%,#476AEF_57.14%,#456EF0_64.29%,#4372F1_71.43%,#4276F2_78.57%,#407AF4_85.71%,#3D7EF5_92.86%,#3B82F6_100%)]">
			<CardContent className=" flex flex-col gap-2  text-text-on-brand sm:flex-row sm:items-center sm:justify-between">
				<div className="max-w-xl space-y-2">
					<Typography
						variant="base"
						className="text-text-on-brand font-semibold tracking-tight sm:text-xl"
					>
						Your academy is growing steadily
					</Typography>
					<Typography
						variant="small"
						className="text-text-on-brand font-normal"
					>
						Unlock higher limits, priority support, and advanced analytics when
						you&apos;re ready to scale.
					</Typography>
				</div>
				<Button
					type="button"
					variant="secondary"
					className="shrink-0 gap-2 bg-bg-primary text-text-primary hover:bg-bg-secondary"
					asChild
				>
					<Link to="/dashboard/plans">
						Explore Upgrade Options
						<ArrowUpRight className="size-4" aria-hidden />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
