import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { SocialAuthButtons } from '@/components/ui-custom/SocialAuthButtons';
import { Typography } from '@/components/ui-custom/typography';
import { getSiteOrigin } from '@/env';
import { useAppForm } from '@/hooks/form';

export const Route = createFileRoute('/_auth/register')({
	head: () => ({
		meta: [
			{ title: 'Create account | Edushade' },
			{ name: 'description', content: 'Create your Edushade account.' },
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/register` }],
	}),
	component: RegisterPage,
});

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

function nameValidator({ value }: { value: string }) {
	if (!value?.trim()) return 'This field is required';
	return undefined;
}

function emailValidator({ value }: { value: string }) {
	if (!value?.trim()) return 'Email is required';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
	return undefined;
}

function passwordValidator({ value }: { value: string }) {
	if (!value?.trim()) return 'Password is required';
	if (value.length < 8) return 'Password must be at least 8 characters';
	if (!/[@#$%^&*!]/.test(value))
		return 'Password must include a special character (e.g. @, #, $)';
	return undefined;
}

function RegisterPage() {
	const navigate = useNavigate();
	const form = useAppForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			// TODO: call registration API, then redirect to OTP verification
			console.log('Register submit', value);
			navigate({ to: '/verify-email' });
		},
	});

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-1">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Create Account
				</Typography>
				<Typography variant="small" className="text-text-secondary font-normal">
					Sign in to your Edushade account
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
				{/* Full name row */}
				<div className="flex flex-col gap-1">
					<span className="text-sm text-text-primary font-semibold mb-1">
						Full Name
					</span>
					<div className="grid grid-cols-2 gap-3">
						<form.AppField
							name="firstName"
							validators={{ onBlur: nameValidator }}
						>
							{(field) => <field.TextField placeholder="First name" />}
						</form.AppField>
						<form.AppField
							name="lastName"
							validators={{ onBlur: nameValidator }}
						>
							{(field) => <field.TextField placeholder="Last name" />}
						</form.AppField>
					</div>
				</div>

				<form.AppField name="email" validators={{ onBlur: emailValidator }}>
					{(field) => (
						<field.TextField
							label="Email Address"
							type="email"
							placeholder="example@gmail.com"
						/>
					)}
				</form.AppField>

				<form.AppField
					name="password"
					validators={{ onBlur: passwordValidator }}
				>
					{(field) => (
						<field.PasswordField
							label="Password"
							placeholder="example@gmail.com"
							helperText="Password must be 8+ chars & include special characters (e.g. @, #, $)"
						/>
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton
						label="Continue"
						className="btn-brand-1 rounded-xl w-full h-11 text-sm font-semibold"
					/>
				</form.AppForm>
			</form>

			{/* Social auth */}
			<SocialAuthButtons
				onGoogle={() => console.log('Google register')}
				onGithub={() => console.log('Github register')}
			/>

			{/* Switch to login */}
			<Typography
				variant="small"
				className="text-center text-text-secondary font-normal"
			>
				Already have an account?{' '}
				<Link
					to="/login"
					className="font-medium text-sm underline text-brand-200 hover:underline"
				>
					Sign In
				</Link>
			</Typography>
		</div>
	);
}
