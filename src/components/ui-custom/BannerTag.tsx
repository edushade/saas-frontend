import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function BannerTag({
	tag,
	className,
}: {
	tag: string;
	className?: string;
}) {
	return (
		<Badge
			variant="secondary"
			className={cn(
				"text-dark-15 bg-border-tertiary border shadow-card-fancy font-medium text-sm border-border-secondary rounded-full px-4 py-2",
				className,
			)}
		>
			{tag}
		</Badge>
	);
}
