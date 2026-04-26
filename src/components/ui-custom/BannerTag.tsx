import { cn } from '@/lib/utils';

export function BannerTag({
	tag,
	className,
}: {
	tag: string;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'bg-white rounded-full shadow-card-fancy flex items-center justify-center p-0.5',
				className,
			)}
		>
			<span
				className={cn(
					'relative overflow-hidden text-dark-15 bg-border-tertiary border font-medium text-sm border-border-secondary rounded-full w-full h-full px-4 py-2',
				)}
			>
				{tag}
			</span>
		</div>
	);
}
