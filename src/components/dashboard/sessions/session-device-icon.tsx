import { Laptop, Monitor, Smartphone, Tablet } from 'lucide-react';
import type { ComponentType } from 'react';
import type { SessionDeviceType } from '@/data/demo-sessions';
import { cn } from '@/lib/utils';

const ICONS: Record<
	SessionDeviceType,
	ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
> = {
	laptop: Laptop,
	phone: Smartphone,
	tablet: Tablet,
	desktop: Monitor,
};

export type SessionDeviceIconProps = {
	deviceType: SessionDeviceType;
	className?: string;
	/** When true, uses a light blue tile (current session). */
	highlight?: boolean;
};

/**
 * Rounded tile with a device glyph for session rows.
 */
export function SessionDeviceIcon({
	deviceType,
	className,
	highlight = false,
}: SessionDeviceIconProps) {
	const Icon = ICONS[deviceType];
	return (
		<div
			className={cn(
				'flex size-11 shrink-0 items-center justify-center rounded-lg',
				highlight
					? 'bg-brand-300/15 text-brand-300'
					: 'bg-bg-tertiary text-text-tertiary',
				className,
			)}
		>
			<Icon className="size-5" aria-hidden />
		</div>
	);
}
