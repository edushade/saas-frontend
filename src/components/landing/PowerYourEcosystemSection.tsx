import { AccessIcon } from '@/assets/icons/access-icon';
import { AnalyzIcon } from '@/assets/icons/analyz-icon';
import { BuildIcon } from '@/assets/icons/build-icon';
import { ExpandIcon } from '@/assets/icons/expand-icon';
import { StructureIcon } from '@/assets/icons/structure-icon';
import { TeachIcon } from '@/assets/icons/teach-icon';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui-custom/typography';
import { cn } from '@/lib/utils';

const ECOSYSTEM_FEATURES = [
	{
		label: 'Build',
		icon: BuildIcon,
	},
	{
		label: 'Structure',
		icon: StructureIcon,
	},
	{
		label: 'Teach',
		icon: TeachIcon,
	},
	{
		label: 'Assess',
		icon: AccessIcon,
	},
	{
		label: 'Analyze',
		icon: AnalyzIcon,
	},
	{
		label: 'Expand',
		icon: ExpandIcon,
	},
	// {
	// 	label: 'Scale',
	// 	icon: ExpandIcon,
	// },
	// {
	// 	label: 'Grow',
	// 	icon: ExpandIcon,
	// },
] as const;

function EcosystemFeatureCard({
	label,
	icon: Icon,
}: {
	label: string;
	icon: React.ComponentType<{ className?: string }>;
}) {
	return (
		<div className="flex flex-col items-center gap-4 w-full max-w-[200px] mx-auto">
			{/* Card: icon only */}
			<Card
				className={cn(
					'relative flex items-center justify-center overflow-hidden max-w-[136px] max-h-[136px]',
					'rounded-2xl md:rounded-3xl border border-border-secondary bg-bg-primary p-6 shadow-sm',
					'aspect-square w-full shadow-[0px_10px_18px_-2px_#0A090B12]',
				)}
			>
				<div className="absolute inset-0">
					<img
						src="/svgs/small-grid.svg"
						alt={label}
						className="w-full h-full object-cover"
					/>
				</div>

				<CardContent className="relative z-10 flex items-center justify-center p-0  h-[72px] w-[72px]">
					<Icon className="size-full" />
				</CardContent>
			</Card>
			{/* title */}
			<Typography
				variant="h5"
				className="font-medium text-text-primary text-center"
			>
				{label}
			</Typography>
		</div>
	);
}

export default function PowerYourEcosystemSection() {
	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) flex flex-col gap-6">
				<div className="flex flex-col gap-4 md:gap-6">
					<Typography
						variant="h1"
						className="text-2xl md:text-[2rem] lg:text-[44px] leading-tight font-medium text-text-primary"
					>
						Power Your Entire Learning Ecosystem
					</Typography>
					<Typography
						variant="h6"
						className="font-normal leading-relaxed text-text-secondary "
					>
						Edushade brings course creation, live delivery, learner engagement,
						assessments, analytics, and user management into one connected
						system.
					</Typography>
				</div>

				<Card className="mt-8 overflow-hidden border-none shadow-none rounded-3xl md:rounded-[1.75rem] bg-bg-secondary lg:py-10 lg:px-8">
					<CardContent className="p-0 ">
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 place-items-center">
							{ECOSYSTEM_FEATURES.map((feature) => (
								<EcosystemFeatureCard
									key={feature.label}
									label={feature.label}
									icon={feature.icon}
								/>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
