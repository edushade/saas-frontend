import { Typography } from "@/components/ui-custom/typography";

export function DashboardPagePlaceholder({ title }: { title: string }) {
	return (
		<div className="flex min-h-[40vh] flex-col gap-2 rounded-xl border border-border-secondary bg-bg-primary p-6">
			<Typography variant="h5" className="font-semibold text-text-primary">
				{title}
			</Typography>
			<Typography variant="small" className="text-text-secondary">
				SaaS dashboard panel placeholder. Connect billing, members, and org data
				here when your APIs are ready.
			</Typography>
		</div>
	);
}
