import { Link } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import type { ElementType } from 'react';
import * as React from 'react';
import { Input } from '@/components/ui/input';
import {
	FEATURE_GROUP_DESCRIPTIONS,
	type FeatureNavGroupTitle,
} from '@/constants/feature-nav';
import { FEATURES_GROUPS } from '@/constants/nav';
import { cn } from '@/lib/utils';
import { Typography } from '../ui-custom/typography';

export function FeaturesListSections() {
	const [query, setQuery] = React.useState('');
	const q = query.trim().toLowerCase();

	const filteredGroups = FEATURES_GROUPS.map((group) => ({
		...group,
		items: q
			? group.items.filter(
					(item) =>
						item.label.toLowerCase().includes(q) ||
						item.description.toLowerCase().includes(q),
				)
			: group.items,
	})).filter((group) => group.items.length > 0);

	return (
		<div>
			{/* ── Search bar — full-width bg-bg-primary, content constrained ── */}
			<div className="sticky top-(--es-nav-h) z-10 w-full bg-bg-primary">
				<div className="mx-auto max-w-(--es-max-w) px-4 md:px-8 xl:px-(--es-section-px) py-5">
					<div className="relative max-w-lg mx-auto">
						<Search
							className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-tertiary pointer-events-none"
							aria-hidden="true"
						/>
						<Input
							type="search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search features…"
							className="pl-9 h-11 rounded-xl border-border-secondary text-sm placeholder:text-text-quaternary"
							aria-label="Search features"
						/>
					</div>
				</div>
			</div>

			{/* ── Category sections — alternating full-width backgrounds ── */}
			{filteredGroups.length > 0 ? (
				filteredGroups.map((group, index) => (
					<section
						key={group.title}
						className={cn(
							'px-4 md:px-8 xl:px-(--es-section-px) py-12 md:py-16 lg:py-(--es-section-py)',
							index % 2 === 0 ? 'bg-bg-primary' : 'bg-bg-secondary',
						)}
					>
						<div className="mx-auto max-w-(--es-max-w) ">
							<div className="mb-8 max-w-[861px]">
								<Typography
									variant="h4"
									className="font-medium text-text-primary"
								>
									{group.title}
								</Typography>
								{!q && group.title in FEATURE_GROUP_DESCRIPTIONS && (
									<p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
										{
											FEATURE_GROUP_DESCRIPTIONS[
												group.title as FeatureNavGroupTitle
											]
										}
									</p>
								)}
							</div>

							<div className="grid gap-6 sm:grid-cols-2">
								{group.items.map((item) => (
									<FeatureListCard
										key={item.slug}
										label={item.label}
										description={item.description}
										icon={item.icon}
										href={item.href}
									/>
								))}
							</div>
						</div>
					</section>
				))
			) : (
				<div className="bg-bg-primary">
					<div className="mx-auto max-w-(--es-max-w) px-4 md:px-8 xl:px-(--es-section-px) flex flex-col items-center gap-3 py-24 text-center">
						<Search className="size-8 text-text-quaternary" aria-hidden />
						<p className="text-base font-medium text-text-primary">
							No features found for &ldquo;{query}&rdquo;
						</p>
						<p className="text-sm text-text-tertiary">
							Try a different keyword.
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

interface FeatureListCardProps {
	label: string;
	description: string;
	icon: ElementType;
	href: string;
}

function FeatureListCard({
	label,
	description,
	icon: Icon,
	href,
}: FeatureListCardProps) {
	return (
		<article className="flex flex-col gap-4 rounded-2xl border border-border-secondary bg-white p-6 shadow-xs transition-shadow hover:shadow-sm">
			<div className="flex items-start gap-4">
				<div className="bg-bg-tertiary rounded-md p-0.5 hover:bg-bg-secondary">
					<div className="flex p-1 shrink-0 items-center justify-center rounded-md bg-bg-primary hover:bg-bg-secondary">
						<Icon className="text-brand-200 size-7 hover:text-brand-300" />
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<Typography
						variant="h5"
						className="font-medium leading-snug text-text-primary"
					>
						{label}
					</Typography>
					<Typography
						variant="small"
						className="leading-relaxed text-text-secondary"
					>
						{description}
					</Typography>

					<Link
						to={href}
						className="inline-flex items-center gap-1 text-lg font-medium text-brand-200 hover:underline"
						aria-label={`Learn more about ${label}`}
					>
						Learn More
						<span aria-hidden="true">→</span>
					</Link>
				</div>
			</div>
		</article>
	);
}
