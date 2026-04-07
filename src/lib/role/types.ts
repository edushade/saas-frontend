export type RoleId = "student" | "teacher" | "admin";

export interface RoleItem {
	id: RoleId;
	label: string;
	description: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
