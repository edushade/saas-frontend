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

export const Route = createFileRoute('/_auth/verify-email')({
	head: () => ({
		meta: [
			{ title: 'Verify Email | Edushade' },
			{ name: 'description', content: 'Verify your Edushade email address.' },
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/verify-email` }],
	}),
	component: VerifyEmailPage,
});

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

function VerifyEmailPage() {
	const navigate = useNavigate();
	const [otp, setOtp] = React.useState('');
	const [seconds, setSeconds] = React.useState(RESEND_SECONDS);
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	React.useEffect(() => {
		if (seconds <= 0) return;
		const id = window.setInterval(() => setSeconds((s) => s - 1), 1000);
		return () => window.clearInterval(id);
	}, [seconds]);

	function handleResend() {
		// TODO: call resend OTP API
		console.log('Resend OTP');
		setSeconds(RESEND_SECONDS);
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (otp.length < OTP_LENGTH) return;
		setIsSubmitting(true);
		try {
			// TODO: call verify-email API
			console.log('Verify email OTP', otp);
			navigate({ to: '/onboarding', search: { step: 'platform' } });
		} finally {
			setIsSubmitting(false);
		}
	}

	const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
	const ss = String(seconds % 60).padStart(2, '0');

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-1">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Verify Email
				</Typography>
				<Typography variant="small" className="text-text-secondary font-normal">
					Enter the code sent to your email.
				</Typography>
			</div>

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
								className="w-[60px] h-10 rounded-xl border border-border-secondary text-base font-semibold text-text-primary"
							/>
						</InputOTPGroup>
					))}
				</InputOTP>

				<Button
					type="submit"
					disabled={otp.length < OTP_LENGTH || isSubmitting}
					className="btn-brand-1 rounded-xl w-full h-11 text-sm font-semibold"
				>
					Sign Up
				</Button>
			</form>

			<p className="text-center font-normal text-sm text-text-primary">
				Didn&apos;t get a code?{' '}
				{seconds > 0 ? (
					<span className="font-normal text-sm text-text-primary">
						Resend in{' '}
						<span className="font-medium text-brand-300">
							{mm}:{ss}
						</span>
					</span>
				) : (
					<button
						type="button"
						onClick={handleResend}
						className="font-semibold text-brand-200 hover:underline"
					>
						Resend
					</button>
				)}
			</p>
		</div>
	);
}
