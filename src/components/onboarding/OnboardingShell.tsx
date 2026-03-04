import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardShadeOverlay } from '@/components/ui-custom/card-shade-overlay';
import { Typography } from '@/components/ui-custom/typography';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';

export function OnboardingShell({
	children,
	className,
	wide,
}: {
	children: React.ReactNode;
	className?: string;
	wide?: boolean;
}) {
	return (
		<div
			className={cn(
				'relative min-h-screen w-full overflow-hidden bg-bg-primary',
				className,
			)}
		>
			{!wide && (
				<div
					aria-hidden
					className="pointer-events-none absolute bottom-0 z-0 h-[calc(100vh-var(--es-nav-h)-100px)] w-full rounded-full bg-grad-white-to-blue"
				/>
			)}
			{!wide && (
				<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
			)}

			<div
				className={cn(
					'relative z-10 flex min-h-screen',
					wide ? 'p-4 md:p-0  md:pl-6 md:pr-0' : 'p-4 md:p-6',
					wide ? 'items-stretch justify-start' : 'items-center justify-center',
				)}
			>
				<div
					className={cn(
						'w-full flex flex-col gap-8',
						!wide && 'max-w-[480px] p-4',
						wide && 'max-w-none flex-1 min-h-0',
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export function OnboardingHeader({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="flex flex-col items-start  gap-2">
			<Link to="/" className="inline-block" aria-label="Edushade home">
				<img src="/svgs/logo-image.svg" alt="" className="h-12 w-full" />
			</Link>
			<Typography variant="h4" className="font-medium text-text-primary">
				{title}
			</Typography>
			<Typography variant="small" className="text-text-secondary">
				{description}
			</Typography>
		</div>
	);
}

export function OnboardingNav({
	// onBack, — reserved for future use
	nextLabel = 'Next',
	nextHref,
	nextDisabled,
	onNextClick,
}: {
	// onBack?: () => void;
	nextLabel?: string;
	nextHref?: string;
	nextDisabled?: boolean;
	onNextClick?: () => void;
}) {
	const nextButton = nextHref ? (
		<Button
			asChild
			className="btn-brand-1 gap-1.5 rounded-lg px-6 hover:bg-brand-200 text-sm font-medium"
		>
			<Link to={nextHref}>
				{nextLabel}
				<ArrowRight className="size-4" />
			</Link>
		</Button>
	) : (
		<Button
			type={onNextClick ? 'button' : 'submit'}
			className="btn-brand-1 gap-1.5 h-9 rounded-lg px-6 hover:bg-brand-200 hover:text-white text-sm font-medium"
			disabled={nextDisabled}
			onClick={onNextClick}
		>
			{nextLabel}
			<ArrowRight className="size-4" />
		</Button>
	);

	return (
		<div className="flex items-center justify-between gap-4 pt-2">
			{/* Back button — UI ready, implement onClick when needed
			<Button
				type="button"
				variant="outline"
				className="bg-bg-primary text-sm font-medium rounded-lg border border-border-secondary"
				// onClick={onBack}
			>
				Back
			</Button>
			*/}
			{nextButton}
		</div>
	);
}

export function OnboardingField({
	label,
	children,
	helper,
	error,
}: {
	label: string;
	children: React.ReactNode;
	helper?: string;
	error?: string;
}) {
	return (
		<div className="flex flex-col gap-1.5">
			<Label className="text-xs md:text-sm font-medium text-text-primary">
				{label}
			</Label>
			{children}
			{helper && (
				<p className="text-xs md:text-sm text-text-tertiary">{helper}</p>
			)}
			{error && <p className="text-xs md:text-sm text-destructive">{error}</p>}
		</div>
	);
}

export { Input };
