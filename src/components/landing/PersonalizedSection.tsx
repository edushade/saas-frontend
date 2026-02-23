import { useState } from "react";

import { ROLES, type RoleId } from "@/constants/roles";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui-custom/typography";

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
				"w-full flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 cursor-pointer",
				isActive
					? "role-card-active"
					: "border-transparent bg-bg-primary hover:bg-bg-secondary",
			)}
			onMouseEnter={onActivate}
			onClick={onActivate}
		>
			<div
				className={cn(
					"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200",
					isActive ? "bg-brand-200" : "bg-bg-tertiary",
				)}
			>
				<Icon size={20} className={isActive ? "text-white" : "text-gray-400"} />
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
		<section className="bg-bg-primary py-20">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-stretch">
					<div className="flex flex-col items-stretch gap-4">
						<Typography
							variant="h1"
							className="font-medium leading-snug  text-text-primary mb-2"
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

					<Card className="hidden h-full min-h-0 lg:block p-0 shadow-none border-border-tertiary">
						<CardContent className="h-full min-h-0 p-0">
							<div className="h-full min-h-0 rounded-2xl border border-(--es-border-1) bg-linear-to-br from-blue-50 via-sky-50 to-indigo-50 pt-5 pl-5 shadow-2xl shadow-blue-100">
								{activeRole === "student" && (
									<img
										src="/svgs/hero/banner.svg"
										alt="Dashboard"
										className="h-full w-full object-cover object-top"
									/>
								)}
								{activeRole === "teacher" && (
									<img
										src="/svgs/hero/banner.svg"
										alt="Dashboard"
										className="h-full w-full object-cover object-top"
									/>
								)}
								{activeRole === "admin" && (
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
