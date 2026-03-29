'use client';

import { Eye, EyeOff, X } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export type DeleteAccountConfirmDialogProps = {
	children: React.ReactNode;
};

export function canSubmitAccountDeletionConfirm(password: string): boolean {
	return password.trim().length > 0;
}

export function DeleteAccountConfirmDialog({
	children,
}: DeleteAccountConfirmDialogProps) {
	const [open, setOpen] = React.useState(false);
	const [password, setPassword] = React.useState('');
	const [visible, setVisible] = React.useState(false);
	const passwordId = React.useId();

	React.useEffect(() => {
		if (!open) {
			setPassword('');
			setVisible(false);
		}
	}, [open]);

	const canDelete = canSubmitAccountDeletionConfirm(password);

	function handleDelete() {
		if (!canDelete) return;
		// TODO: call account deletion API with password confirmation
		console.log('Confirm account deletion');
		setOpen(false);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent
				className={cn(
					'w-full gap-0 overflow-visible border-0 bg-transparent p-0 shadow-none',
					'max-w-[min(480px,calc(100%-2rem))] sm:max-w-[min(480px,calc(100%-2rem))]',
				)}
				overlayClassName="bg-[#000000B2]"
				showCloseButton={false}
			>
				{/* Frosted backplate + inner card + gradient wash (admin welcome modal pattern) */}
				<div className="rounded-xl border border-[#FFFFFF29] bg-[#FFFFFF29] p-2 shadow-xl">
					<div className="border-border-secondary relative grid gap-0 overflow-hidden rounded-lg border bg-bg-primary">
						<DialogClose
							type="button"
							className={cn(
								'text-text-primary ring-offset-background absolute top-4 right-4 z-20 rounded-xs p-1 opacity-70 transition-opacity',
								'hover:bg-bg-tertiary hover:opacity-100',
								'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden',
							)}
							aria-label="Close"
						>
							<X className="size-4" aria-hidden />
						</DialogClose>

						<div className="relative z-10 flex flex-col">
							<DialogHeader className=" space-y-2 px-6 py-5 text-left">
								<DialogTitle className="text-text-primary pr-8 text-lg font-semibold">
									Confirm Account Deletion
								</DialogTitle>
								<DialogDescription className="text-text-secondary text-left text-sm leading-relaxed">
									This action will permanently remove all projects, videos, and
									memberships. Enter your password to confirm account deletion.
								</DialogDescription>
							</DialogHeader>

							<div className="flex flex-col px-6 py-4">
								<div className="space-y-2">
									<Label
										htmlFor={passwordId}
										className="text-text-primary text-sm font-semibold"
									>
										Password
									</Label>
									<InputGroup
										className={cn(
											'h-11 rounded-lg  bg-bg-primary/80 shadow-xs backdrop-blur-[2px]',
											'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
										)}
									>
										<InputGroupInput
											id={passwordId}
											type={visible ? 'text' : 'password'}
											autoComplete="current-password"
											placeholder="••••••••"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="text-text-primary placeholder:text-text-quaternary text-sm"
										/>
										<InputGroupAddon align="inline-end" className="pr-1">
											<InputGroupButton
												type="button"
												variant="ghost"
												size="icon-sm"
												aria-label={visible ? 'Hide password' : 'Show password'}
												aria-pressed={visible}
												onClick={() => setVisible((v) => !v)}
												className="text-text-tertiary hover:text-text-primary"
											>
												{visible ? (
													<EyeOff className="size-4" aria-hidden />
												) : (
													<Eye className="size-4" aria-hidden />
												)}
											</InputGroupButton>
										</InputGroupAddon>
									</InputGroup>
								</div>
							</div>

							<DialogFooter className=" flex-row justify-end gap-2  bg-bg-tertiary/40 px-6 py-4 sm:justify-end">
								<DialogClose asChild>
									<Button
										type="button"
										variant="secondary"
										className="rounded-lg px-4"
									>
										Cancel
									</Button>
								</DialogClose>
								<Button
									type="button"
									variant="destructive"
									className="rounded-lg px-4"
									disabled={!canDelete}
									onClick={handleDelete}
								>
									Delete Account
								</Button>
							</DialogFooter>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
