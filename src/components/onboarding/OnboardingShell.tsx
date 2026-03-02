import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardShadeOverlay } from "@/components/ui-custom/card-shade-overlay";
import { Typography } from "@/components/ui-custom/typography";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

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
				className="pointer-events-none absolute bottom-0 z-0 h-[calc(100vh-var(--es-nav-h)-100px)] w-full rounded-full bg-grad-white-to-blue"
			/>
			<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />

			<div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
				<div className="w-full max-w-[480px] p-4  flex flex-col gap-8">
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
			type="submit"
			className="btn-brand-1 gap-1.5 w-full rounded-lg px-6 hover:bg-brand-200 hover:text-white	text-sm font-medium"
			disabled={nextDisabled}
		>
			{nextLabel}
			<ArrowRight className="size-4" />
		</Button>
	);

	if (!onBack) {
		return <div className="pt-2">{nextButton}</div>;
	}

	return (
		<div className="flex items-center justify-between gap-4 pt-2">
			<Button
				type="button"
				variant="outline"
				className="bg-bg-primary text-sm font-medium  rounded-lg border border-border-secondary"
				onClick={onBack}
			>
				Back
			</Button>
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
			<Label className="text-sm font-medium text-text-primary">{label}</Label>
			{children}
			{helper && <p className="text-xs text-text-tertiary">{helper}</p>}
			{error && <p className="text-xs text-destructive">{error}</p>}
		</div>
	);
}

export { Input };
