import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Typography } from '@/components/ui-custom/typography';
import { getSiteOrigin } from '@/env';
import { useAppForm } from '@/hooks/form';

export const Route = createFileRoute('/_auth/new-password')({
	head: () => ({
		meta: [
			{ title: 'Create New Password | Edushade' },
			{
				name: 'description',
				content: 'Set a new password for your Edushade account.',
			},
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/new-password` }],
	}),
	component: NewPasswordPage,
});

const defaultValues = { password: '' };

function passwordValidator({ value }: { value: string }) {
	if (!value?.trim()) return 'Password is required';
	if (value.length < 8) return 'Password must be at least 8 characters';
	if (!/[@#$%^&*!]/.test(value))
		return 'Password must include a special character (e.g. @, #, $)';
	return undefined;
}

function NewPasswordPage() {
	const navigate = useNavigate();
	const form = useAppForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			// TODO: call set-new-password API
			console.log('Set new password', value);
			navigate({ to: '/login' });
		},
	});

	return (
		<div className="flex flex-col gap-6">
			{/* Heading */}
			<div className="flex flex-col gap-1">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Create New Password
				</Typography>
				<Typography variant="small" className="text-text-secondary font-normal">
					Set a new password to keep your account secure!
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
				<form.AppField
					name="password"
					validators={{ onBlur: passwordValidator }}
				>
					{(field) => (
						<field.PasswordField
							label="New Password"
							placeholder="example@gmail.com"
							helperText="New password must be 8+ chars & include special characters (e.g. @, #, $)"
						/>
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton
						label="Set Password"
						className="btn-brand-1 rounded-xl w-full h-11 text-sm font-semibold"
					/>
				</form.AppForm>
			</form>
		</div>
	);
}
