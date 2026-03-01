import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useCallback, useState } from "react";
import {
	OnboardingField,
	OnboardingHeader,
	OnboardingNav,
} from "@/components/onboarding/OnboardingShell";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/onboarding/")({
	component: OnboardingStep1,
});

const SUBDOMAIN_REGEX = /^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])?$/;
const MIN_SUBDOMAIN_LEN = 3;
const MAX_SUBDOMAIN_LEN = 63;

function OnboardingStep1() {
	const navigate = useNavigate();
	const [platformName, setPlatformName] = useState("");
	const [subdomain, setSubdomain] = useState("");
	const [subdomainTouched, setSubdomainTouched] = useState(false);

	const normalizedSubdomain = subdomain
		.toLowerCase()
		.replace(/\s/g, "-")
		.replace(/[^a-z0-9-]/g, "");

	const isValidSubdomain =
		normalizedSubdomain.length >= MIN_SUBDOMAIN_LEN &&
		normalizedSubdomain.length <= MAX_SUBDOMAIN_LEN &&
		SUBDOMAIN_REGEX.test(normalizedSubdomain);

	const subdomainAvailable = isValidSubdomain;

	const handleContinue = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			if (!isValidSubdomain) return;
			navigate({ to: "/onboarding/what" });
		},
		[isValidSubdomain, navigate],
	);

	return (
		<form onSubmit={handleContinue} className="flex flex-col gap-8 w-full">
			<OnboardingHeader
				title="Let's Set Up Your Platform"
				description="Start by defining your platform identity. This will be visible to your learners and team."
			/>

			<div className="flex flex-col gap-6">
				<OnboardingField label="Platform Name">
					<Input
						type="text"
						placeholder="Acme Academy"
						value={platformName}
						onChange={(e) => setPlatformName(e.target.value)}
						className="rounded-lg border-border-secondary"
					/>
				</OnboardingField>

				<OnboardingField
					label="URL Subdomain"
					helper="Use only letters, numbers, and hyphens. 3-63 characters."
				>
					<div className="flex rounded-lg border border-border-secondary overflow-hidden bg-white shadow-xs focus-within:ring-ring/50 focus-within:ring-[3px] focus-within:border-ring">
						<input
							type="text"
							placeholder="acme-academy"
							value={subdomain}
							onChange={(e) => setSubdomain(e.target.value)}
							onBlur={() => setSubdomainTouched(true)}
							className="flex-1 min-w-0 h-9 px-3 py-1 text-base md:text-sm border-0 outline-none placeholder:text-muted-foreground"
						/>
						<span className="flex items-center px-3 py-2 text-sm text-text-tertiary bg-muted/30 border-l border-border-secondary">
							.edushade.com
						</span>
					</div>
					{subdomainTouched && subdomainAvailable && (
						<p className="flex items-center gap-1.5 text-xs text-emerald-600 mt-1">
							<Check className="size-3.5 shrink-0" aria-hidden />
							This subdomain is available!
						</p>
					)}
				</OnboardingField>
			</div>

			<OnboardingNav nextLabel="Continue" nextDisabled={!subdomainAvailable} />
		</form>
	);
}
