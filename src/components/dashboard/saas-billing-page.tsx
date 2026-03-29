import { Link } from '@tanstack/react-router';
import { ArrowUp } from 'lucide-react';
import { VisaIcon } from '@/assets/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Typography } from '../ui-custom/typography';
import { BillingInvoicesPanel } from './billing-invoices-panel';
import SaasDashboardHeader from './saas-dashboard-header';

function VisaMark({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'flex size-10 shrink-0 items-center justify-center rounded-lg border border-border-secondary bg-bg-primary',
				className,
			)}
		>
			<svg
				className="h-3 w-10"
				viewBox="0 0 48 16"
				fill="none"
				role="img"
				aria-label="Visa"
			>
				<title>Visa</title>
				<path
					fill="#1A1F71"
					d="M20.2 15.5h3.4l2.1-12.8h-3.4l-2.1 12.8zm13.6-8.3c0-1-.9-1.7-2.5-1.7-2.6 0-4.5 1.3-4.5 3.2 0 1.4 1.3 2.2 2.3 2.6 1 .5 1.4.8 1.4 1.2 0 .6-.8.9-1.6.9-1.1 0-1.7-.2-2.6-.6l-.4-.2-1 2.4c.9.4 2.1.7 3.5.7 2.8 0 4.6-1.4 4.6-3.4 0-1.1-.7-2-2.2-2.7-1-.4-1.5-.7-1.5-1.1 0-.4.5-.8 1.5-.8.9 0 1.6.2 2.1.4l.3.1 1-2.3zM45.5 2.7h-2.6c-.8 0-1.4.2-1.8 1.1l-5 11.7h3.5l.7-1.9h4.3l.4 1.9h3.1L45.5 2.7zm-5.1 7.6 1.6-4.4c0 .1.3-1 .3-1l.6 1 .6 4.4h-3.5zM15.8 2.7 12.5 15.5H9.3L6 2.7h3.6c.7 0 1.3.5 1.5 1.1l1.7 8.3 3.9-9.4h3.1z"
				/>
			</svg>
		</div>
	);
}

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
