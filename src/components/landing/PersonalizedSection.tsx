import {
	ArrowUpDown,
	BookOpen,
	Check,
	Flame,
	Play,
	Search,
	SlidersHorizontal,
	TrendingUp,
	Users,
	X,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

import { ROLES, type RoleId } from "@/constants/roles";
import { cn } from "@/lib/utils";

/* ─── Mockup data (visual only) ──────────────────────────────────── */

const LEARNERS = [
	{
		initials: "CW",
		name: "Cameron Williamson",
		tags: ["UI Design", "Design"],
		color: "bg-violet-400",
		selected: false,
	},
	{
		initials: "GH",
		name: "Guy Hawkins",
		tags: ["UI Research", "Design"],
		color: "bg-emerald-400",
		selected: true,
	},
	{
		initials: "AB",
		name: "Annette Block",
		tags: ["UI Design", "Design"],
		color: "bg-amber-400",
		selected: false,
	},
	{
		initials: "LA",
		name: "Leslie Alexander",
		tags: ["UX Research", "Design"],
		color: "bg-sky-400",
		selected: true,
	},
	{
		initials: "DR",
		name: "Dan Russell",
		tags: ["Motion Design", "Animation"],
		color: "bg-teal-400",
		selected: false,
	},
	{
		initials: "KW",
		name: "Kristin Watson",
		tags: ["UI Design", "Design"],
		color: "bg-pink-400",
		selected: true,
	},
	{
		initials: "KM",
		name: "Kathryn Murphy",
		tags: ["Marketing", "HR"],
		color: "bg-orange-400",
		selected: false,
	},
	{
		initials: "EP",
		name: "Eleanor Pena",
		tags: ["UX Research", "Design"],
		color: "bg-indigo-400",
		selected: false,
	},
	{
		initials: "RE",
		name: "Ralph Edwards",
		tags: ["Motion Design", "Animation"],
		color: "bg-rose-400",
		selected: false,
	},
];

const STUDENT_LESSONS = [
	{ title: "Introduction to Design Systems", done: true },
	{ title: "Color Theory & Typography", done: true },
	{ title: "Component Architecture", done: false },
	{ title: "Accessibility Guidelines", done: false },
];

const ADMIN_ROWS = [
	{ name: "Sarah Chen", course: "UI/UX Fundamentals", status: "Active" },
	{ name: "Marcus Lee", course: "React Development", status: "Active" },
	{ name: "Priya Sharma", course: "Data Analytics", status: "Pending" },
	{ name: "Tom Walker", course: "Brand Design", status: "Active" },
	{ name: "Nina Patel", course: "Motion Design", status: "Inactive" },
];

/* ─── Teacher mockup (matches screenshot) ──────────────────────────── */
function TeacherMockup() {
	return (
		<div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden border border-(--es-border-1)">
			{/* Left teal strip */}
			<div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-teal-300 via-cyan-400 to-blue-400" />

			<div className="ml-2.5">
				{/* Modal header */}
				<div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50">
					<div className="flex items-center gap-2">
						<X size={12} className="text-gray-400" />
						<span className="text-xs font-semibold text-gray-700">
							Create Learning Path
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<span className="text-[10px] text-gray-400">Step 3 :</span>
						<span className="text-[10px] font-medium text-indigo-500 flex items-center gap-0.5">
							<Users size={8} /> Assign Learners
						</span>
						<div className="w-2.5 h-2.5 rounded-full border-2 border-indigo-400 bg-indigo-100" />
					</div>
				</div>

				{/* Body */}
				<div className="px-4 py-3">
					<p className="text-sm font-bold text-gray-800 leading-tight">
						Select learners
					</p>
					<p className="text-[10px] text-gray-400 mb-3">
						Enroll the learner in your path.
					</p>

					{/* Controls */}
					<div className="flex flex-wrap items-center justify-between gap-y-1.5 mb-3">
						<div className="flex items-center gap-2 text-[10px] text-gray-500">
							<span className="font-medium">Learners 120</span>
							<div className="flex items-center gap-1 border border-gray-200 rounded px-2 py-0.5 bg-white">
								<Search size={8} className="text-gray-300" />
								<span className="text-gray-300">Search learners...</span>
							</div>
						</div>
						<div className="flex items-center gap-2 text-[10px]">
							<button
								type="button"
								className="flex items-center gap-0.5 text-gray-500"
							>
								<SlidersHorizontal size={8} /> Add Filter
							</button>
							<button
								type="button"
								className="flex items-center gap-0.5 text-gray-500"
							>
								<ArrowUpDown size={8} /> Sort
							</button>
							<span className="text-indigo-500 font-medium">Enroll All</span>
							<div className="flex items-center gap-1">
								<span className="text-gray-500">Auto Assign</span>
								<div className="w-7 h-3.5 bg-teal-400 rounded-full flex items-center px-0.5">
									<div className="w-2.5 h-2.5 bg-white rounded-full ml-auto shadow-sm" />
								</div>
							</div>
						</div>
					</div>

					{/* Learner grid 3×3 */}
					<div className="grid grid-cols-3 gap-1.5">
						{LEARNERS.map((l) => (
							<div
								key={l.name}
								className={cn(
									"relative rounded-lg border p-2",
									l.selected
										? "border-indigo-200 bg-indigo-50/60"
										: "border-gray-100 bg-white",
								)}
							>
								{l.selected && (
									<div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center">
										<Check size={7} className="text-white" strokeWidth={3} />
									</div>
								)}
								<div
									className={cn(
										"w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white mb-1",
										l.color,
									)}
								>
									{l.initials}
								</div>
								<p className="text-[9px] font-semibold text-gray-700 leading-tight truncate">
									{l.name}
								</p>
								<div className="flex flex-wrap gap-0.5 mt-1">
									{l.tags.map((t) => (
										<span
											key={t}
											className="text-[7px] bg-gray-100 text-gray-500 px-1 py-0.5 rounded"
										>
											{t}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

/* ─── Student mockup ───────────────────────────────────────────────── */
function StudentMockup() {
	return (
		<div className="rounded-2xl bg-white shadow-2xl overflow-hidden border border-(--es-border-1)">
			{/* Blue gradient header */}
			<div className="bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-4 text-white">
				<div className="flex items-center justify-between mb-3">
					<div className="flex items-center gap-2.5">
						<div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center text-[10px] font-bold">
							JS
						</div>
						<div>
							<p className="text-[9px] text-blue-200 leading-none">
								Welcome back,
							</p>
							<p className="text-xs font-semibold leading-tight">
								Jordan Smith
							</p>
						</div>
					</div>
					<div className="flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-1">
						<Flame size={10} className="text-orange-300" />
						<span className="text-[10px] font-bold">14</span>
					</div>
				</div>

				{/* Active course */}
				<div className="bg-white/10 rounded-xl p-3">
					<p className="text-[9px] text-blue-200 mb-0.5">Current Course</p>
					<p className="text-xs font-semibold mb-2">UI/UX Fundamentals</p>
					<div className="w-full bg-white/20 rounded-full h-1.5">
						<div className="bg-white rounded-full h-1.5 w-[65%]" />
					</div>
					<div className="flex justify-between text-[9px] text-blue-200 mt-1">
						<span>12 / 18 lessons</span>
						<span>65%</span>
					</div>
				</div>
			</div>

			{/* Lessons */}
			<div className="px-4 pt-3 pb-2">
				<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
					Up Next
				</p>
				<div className="flex flex-col gap-1.5">
					{STUDENT_LESSONS.map((lesson) => (
						<div
							key={lesson.title}
							className={cn(
								"flex items-center gap-2.5 rounded-lg px-2.5 py-2 border text-[10px]",
								lesson.done
									? "border-gray-100 bg-gray-50/50 text-gray-400"
									: "border-blue-100 bg-blue-50/50 text-gray-700",
							)}
						>
							<div
								className={cn(
									"w-4 h-4 rounded-full flex items-center justify-center shrink-0",
									lesson.done ? "bg-emerald-100" : "bg-blue-500",
								)}
							>
								{lesson.done ? (
									<Check
										size={8}
										className="text-emerald-500"
										strokeWidth={3}
									/>
								) : (
									<Play size={7} className="text-white ml-px" fill="white" />
								)}
							</div>
							<span
								className={cn("leading-tight", lesson.done && "line-through")}
							>
								{lesson.title}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Stats footer */}
			<div className="border-t border-gray-100 px-4 py-3 grid grid-cols-3 gap-2 text-center">
				<div>
					<p className="text-sm font-bold text-orange-500">14</p>
					<p className="text-[9px] text-gray-400">Day Streak</p>
				</div>
				<div>
					<p className="text-sm font-bold text-indigo-600">2,450</p>
					<p className="text-[9px] text-gray-400">XP Earned</p>
				</div>
				<div>
					<p className="text-sm font-bold text-emerald-600">3</p>
					<p className="text-[9px] text-gray-400">Courses</p>
				</div>
			</div>
		</div>
	);
}

/* ─── Admin mockup ──────────────────────────────────────────────────── */
function AdminMockup() {
	return (
		<div className="rounded-2xl bg-white shadow-2xl overflow-hidden border border-(--es-border-1)">
			{/* Header */}
			<div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
				<div>
					<p className="text-xs font-bold text-gray-800">Platform Overview</p>
					<p className="text-[9px] text-gray-400">February 2026</p>
				</div>
				<span className="text-[10px] border border-gray-200 rounded-md px-2 py-1 text-gray-500">
					Last 30 days
				</span>
			</div>

			{/* Metrics */}
			<div className="grid grid-cols-3 gap-3 p-4">
				<div className="rounded-xl bg-blue-50 p-2.5">
					<div className="flex items-center justify-between mb-1.5">
						<Users size={12} className="text-blue-500" />
						<span className="text-[9px] text-emerald-500 font-semibold">
							↑ 18%
						</span>
					</div>
					<p className="text-base font-bold text-gray-800 leading-none">
						1,240
					</p>
					<p className="text-[9px] text-gray-500 mt-0.5">Total Learners</p>
				</div>
				<div className="rounded-xl bg-violet-50 p-2.5">
					<div className="flex items-center justify-between mb-1.5">
						<BookOpen size={12} className="text-violet-500" />
						<span className="text-[9px] text-emerald-500 font-semibold">
							↑ 5%
						</span>
					</div>
					<p className="text-base font-bold text-gray-800 leading-none">86</p>
					<p className="text-[9px] text-gray-500 mt-0.5">Active Courses</p>
				</div>
				<div className="rounded-xl bg-emerald-50 p-2.5">
					<div className="flex items-center justify-between mb-1.5">
						<TrendingUp size={12} className="text-emerald-500" />
						<span className="text-[9px] text-emerald-500 font-semibold">
							↑ 12%
						</span>
					</div>
					<p className="text-base font-bold text-gray-800 leading-none">$42K</p>
					<p className="text-[9px] text-gray-500 mt-0.5">Revenue</p>
				</div>
			</div>

			{/* Enrollments table */}
			<div className="px-4 pb-4">
				<p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
					Recent Enrollments
				</p>
				<div className="rounded-xl border border-gray-100 overflow-hidden">
					{ADMIN_ROWS.map((row, i) => (
						<div
							key={row.name}
							className={cn(
								"grid grid-cols-[1fr_auto] gap-2 items-center px-3 py-1.5",
								i % 2 === 0 ? "bg-white" : "bg-gray-50/60",
							)}
						>
							<div>
								<p className="text-[10px] font-semibold text-gray-700 leading-tight">
									{row.name}
								</p>
								<p className="text-[9px] text-gray-400">{row.course}</p>
							</div>
							<span
								className={cn(
									"px-1.5 py-0.5 rounded text-[8px] font-semibold",
									row.status === "Active"
										? "bg-emerald-100 text-emerald-600"
										: row.status === "Pending"
											? "bg-amber-100 text-amber-600"
											: "bg-gray-100 text-gray-500",
								)}
							>
								{row.status}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

/* ─── Role selector card ────────────────────────────────────────────── */
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
					? "border-blue-200 bg-blue-50 shadow-sm"
					: "border-(--es-border-1) bg-white hover:border-blue-100 hover:bg-blue-50/30",
			)}
			onMouseEnter={onActivate}
			onClick={onActivate}
		>
			<div
				className={cn(
					"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200",
					isActive ? "bg-(--es-brand)" : "bg-gray-100",
				)}
			>
				<Icon size={20} className={isActive ? "text-white" : "text-gray-400"} />
			</div>
			<div>
				<p
					className={cn(
						"text-sm font-bold leading-tight",
						isActive ? "text-(--es-text-1)" : "text-(--es-text-2)",
					)}
				>
					{role.label}
				</p>
				<p className="text-xs text-(--es-text-3) mt-0.5">{role.description}</p>
			</div>
		</button>
	);
}

/* ─── Mockup map ────────────────────────────────────────────────────── */
const MOCKUPS: Record<RoleId, () => React.ReactElement> = {
	student: StudentMockup,
	teacher: TeacherMockup,
	admin: AdminMockup,
};

/* ─── Section export ────────────────────────────────────────────────── */
export default function PersonalizedSection() {
	const [activeRole, setActiveRole] = useState<RoleId>("student");
	const ActiveMockup = MOCKUPS[activeRole];

	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-(--es-max-w) px-(--es-section-px)">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left ── heading + role cards */}
					<div>
						<h2 className="text-4xl lg:text-5xl font-bold leading-tight text-(--es-text-1) mb-4">
							Personalized Experiences
							<br />
							for Everyone
						</h2>
						<p className="text-(--es-text-2) leading-relaxed mb-10 max-w-md text-sm lg:text-base">
							Edushade offers tailored experiences for students, teachers, and
							admins, letting each user quickly access the tools and insights
							that matter most to them.
						</p>

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

					{/* Right ── dynamic mockup, fades in on role change */}
					<div key={activeRole} className="animate-fade-in-up">
						<ActiveMockup />
					</div>
				</div>
			</div>
		</section>
	);
}
