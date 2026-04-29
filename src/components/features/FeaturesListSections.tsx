import { Link } from '@tanstack/react-router';
import type { ElementType } from 'react';
import {
	FEATURE_GROUP_DESCRIPTIONS,
	type FeatureNavGroupTitle,
} from '@/constants/feature-nav';
import { FEATURES_GROUPS } from '@/constants/nav';
import { cn } from '@/lib/utils';
import { Typography } from '../ui-custom/typography';

export function FeaturesListSections() {
	return (
		<div>
			{FEATURES_GROUPS.map((group, index) => (
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
							{group.title in FEATURE_GROUP_DESCRIPTIONS && (
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
									comingSoon={item.comingSoon}
								/>
							))}
						</div>
					</div>
				</section>
			))}
		</div>
	);
}

interface FeatureListCardProps {
	label: string;
	description: string;
	icon: ElementType;
	href: string;
	comingSoon?: boolean;
}

function FeatureListCard({
	label,
	description,
	icon: Icon,
	href,
	comingSoon,
}: FeatureListCardProps) {
	return (
		<article className="flex flex-col gap-4 rounded-2xl border border-border-secondary bg-white p-6 shadow-xs transition-shadow hover:shadow-sm">
			<div className="flex items-start gap-4">
				<div className="bg-bg-tertiary rounded-md p-0.5 hover:bg-bg-secondary">
					<div className="relative flex p-1 shrink-0 items-center justify-center rounded-md bg-bg-primary hover:bg-bg-secondary bg-[url('/svgs/small-grid.svg')] bg-center bg-no-repeat bg-contain">
						<Icon className="relative z-10 text-brand-200 size-7 hover:text-brand-300" />
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
						onClick={(e) => {
							if (comingSoon) e.preventDefault();
						}}
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
