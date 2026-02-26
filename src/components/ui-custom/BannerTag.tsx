import { Badge } from "../ui/badge";

export function BannerTag({ tag }: { tag: string }) {
	return (
		<Badge
			variant="secondary"
			className="text-[#262626] bg-bg-tertiary border shadow-card-fancy border-border-secondary rounded-full px-3 py-2"
		>
			{tag}
		</Badge>
	);
}
