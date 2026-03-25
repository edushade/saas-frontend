import type * as React from 'react';
import { cn } from '@/lib/utils';

export type DashboardSettingsRowProps = {
	title: string;
	description: string;
	children: React.ReactNode;
	className?: string;
	titleHtmlFor?: string;
};

export function DashboardSettingsRow({
	title,
	description,
	children,
	className,
	titleHtmlFor,
}: DashboardSettingsRowProps) {
	return (
		<div
			className={cn(
				'grid grid-cols-1 gap-4 py-4 md:grid-cols-2 md:items-start md:gap-8',
				className,
			)}
		>
			<div className="space-y-1.5">
				{titleHtmlFor ? (
					<label
						htmlFor={titleHtmlFor}
						className="block text-sm font-semibold text-text-primary"
					>
						{title}
					</label>
				) : (
					<p className="text-sm font-semibold text-text-primary">{title}</p>
				)}
				<p className="text-sm text-text-secondary">{description}</p>
			</div>
			<div className="min-w-0">{children}</div>
		</div>
	);
}
