import { useStore } from '@tanstack/react-form';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Lock } from 'lucide-react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { Typography } from '@/components/ui-custom/typography';
import { getSiteOrigin } from '@/env';
import { useAppForm } from '@/hooks/form';
import { useFieldContext } from '@/hooks/form-context';

export const Route = createFileRoute('/_auth/create-password')({
	head: () => ({
		meta: [
			{ title: 'Create a Password | Edushade' },
			{
				name: 'description',
				content: 'Add a password to your Edushade account.',
			},
		],
		links: [{ rel: 'canonical', href: `${getSiteOrigin()}/create-password` }],
	}),
	component: CreatePasswordPage,
});

const defaultValues = { email: '', password: '' };

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

/** Gmail field with trailing lock icon (matches account-security design). */
function GmailLockField() {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (s) => s.meta.errors);
	const id = field.name;

	return (
		<div>
			<Label htmlFor={id} className="text-sm font-semibold text-text-primary">
				Gmail Address
			</Label>
			<InputGroup className="mt-2 h-11 rounded-lg border-border-secondary shadow-xs focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50">
				<InputGroupInput
					id={id}
					type="email"
					autoComplete="email"
					placeholder="username@gmail.com"
					value={field.state.value}
					onBlur={field.handleBlur}
					onChange={(e) => field.handleChange(e.target.value)}
					className="text-sm text-text-primary placeholder:text-text-quaternary"
				/>
				<InputGroupAddon align="inline-end" className="pr-3">
					<Lock className="size-4 text-text-tertiary" aria-hidden />
				</InputGroupAddon>
			</InputGroup>
			{field.state.meta.isTouched ? (
				<div className="mt-1 space-y-1">
					{errors.map((err) => (
						<p
							key={typeof err === 'string' ? err : err.message}
							className="text-destructive text-sm font-medium"
						>
							{typeof err === 'string' ? err : err.message}
						</p>
					))}
				</div>
			) : null}
		</div>
	);
}

function CreatePasswordPage() {
	const navigate = useNavigate();
	const form = useAppForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			// TODO: request OTP / start password setup API
			console.log('Create password submit', value);
			await navigate({
				to: '/verify-password-setup',
				search: { email: value.email },
			});
		},
	});

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-1">
				<Typography variant="h5" className="font-semibold text-text-primary">
					Create a Password
				</Typography>
				<Typography variant="small" className="font-normal text-text-secondary">
					Your account was created using Google. Add a password so you can sign
					in with email and password.
				</Typography>
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
					{() => <GmailLockField />}
				</form.AppField>

				<form.AppField
					name="password"
					validators={{ onBlur: passwordValidator }}
				>
					{(field) => (
						<field.PasswordField
							label="Password"
							placeholder="••••••••"
							helperText="Password must be 8+ chars & include special characters (e.g. @, #, $)"
						/>
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton
						label="Continue"
						className="btn-brand-1 h-11 w-full rounded-xl text-sm font-semibold"
					/>
				</form.AppForm>
			</form>

			<Typography
				variant="small"
				className="text-center font-normal text-text-secondary"
			>
				Made a typo?{' '}
				<Link
					to="/dashboard/security"
					className="font-semibold text-brand-200 underline hover:underline"
				>
					Return to Account
				</Link>
			</Typography>
		</div>
	);
}
