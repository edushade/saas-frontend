import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useCallback, useState } from "react";
import {
	OnboardingHeader,
	OnboardingNav,
	OnboardingShell,
} from "@/components/onboarding/OnboardingShell";
import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/onboarding/invite")({
	component: OnboardingStep3,
});

const ROLES = ["Admin", "Instructor", "Support"] as const;

interface InviteRow {
	id: string;
	email: string;
	role: string;
}

function OnboardingStep3() {
	const navigate = useNavigate();
	const [rows, setRows] = useState<InviteRow[]>([
		{ id: crypto.randomUUID(), email: "", role: "" },
		{ id: crypto.randomUUID(), email: "", role: "" },
	]);

	const updateRow = useCallback(
		(id: string, field: "email" | "role", value: string) => {
			setRows((prev) =>
				prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)),
			);
		},
		[],
	);

	const addRow = useCallback(() => {
		setRows((prev) => [
			...prev,
			{ id: crypto.randomUUID(), email: "", role: "" },
		]);
	}, []);

	const handleBack = () => navigate({ to: "/onboarding/what" });

	return (
		<OnboardingShell>
			<div className="flex flex-col gap-8">
				<OnboardingHeader
					title="Invite Your Team"
					description="Collaborate with instructors or admins to manage your platform together."
				/>

				<div className="flex flex-col gap-4">
					<span className="text-sm font-medium text-text-primary">
						Invitee Email
					</span>
					{rows.map((row) => (
						<InputGroup
							key={row.id}
							className="rounded-lg h-10 border-border-secondary overflow-hidden bg-white shadow-xs"
						>
							<InputGroupInput
								type="email"
								placeholder="name@example.com"
								value={row.email}
								onChange={(e) => updateRow(row.id, "email", e.target.value)}
							/>
							<InputGroupAddon
								align="inline-end"
								className="border-l border-border-secondary/50 pl-0 pr-0"
							>
								<Select
									value={row.role || undefined}
									onValueChange={(v) => updateRow(row.id, "role", v)}
								>
									<SelectTrigger
										className="h-full min-h-9 w-[130px] rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0"
										size="default"
									>
										<SelectValue placeholder="Role" />
									</SelectTrigger>
									<SelectContent>
										{ROLES.map((role) => (
											<SelectItem key={role} value={role}>
												{role}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</InputGroupAddon>
						</InputGroup>
					))}
					<Button
						type="button"
						variant="outline"
						className="w-fit rounded-lg bg-bg-primary text-sm font-medium hover:bg-muted/30 border border-border-secondary gap-1.5"
						onClick={addRow}
					>
						<Plus className="size-4" />
						Add more member
					</Button>
				</div>

				<OnboardingNav onBack={handleBack} nextLabel="Next" nextHref="/" />
			</div>
		</OnboardingShell>
	);
}
