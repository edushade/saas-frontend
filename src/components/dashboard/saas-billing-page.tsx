import { Link } from '@tanstack/react-router';
import { ArrowUp } from 'lucide-react';
import { VisaIcon } from '@/assets/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Typography } from '../ui-custom/typography';
import { BillingInvoicesPanel } from './billing-invoices-panel';
import SaasDashboardHeader from './saas-dashboard-header';

export function SaasBillingPage() {
	return (
		<div className="flex flex-col gap-3 md:gap-4">
			<SaasDashboardHeader />
			<div className="mx-auto flex w-full max-w-[800px] flex-col gap-6">
				<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary shadow-sm">
					<CardContent className="flex flex-col gap-2  border-b border-border-secondary">
						<div className="flex flex-row justify-between items-center gap-2">
							<Typography
								variant="base"
								className="text-text-primary font-semibold"
							>
								Current Plan
							</Typography>
							<Badge className="rounded-full bg-brand-300/15 px-3 py-1 text-xs font-medium text-brand-300">
								Active
							</Badge>
						</div>

						<div>
							<p className="text-text-primary text-xl font-semibold">
								Starter Plan
							</p>
							<p className="text-text-secondary mt-1 text-lg">$29 / month</p>
						</div>
					</CardContent>
					<CardFooter className="border-t border-border-secondary flex justify-between">
						<div className="flex items-center justify-between ">
							<p className="text-text-secondary text-sm">
								Next billing date: Oct 10, 2025
							</p>
							<div className="flex gap-2">
								<Button
									type="button"
									variant="ghost"
									className="text-text-primary"
									asChild
								>
									<Link to="/dashboard/plans">Change Plan</Link>
								</Button>
								<Button
									type="button"
									className="bg-brand-200 text-text-on-brand hover:bg-brand-200/90"
									asChild
								>
									<Link to="/dashboard/plans">
										<ArrowUp className="size-4" />
										Upgrade Plan
									</Link>
								</Button>
							</div>
						</div>
					</CardFooter>
				</Card>

				<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary py-0 shadow-sm">
					<CardContent className="px-6 py-5 flex flex-col gap-6">
						<CardTitle className="text-base font-semibold text-text-primary">
							Payment Method
						</CardTitle>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex min-w-0 items-start gap-4">
								<div className="size-10 shrink-0 rounded-lg p-2 border border-border-secondary bg-bg-primary flex items-center justify-center">
									<VisaIcon />
								</div>
								<div className="min-w-0 space-y-1">
									<p className="text-text-primary font-semibold">
										Visa •••• 4242
									</p>
									<p className="text-text-secondary text-sm">Expires 09/27</p>
								</div>
							</div>
							<div className="flex flex-wrap gap-2 sm:shrink-0">
								<Button
									type="button"
									variant="outline"
									className="border-destructive/40 text-destructive hover:bg-destructive/10"
								>
									Remove
								</Button>
								<Button
									type="button"
									variant="outline"
									className="border-border-secondary"
								>
									Update
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="gap-0 rounded-xl border-border-secondary bg-bg-primary shadow-sm">
					<CardContent className="flex flex-col gap-6">
						<Typography
							variant="base"
							className="font-semibold text-text-primary"
						>
							Billing Contact
						</Typography>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div className="min-w-0 space-y-1">
								<p className="text-text-primary font-semibold">
									saier@tenbyte.com.my
								</p>
								<p className="text-text-secondary text-sm">
									Used for invoices and billing notifications.
								</p>
							</div>
							<Button
								type="button"
								variant="outline"
								className="border-border-secondary sm:shrink-0"
							>
								Edit
							</Button>
						</div>
					</CardContent>
				</Card>

				<BillingInvoicesPanel />
			</div>
		</div>
	);
}
