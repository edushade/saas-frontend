import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui-custom/typography';

export function NotFoundView() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-8 md:py-(--es-section-py)">
			<Typography variant="h1" className="text-text-primary">
				404
			</Typography>
			<Typography variant="h5" className="text-center text-text-secondary">
				This page doesn&apos;t exist or has been moved.
			</Typography>
			<Button asChild>
				<Link to="/">Go home</Link>
			</Button>
		</div>
	);
}
