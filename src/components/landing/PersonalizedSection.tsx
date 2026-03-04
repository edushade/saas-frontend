import { useState } from 'react';

import { ROLES, type RoleId } from '@/constants/roles';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';
import { CardShadeOverlay } from '../ui-custom/card-shade-overlay';
import { Typography } from '../ui-custom/typography';

function RoleCard({
	role,
	isActive,
	onActivate,
}: {
	role: (typeof ROLES)[number];
	isActive: boolean;
	onActivate: () => void;
}) {
	const Icon = role.icon;
	return (
		<button
			type="button"
			className={cn(
				'w-full max-w-xl flex items-center gap-4 rounded-2xl px-5 py-4 text-left cursor-pointer',
				isActive ? 'role-card-active' : ' bg-bg-primary hover:bg-bg-secondary',
			)}
			onMouseEnter={onActivate}
			onClick={onActivate}
		>
			<div
				className={cn(
					'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
					isActive ? 'bg-brand-200' : 'bg-bg-tertiary',
				)}
			>
				<Icon
					className={isActive ? 'text-text-on-brand' : 'text-text-secondary'}
				/>
			</div>
			<div>
				<Typography
					variant="h5"
					className={cn('font-semibold leading-tight text-text-primary')}
				>
					{role.label}
				</Typography>
				<Typography
					variant="base"
					className="font-normal leading-relaxed text-text-secondary mt-0.5"
				>
					{role.description}
				</Typography>
			</div>
		</button>
	);
}

export default function PersonalizedSection() {
	const [activeRole, setActiveRole] = useState<RoleId>('student');

	return (
		<section className="bg-bg-primary py-(--es-section-py) px-4 md:px-8 xl:px-(--es-section-px)">
			<div className="mx-auto max-w-(--es-max-w) ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
					<div className="flex flex-col items-stretch gap-4">
						<Typography
							variant="h1"
							className="text-2xl md:text-[2rem] lg:text-[2.75rem] max-w-xl leading-snug font-medium text-text-primary mb-2"
						>
							Personalized Experiences for Everyone
						</Typography>
						<Typography
							variant="h6"
							className="font-normal leading-relaxed text-text-secondary mb-10"
						>
							Edushade offers tailored experiences for students, teachers, and
							admins, letting each user quickly access the tools and insights
							that matter most to them.
						</Typography>

						<div className="flex flex-col gap-3">
							{ROLES.map((role) => (
								<RoleCard
									key={role.id}
									role={role}
									isActive={activeRole === role.id}
									onActivate={() => setActiveRole(role.id)}
								/>
							))}
						</div>
					</div>

					<Card className="relative  h-full min-h-0 overflow-hidden border-border-tertiary p-0 shadow-none lg:block bg-grad-cyan-1">
						<CardShadeOverlay className="backdrop-blur-[100px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0)_0px,rgba(255,255,255,0.1)_47.15px,rgba(255,255,255,0.3)_85.33px)]" />
						<CardContent className="relative z-10 h-full min-h-0 p-0">
							<div className="h-full min-h-0 rounded-2xl  pt-8 pl-8 shadow-2xl ">
								{activeRole === 'student' && (
									<img
										src="/svgs/hero/banner.svg"
										alt="Dashboard"
										className="h-full w-full object-cover object-top rounded-2xl"
									/>
								)}
								{activeRole === 'teacher' && (
									<img
										src="/svgs/hero/banner.svg"
										alt="Dashboard"
										className="h-full w-full object-cover object-top"
									/>
								)}
								{activeRole === 'admin' && (
									<img
										src="/svgs/hero/banner.svg"
										alt="Dashboard"
										className="h-full w-full object-cover object-top"
									/>
								)}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
