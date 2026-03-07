import type { ErrorComponentProps } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui-custom/typography';

export function RouteErrorView({ error, reset }: ErrorComponentProps) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-8 md:py-(--es-section-py)">
			<Typography variant="h1" className="text-text-primary">
				Something went wrong
			</Typography>
			<Typography
				variant="base"
				className="max-w-md text-center text-text-secondary"
			>
				{error?.message ?? 'An unexpected error occurred.'}
			</Typography>
			<Button onClick={reset}>Try again</Button>
		</div>
	);
}
