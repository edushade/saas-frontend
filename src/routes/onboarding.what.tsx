import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
	OnboardingHeader,
	OnboardingNav,
	OnboardingShell,
} from "@/components/onboarding/OnboardingShell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding/what")({
	component: OnboardingStep2,
});

const EDUCATION_TYPES = [
	"Self-Paced Courses",
	"Cohort-Based Programs",
	"Hybrid Learning",
	"Institutional Platform",
	"Training & Certification",
] as const;

const LEARNER_RANGES = [
	"Under 100",
	"100 - 1,000",
	"1,000 - 10,000",
	"10,000 - 50,000",
	"50,000 - 1,00,000",
	"1,00,000+",
] as const;

function OnboardingStep2() {
	const navigate = useNavigate();
	const [educationType, setEducationType] = useState<string | null>(null);
	const [learnerRange, setLearnerRange] = useState<string | null>(null);

	const handleBack = () => navigate({ to: "/onboarding" });

	return (
		<OnboardingShell>
			<div className="flex flex-col gap-8">
				<OnboardingHeader
					title="What Are You Building?"
					description="Help us tailor your setup based on how you plan to deliver learning."
				/>

				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<span className="text-sm font-medium text-text-primary">
							Type of your education:
						</span>
						<div className="flex flex-wrap gap-1 md:gap-2">
							{EDUCATION_TYPES.map((option) => (
								<Button
									key={option}
									type="button"
									variant={educationType === option ? "default" : "outline"}
									className={cn(
										"rounded-lg text-xs md:text-sm text-text-primary px-2 md:px-3 py-1 md:py-2   font-medium hover:bg-muted/30",
										educationType === option
											? " bg-[#E6F0FF]  border border-brand-300"
											: "bg-bg-primary border border-border-secondary",
									)}
									onClick={() => setEducationType(option)}
								>
									{option}
								</Button>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<span className="text-sm font-medium text-text-primary">
							Expected number of learners in first 6 months:
						</span>
						<div className="flex flex-wrap gap-1 md:gap-2">
							{LEARNER_RANGES.map((option) => (
								<Button
									key={option}
									type="button"
									variant={learnerRange === option ? "default" : "outline"}
									className={cn(
										"rounded-lg text-xs md:text-sm text-text-primary px-2 md:px-3 py-1 md:py-2   font-medium hover:bg-muted/30",
										learnerRange === option
											? " bg-[#E6F0FF]  border border-brand-300"
											: "bg-bg-primary border border-border-secondary",
									)}
									onClick={() => setLearnerRange(option)}
								>
									{option}
								</Button>
							))}
						</div>
					</div>
				</div>

				<OnboardingNav
					onBack={handleBack}
					nextLabel="Next"
					nextHref="/onboarding/create-course"
				/>
			</div>
		</OnboardingShell>
	);
}
