import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useCallback, useState } from 'react';
import { CheckCircleIcon } from '@/assets/icons';
import {
	OnboardingField,
	OnboardingHeader,
	OnboardingNav,
	OnboardingShell,
} from '@/components/onboarding/OnboardingShell';
import { Input } from '@/components/ui/input';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from '@/components/ui/input-group';
import { Typography } from '@/components/ui-custom/typography';

export const Route = createFileRoute('/onboarding/')({
	component: OnboardingStep1,
});

const SUBDOMAIN_REGEX = /^[a-z0-9]([a-z0-9-]{1,61}[a-z0-9])?$/;
const MIN_SUBDOMAIN_LEN = 3;
const MAX_SUBDOMAIN_LEN = 63;

function OnboardingStep1() {
	const navigate = useNavigate();
	const [platformName, setPlatformName] = useState('');
	const [subdomain, setSubdomain] = useState('');
	const [subdomainTouched, setSubdomainTouched] = useState(false);

	const normalizedSubdomain = subdomain
		.toLowerCase()
		.replace(/\s/g, '-')
		.replace(/[^a-z0-9-]/g, '');

	const isValidSubdomain =
		normalizedSubdomain.length >= MIN_SUBDOMAIN_LEN &&
		normalizedSubdomain.length <= MAX_SUBDOMAIN_LEN &&
		SUBDOMAIN_REGEX.test(normalizedSubdomain);

	const subdomainAvailable = isValidSubdomain;

	const handleContinue = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			if (!isValidSubdomain) return;
			navigate({ to: '/onboarding/what' });
		},
		[isValidSubdomain, navigate],
	);

	return (
		<OnboardingShell>
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
							className="rounded-lg border-border-secondary h-10 text-xs md:text-sm"
						/>
					</OnboardingField>

					<OnboardingField
						label="URL Subdomain"
						helper="Use only letters, numbers, and hyphens. 3-63 characters."
					>
						<InputGroup className="h-10 rounded-lg border-border-secondary bg-white shadow-xs gap-1 md:gap-2">
							<InputGroupInput
								type="text"
								placeholder="acme-academy"
								value={subdomain}
								onChange={(e) => setSubdomain(e.target.value)}
								onBlur={() => setSubdomainTouched(true)}
								className="text-xs md:text-sm h-10"
							/>
							<InputGroupAddon
								align="inline-end"
								className="border-l px-1 md:px-2 py-1 md:py-2 border-border-secondary bg-muted/30 text-text-tertiary"
							>
								<InputGroupText className="text-xs md:text-sm text-text-primary">
									.edushade.com
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
						{subdomainTouched && subdomainAvailable && (
							<Typography
								variant="small"
								className="flex items-center gap-1.5 text-text-secondary mt-1 font-medium"
							>
								<CheckCircleIcon
									className="shrink-0 size-5 text-green-600"
									aria-hidden
								/>
								This subdomain is available!
							</Typography>
						)}
					</OnboardingField>
				</div>

				<OnboardingNav
					nextLabel="Continue"
					nextDisabled={!subdomainAvailable}
				/>
			</form>
		</OnboardingShell>
	);
}
