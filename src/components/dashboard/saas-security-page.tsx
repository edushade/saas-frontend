import type { ReactNode } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui-custom/typography";
import {
	FacebookOAuthIcon,
	GoogleOAuthIcon,
} from "./dashboard-oauth-icons";
import { DashboardPasswordField } from "./dashboard-password-field";

type ProviderRowProps = {
	icon: ReactNode;
	name: string;
	description: string;
	connected: boolean;
	onConnectClick?: () => void;
	onConnectedClick?: () => void;
};

function OAuthProviderRow({
	icon,
	name,
	description,
	connected,
	onConnectClick,
	onConnectedClick,
}: ProviderRowProps) {
	return (
		<div className="flex flex-col gap-4 border-b border-border-secondary py-5 last:border-b-0 sm:flex-row sm:items-center sm:gap-6">
			<div className="flex min-w-0 flex-1 items-start gap-4">
				{icon}
				<div className="min-w-0 space-y-1">
					<p className="text-sm font-semibold text-text-primary">{name}</p>
					<p className="text-text-secondary text-sm">{description}</p>
				</div>
			</div>
			<div className="flex shrink-0 sm:ml-auto">
				{connected ? (
					<Button
						type="button"
						variant="outline"
						className="border-border-secondary"
						onClick={onConnectedClick}
					>
						Connected
					</Button>
				) : (
					<Button
						type="button"
						variant="outline"
						className="border-border-secondary"
						onClick={onConnectClick}
					>
						Connect
					</Button>
				)}
			</div>
		</div>
	);
}

/**
 * Security dashboard view: linked accounts, password change, and account deletion (UI only).
 */
export function SaasSecurityPage() {
	return (
		<div className="flex flex-col gap-6">
			<Typography variant="h5" className="font-semibold text-text-primary">
				Security
			</Typography>

			<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary py-0 shadow-sm">
				<CardHeader className="space-y-1.5 border-b border-border-secondary px-6 py-5">
					<CardTitle className="text-base font-semibold text-text-primary">
						Connect Accounts
					</CardTitle>
					<CardDescription className="text-text-secondary text-sm">
						Connect other accounts as your personalized portals for effortless
						access.
					</CardDescription>
				</CardHeader>
				<CardContent className="px-6 pb-2 pt-0">
					<OAuthProviderRow
						icon={<GoogleOAuthIcon />}
						name="Google"
						description="Google's recovery options help if you lose access."
						connected
					/>
					<OAuthProviderRow
						icon={<FacebookOAuthIcon />}
						name="Facebook"
						description="Link your Facebook account for quicker sign-in."
						connected={false}
					/>
				</CardContent>
			</Card>

			<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary py-0 shadow-sm">
				<CardHeader className="border-b border-border-secondary px-6 py-5">
					<CardTitle className="text-base font-semibold text-text-primary">
						Change Password
					</CardTitle>
				</CardHeader>
				<CardContent className="px-6 pb-2 pt-0">
					<DashboardPasswordField
						id="current-password"
						label="Current Password"
						description="Enter your current password to authorize this change."
						autoComplete="current-password"
					/>
					<DashboardPasswordField
						id="new-password"
						label="New Password"
						description="Password must be at least 8 characters."
						autoComplete="new-password"
					/>
					<DashboardPasswordField
						id="confirm-password"
						label="Confirm New Password"
						description="Re-enter your new password to confirm."
						autoComplete="new-password"
					/>
				</CardContent>
			</Card>

			<Card className="gap-0 rounded-xl border-destructive/25 bg-bg-primary py-0 shadow-sm">
				<CardHeader className="border-b border-border-secondary px-6 py-5">
					<CardTitle className="text-base font-semibold text-text-primary">
						Danger Zone
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 px-6 py-6">
					<div className="space-y-2">
						<p className="text-destructive text-sm font-semibold">
							Account Deletion
						</p>
						<p className="text-text-secondary max-w-2xl text-sm leading-relaxed">
							Deleting your account is permanent. All organizations you own, billing
							data, and personal settings will be removed. This cannot be undone.
						</p>
					</div>
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button type="button" variant="destructive">
								Delete Account
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Delete your account?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be reversed. Your account and associated data
									will be scheduled for deletion.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
								<AlertDialogAction type="button" variant="destructive">
									Delete account
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</CardContent>
			</Card>
		</div>
	);
}
