import { AdminIcon, CapIcon, TeacherIcon } from "@/assets/icons";
import type { RoleItem } from "@/lib/role";

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
