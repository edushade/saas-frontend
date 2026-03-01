import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardShadeOverlay } from "@/components/ui-custom/card-shade-overlay";
import { Typography } from "@/components/ui-custom/typography";
import { cn } from "@/lib/utils";

export function OnboardingShell({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"relative min-h-screen w-full overflow-hidden bg-bg-primary",
				className,
			)}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute bottom-0 z-0 h-[calc(100vh-var(--es-nav-h)-100px)] w-full rounded-full bg-grad-lightblue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
				<div className="w-full max-w-[480px] p-8  md:p-10 flex flex-col gap-8">
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
				<img src="/svgs/logo.svg" alt="" className="h-9 w-auto" />
			</Link>
			<Typography variant="h3" className="font-semibold text-text-primary">
				{title}
			</Typography>
			<p className="text-sm text-text-secondary max-w-[400px]">{description}</p>
		</div>
	);
}

export function OnboardingNav({
	onBack,
	nextLabel = "Next",
	nextHref,
	nextDisabled,
}: {
	onBack?: () => void;
	nextLabel?: string;
	nextHref?: string;
	nextDisabled?: boolean;
}) {
	return (
		<div className="flex items-center justify-between gap-4 pt-2">
			{onBack ? (
				<Button type="button" variant="outline" onClick={onBack}>
					Back
				</Button>
			) : (
				<div />
			)}
			{nextHref ? (
				<Button asChild className="btn-brand-1 gap-1.5 rounded-lg px-6">
					<Link to={nextHref}>
						{nextLabel}
						<ArrowRight className="size-4" />
					</Link>
				</Button>
			) : (
				<Button
					type="submit"
					className="btn-brand-1 gap-1.5 rounded-lg px-6"
					disabled={nextDisabled}
				>
					{nextLabel}
					<ArrowRight className="size-4" />
				</Button>
			)}
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
			<span className="text-sm font-medium text-text-primary">{label}</span>
			{children}
			{helper && <p className="text-xs text-text-tertiary">{helper}</p>}
			{error && <p className="text-xs text-destructive">{error}</p>}
		</div>
	);
}

export { Input };
