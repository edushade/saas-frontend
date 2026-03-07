import { createFileRoute, useNavigate } from '@tanstack/react-router';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/components/ui/input-otp';
import { Typography } from '@/components/ui-custom/typography';
import { getSiteOrigin } from '@/env';

export const Route = createFileRoute('/_auth/forgot-password-otp')({
	head: () => ({
		meta: [
			{ title: 'Verify OTP | Edushade' },
			{
				name: 'description',
				content: 'Enter the OTP sent to your email to reset your password.',
			},
		],
		links: [
			{
				rel: 'canonical',
				href: `${getSiteOrigin()}/forgot-password-otp`,
			},
		],
	}),
	component: ForgotPasswordOtpPage,
});

const OTP_LENGTH = 6;

function ForgotPasswordOtpPage() {
	const navigate = useNavigate();
	const [otp, setOtp] = React.useState('');
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	function handleResend() {
		// TODO: call resend OTP API
		console.log('Resend password-reset OTP');
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (otp.length < OTP_LENGTH) return;
		setIsSubmitting(true);
		try {
			// TODO: call verify-reset-otp API
			console.log('Confirm OTP', otp);
			navigate({ to: '/new-password' });
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="flex flex-col gap-6">
			{/* Heading */}
			<div className="flex flex-col gap-1">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Verify Email
				</Typography>
				<Typography variant="small" className="text-text-secondary font-normal">
					Enter the code sent to your email to reset your password.
				</Typography>
			</div>

			{/* OTP form */}
			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<InputOTP
					maxLength={OTP_LENGTH}
					value={otp}
					onChange={setOtp}
					containerClassName="flex gap-3 justify-between"
				>
					{[0, 1, 2, 3, 4, 5].map((i) => (
						<InputOTPGroup key={i}>
							<InputOTPSlot
								index={i}
								className="size-12 rounded-xl border border-border-secondary text-base font-semibold text-text-primary"
							/>
						</InputOTPGroup>
					))}
				</InputOTP>

				<Button
					type="submit"
					disabled={otp.length < OTP_LENGTH || isSubmitting}
					className="btn-brand-1 rounded-xl w-full h-11 text-sm font-semibold"
				>
					Confirm OTP
				</Button>
			</form>

			{/* Resend — no countdown for forgot-password flow */}
			<Typography
				variant="small"
				className="text-center font-normal text-sm text-text-primary"
			>
				Didn&apos;t get a code?{' '}
				<button
					type="button"
					onClick={handleResend}
					className="font-normal text-sm text-text-primary hover:underline"
				>
					Resend
				</button>
			</Typography>
		</div>
	);
}
