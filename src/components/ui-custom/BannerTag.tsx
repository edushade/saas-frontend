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
				"text-[#262626] bg-bg-tertiary border shadow-card-fancy border-border-secondary rounded-full px-3 py-2",
				className,
			)}
		>
			{tag}
		</Badge>
	);
}
