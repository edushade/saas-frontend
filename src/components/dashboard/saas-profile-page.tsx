import { Upload } from 'lucide-react';
import { useId, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupInput } from '@/components/ui/input-group';
import { getProfileImageValidationError } from '@/lib/profile-image-validation';
import { DashboardSettingsRow } from './dashboard-settings-row';

export function SaasProfilePage() {
	const fileInputId = useId();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [imageError, setImageError] = useState<string | null>(null);

	return (
		<div className="flex flex-col gap-6 max-w-[800px] w-full mx-auto">
			<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary shadow-sm">
				<CardHeader className="border-b border-border-secondary">
					<CardTitle className="text-base font-semibold text-text-primary">
						Account Information
					</CardTitle>
				</CardHeader>
				<CardContent className="px-6 pb-2 pt-0">
					<DashboardSettingsRow
						title="Name"
						description="Enter your full name."
					>
						<InputGroup className="flex h-9 min-w-0 w-full flex-nowrap">
							<InputGroupInput
								aria-label="First name"
								autoComplete="given-name"
								defaultValue="Saier"
								placeholder="First name"
								className="min-w-0 flex-1"
							/>
							<div
								aria-hidden
								className="bg-border w-px shrink-0 self-stretch"
							/>
							<InputGroupInput
								aria-label="Last name"
								autoComplete="family-name"
								defaultValue="Irfan"
								placeholder="Last name"
								className="min-w-0 flex-1"
							/>
						</InputGroup>
					</DashboardSettingsRow>

					<DashboardSettingsRow
						title="Email Address"
						description="This email address is used for authentication."
					>
						<Input
							type="email"
							aria-label="Email address"
							autoComplete="email"
							defaultValue="saier@edushade.com"
						/>
					</DashboardSettingsRow>

					<DashboardSettingsRow
						title="Profile Picture"
						description="Used to personalize your account."
					>
						<div className="flex flex-col gap-2">
							<div className="flex flex-wrap items-center gap-2">
								<input
									ref={fileInputRef}
									id={fileInputId}
									type="file"
									accept="image/png,image/jpeg"
									className="sr-only"
									onChange={(e) => {
										const file = e.target.files?.[0];
										if (!file) {
											setImageError(null);
											return;
										}
										const err = getProfileImageValidationError(file);
										setImageError(err);
									}}
								/>
								<Button
									type="button"
									variant="outline"
									size="icon"
									className="shrink-0 border-border-secondary"
									aria-label="Choose image file"
									onClick={() => fileInputRef.current?.click()}
								>
									<Upload className="size-4" />
								</Button>
								<Button
									type="button"
									variant="outline"
									className="border-border-secondary"
									onClick={() => fileInputRef.current?.click()}
								>
									Upload Image
								</Button>
							</div>
							{imageError ? (
								<p className="text-destructive text-xs" role="alert">
									{imageError}
								</p>
							) : null}
							<p className="text-text-secondary text-xs">
								*.png, *.jpeg files up to 2MB at least 400px by 400px
							</p>
						</div>
					</DashboardSettingsRow>
				</CardContent>
			</Card>
		</div>
	);
}
