import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Typography } from '@/components/ui-custom/typography';
import { getSiteOrigin } from '@/env';
import { useAppForm } from '@/hooks/form';

export const Route = createFileRoute('/_auth/forgot-password')({
	head: () => ({
		meta: [
			{ title: 'Reset Password | Edushade' },
			{
				name: 'description',
				content: 'Reset your Edushade account password.',
			},
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/forgot-password` }],
	}),
	component: ForgotPasswordPage,
});

const defaultValues = { email: '' };

function emailValidator({ value }: { value: string }) {
	if (!value?.trim()) return 'Email is required';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
	return undefined;
}

function ForgotPasswordPage() {
	const navigate = useNavigate();
	const form = useAppForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			// TODO: call send-reset-otp API
			console.log('Send reset OTP to', value.email);
			navigate({ to: '/forgot-password-otp' });
		},
	});

	return (
		<div className="flex flex-col gap-6">
			{/* Heading */}
			<div className="flex flex-col gap-1">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Reset Password
				</Typography>
				<Typography variant="small" className="text-text-secondary font-normal">
					Enter your email address to change your password
				</Typography>
			</div>

			{/* Form */}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="flex flex-col gap-4"
			>
				<form.AppField name="email" validators={{ onBlur: emailValidator }}>
					{(field) => (
						<field.TextField
							label="Email Address"
							type="email"
							placeholder="example@gmail.com"
						/>
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton
						label="Send OTP"
						className="btn-brand-1 rounded-xl w-full h-11 text-sm font-semibold"
					/>
				</form.AppForm>
			</form>
		</div>
	);
}
