import { createFileRoute, Outlet } from "@tanstack/react-router";
import { OnboardingShell } from "@/components/onboarding/OnboardingShell";

export const Route = createFileRoute("/onboarding")({
	component: OnboardingLayout,
});

function OnboardingLayout() {
	return (
		<OnboardingShell>
			<Outlet />
		</OnboardingShell>
	);
}
