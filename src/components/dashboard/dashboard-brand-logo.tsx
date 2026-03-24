import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function DashboardBrandLogo({ className }: { className?: string }) {
	return (
		<Link
			to="/"
			aria-label="Edushade home"
			className={cn("inline-flex items-center", className)}
		>
			<img
				src="/svgs/logo.svg"
				alt="Edushade"
				className="h-6 w-auto max-w-[140px] object-contain"
			/>
		</Link>
	);
}
