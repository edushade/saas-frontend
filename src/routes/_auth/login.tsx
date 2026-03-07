import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { SocialAuthButtons } from '@/components/ui-custom/SocialAuthButtons';
import { Typography } from '@/components/ui-custom/typography';
import { getSiteOrigin } from '@/env';
import { useAppForm } from '@/hooks/form';

export const Route = createFileRoute('/_auth/login')({
	head: () => ({
		meta: [
			{ title: 'Log in | Edushade' },
			{ name: 'description', content: 'Log in to your Edushade account.' },
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/login` }],
	}),
	component: LoginPage,
});

const defaultValues = {
	email: '',
	password: '',
};

function emailValidator({ value }: { value: string }) {
	if (!value?.trim()) return 'Email is required';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
	return undefined;
}

function passwordValidator({ value }: { value: string }) {
	if (!value?.trim()) return 'Password is required';
	return undefined;
}

function LoginPage() {
	const navigate = useNavigate();
	const form = useAppForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			// TODO: call auth API
			console.log('Login submit', value);
			navigate({ to: '/onboarding', search: { step: 'platform' } });
		},
	});

	return (
		<div className="flex flex-col gap-6">
			{/* Heading */}
			<div className="flex flex-col gap-1">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Welcome Back
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
							placeholder="••••••••"
							suffix={
								<Link
									to="/forgot-password"
									className="text-xs underline font-medium text-primary"
								>
									Forgot Password?
								</Link>
							}
						/>
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton
						label="Sign In"
						className="btn-brand-1 rounded-xl w-full h-11 text-sm font-semibold"
					/>
				</form.AppForm>
			</form>

			{/* Social auth */}
			<SocialAuthButtons
				onGoogle={() => console.log('Google login')}
				onGithub={() => console.log('Github login')}
			/>

			{/* Switch to register */}
			<Typography
				variant="small"
				className="text-center text-text-secondary font-normal"
			>
				New to Edushade?{' '}
				<Link
					to="/register"
					className="font-medium text-sm underline text-brand-200 hover:underline"
				>
					Create Account
				</Link>
			</Typography>
		</div>
	);
}
