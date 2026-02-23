import { cn } from "@/lib/utils";

export interface CardShadeOverlayProps {
	className?: string;
}

export function CardShadeOverlay({ className }: CardShadeOverlayProps) {
	return (
		<div
			aria-hidden
			className={cn("pointer-events-none absolute inset-0 z-[1]", className)}
		/>
	);
}
