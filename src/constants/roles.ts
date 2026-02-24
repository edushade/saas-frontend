import { AdminIcon, CapIcon, TeacherIcon } from "@/assets/icons";

export type RoleId = "student" | "teacher" | "admin";

export interface RoleItem {
	id: RoleId;
	label: string;
	description: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ROLES: RoleItem[] = [
	{
		id: "student",
		label: "Student",
		description: "Learn and grow daily with engaging learning path",
		icon: CapIcon,
	},
	{
		id: "teacher",
		label: "Teacher",
		description: "Educate students effectively with the right tools",
		icon: TeacherIcon,
	},
	{
		id: "admin",
		label: "Admin",
		description: "Manage the whole platform smoothly and confidently",
		icon: AdminIcon,
	},
];
