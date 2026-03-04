import { Typography } from '@/components/ui-custom/typography';

export function RouteLoadingView() {
	return (
		<div
			className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4 py-8 md:py-(--es-section-py)"
			aria-live="polite"
		>
			<div className="size-8 animate-spin rounded-full border-2 border-border-primary border-t-brand-300" />
			<Typography variant="small" className="text-text-secondary">
				Loading…
			</Typography>
		</div>
	);
}
