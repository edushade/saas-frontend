import type { LucideIcon } from "lucide-react";
import { BookOpen, GraduationCap, ShieldCheck } from "lucide-react";

export type RoleId = "student" | "teacher" | "admin";

export interface RoleItem {
	id: RoleId;
	label: string;
	description: string;
	icon: LucideIcon;
}

export const ROLES: RoleItem[] = [
	{
		id: "student",
		label: "Student",
		description: "Learn and grow daily with engaging learning path",
		icon: GraduationCap,
	},
	{
		id: "teacher",
		label: "Teacher",
		description: "Educate students effectively with the right tools",
		icon: BookOpen,
	},
	{
		id: "admin",
		label: "Admin",
		description: "Manage the whole platform smoothly and confidently",
		icon: ShieldCheck,
	},
];
