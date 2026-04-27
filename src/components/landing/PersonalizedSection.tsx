import { useState } from "react";
import { ROLES, type RoleId } from "@/lib/role";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { CardShadeOverlay } from "../ui-custom/card-shade-overlay";
import { Typography } from "../ui-custom/typography";

const ROLE_PANELS: Record<RoleId, { src: string; alt: string }> = {
	student: {
		src: "/svgs/hero/learner_panel.png",
		alt: "Learner dashboard",
	},
	teacher: {
		src: "/svgs/hero/curriculumn_items.png",
		alt: "Teacher dashboard",
	},
	admin: {
		src: "/svgs/hero/admin_all_courses.png",
		alt: "Admin dashboard",
	},
};

const ROLE_IDS: RoleId[] = ["student", "teacher", "admin"];

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
				"w-full max-w-xl flex items-center gap-4 rounded-2xl px-5 py-4 text-left cursor-pointer",
				isActive ? "role-card-active" : " bg-bg-primary hover:bg-bg-secondary",
			)}
			onClick={onActivate}
		>
			<div
				className={cn(
					"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
					isActive ? "bg-brand-200" : "bg-bg-tertiary",
				)}
			>
				<Icon
					className={isActive ? "text-text-on-brand" : "text-text-secondary"}
				/>
			</div>
			<div>
				<Typography
					variant="h5"
					className={cn("font-semibold leading-tight text-text-primary")}
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
	const [activeRole, setActiveRole] = useState<RoleId>("student");

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

					<Card className="relative overflow-hidden rounded-2xl border-none bg-bg-tertiary p-0">
						<CardShadeOverlay className="backdrop-blur-[80px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.2)_100%)]" />
						<CardContent className="relative z-10 p-0">
							<div className="relative w-full h-full overflow-hidden">
								{ROLE_IDS.map((id) => {
									const isActive = id === activeRole;
									const { src, alt } = ROLE_PANELS[id];
									return (
										<img
											key={id}
											src={src}
											alt={alt}
											aria-hidden={!isActive}
											className={cn(
												"h-full w-full object-contain object-center transition-opacity duration-500 ease-out",
												isActive
													? "relative opacity-100"
													: "absolute inset-0 pointer-events-none opacity-0",
											)}
										/>
									);
								})}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
