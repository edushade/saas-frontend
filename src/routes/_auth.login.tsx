import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
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
			// TODO: naviate to /onboarding
			navigate({ to: '/onboarding' });
		},
	});

	return (
		<div className="flex flex-col gap-6">
			<div className="text-center">
				<Link to="/" className="inline-block" aria-label="Edushade home">
					<img src="/svgs/logo.svg" alt="" className="h-9 w-auto mx-auto" />
				</Link>
				<h1 className="mt-4 text-xl font-semibold text-text-primary">Log in</h1>
				<p className="mt-1 text-sm text-text-secondary">
					Sign in to your account to continue.
				</p>
			</div>
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
							label="Email"
							type="email"
							placeholder="you@example.com"
						/>
					)}
				</form.AppField>
				<form.AppField
					name="password"
					validators={{ onBlur: passwordValidator }}
				>
					{(field) => (
						<field.TextField
							label="Password"
							type="password"
							placeholder="••••••••"
						/>
					)}
				</form.AppField>
				<form.AppForm>
					<form.SubscribeButton
						label="Log in"
						className="btn-brand-1 rounded-xl w-full"
					/>
				</form.AppForm>
			</form>
			<p className="text-center text-sm text-text-secondary">
				Don&apos;t have an account?{' '}
				<Link
					to="/register"
					className="font-medium text-brand-200 hover:underline"
				>
					Sign up
				</Link>
			</p>
		</div>
	);
}
