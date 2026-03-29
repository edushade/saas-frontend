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

export const Route = createFileRoute('/_auth/verify-password-setup')({
	validateSearch: (raw: Record<string, unknown>) => ({
		email: typeof raw.email === 'string' ? raw.email : '',
	}),
	head: () => ({
		meta: [
			{ title: 'Verify Email | Edushade' },
			{
				name: 'description',
				content: 'Verify your email to finish setting your password.',
			},
		],
		links: [
			{
				rel: 'canonical',
				href: `${getSiteOrigin()}/verify-password-setup`,
			},
		],
	}),
	component: VerifyPasswordSetupPage,
});

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

function VerifyPasswordSetupPage() {
	const { email } = Route.useSearch();
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
		// TODO: resend OTP for password setup
		console.log('Resend password-setup OTP', email);
		setSeconds(RESEND_SECONDS);
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (otp.length < OTP_LENGTH) return;
		setIsSubmitting(true);
		try {
			// TODO: verify OTP + persist password API
			console.log('Verify password-setup OTP', otp);
			await navigate({ to: '/password-created' });
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
				<Typography variant="small" className="font-normal text-text-secondary">
					Enter the code sent to your email.
				</Typography>
			</div>

			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<InputOTP
					maxLength={OTP_LENGTH}
					value={otp}
					onChange={setOtp}
					containerClassName="flex justify-between gap-3"
				>
					{[0, 1, 2, 3, 4, 5].map((i) => (
						<InputOTPGroup key={i}>
							<InputOTPSlot
								index={i}
								className="h-10 w-[52px] rounded-xl border border-border-secondary text-base font-semibold text-text-primary sm:w-[60px]"
							/>
						</InputOTPGroup>
					))}
				</InputOTP>

				<Button
					type="submit"
					disabled={otp.length < OTP_LENGTH || isSubmitting}
					className="btn-brand-1 h-11 w-full rounded-xl text-sm font-semibold"
				>
					Verify and Save Password
				</Button>
			</form>

			<p className="text-center text-sm font-normal text-text-primary">
				Didn&apos;t get a code?{' '}
				{seconds > 0 ? (
					<span>
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
