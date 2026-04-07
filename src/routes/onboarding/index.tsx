import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { OnboardingStep1 } from "@/components/onboarding/steps/OnboardingStep1";
import { OnboardingStep2 } from "@/components/onboarding/steps/OnboardingStep2";
import { OnboardingStep3 } from "@/components/onboarding/steps/OnboardingStep3";
import { OnboardingStep4 } from "@/components/onboarding/steps/OnboardingStep4";

const STEP_NAMES = ["platform", "what", "invite", "course"] as const;
type StepName = (typeof STEP_NAMES)[number];

const DEFAULT_STEP: StepName = "platform";

export const Route = createFileRoute("/onboarding/")({
	validateSearch: (search: Record<string, unknown>): { step: StepName } => ({
		step: STEP_NAMES.includes(search?.step as StepName)
			? (search.step as StepName)
			: DEFAULT_STEP,
	}),
	component: OnboardingPage,
});

function OnboardingPage() {
	const { step } = Route.useSearch();
	const navigate = useNavigate({ from: "/onboarding" });

	const goTo = (s: StepName) =>
		navigate({ to: "/onboarding", search: { step: s } });

	return (
		<>
			{step === "platform" && <OnboardingStep1 onNext={() => goTo("what")} />}
			{step === "what" && <OnboardingStep2 onNext={() => goTo("invite")} />}
			{step === "invite" && <OnboardingStep3 onNext={() => goTo("course")} />}
			{step === "course" && (
				<OnboardingStep4 onComplete={() => navigate({ to: "/" })} />
			)}
		</>
	);
}
