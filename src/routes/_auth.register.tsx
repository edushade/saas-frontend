import { createFileRoute, Link } from "@tanstack/react-router";
import { useAppForm } from "@/hooks/form";
import { getSiteOrigin } from "@/env";

export const Route = createFileRoute("/_auth/register")({
	head: () => ({
		meta: [
			{ title: "Create account | Edushade" },
			{ name: "description", content: "Create your Edushade account." },
		],
		links: [{ rel: "canonical", href: `${getSiteOrigin()}/register` }],
	}),
	component: RegisterPage,
});

const defaultValues = {
	fullName: "",
	email: "",
	password: "",
};

function fullNameValidator({ value }: { value: string }) {
	if (!value?.trim()) return "Full name is required";
	return undefined;
}

function emailValidator({ value }: { value: string }) {
	if (!value?.trim()) return "Email is required";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email address";
	return undefined;
}

function passwordValidator({ value }: { value: string }) {
	if (!value?.trim()) return "Password is required";
	if (value.length < 8) return "Password must be at least 8 characters";
	return undefined;
}

function RegisterPage() {
	const form = useAppForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			// TODO: call registration API
			console.log("Register submit", value);
		},
	});

	return (
		<div className="flex flex-col gap-6">
			<div className="text-center">
				<Link to="/" className="inline-block" aria-label="Edushade home">
					<img src="/svgs/logo.svg" alt="" className="h-9 w-auto mx-auto" />
				</Link>
				<h1 className="mt-4 text-xl font-semibold text-text-primary">
					Create account
				</h1>
				<p className="mt-1 text-sm text-text-secondary">
					Get started with your Edushade platform.
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
				<form.AppField
					name="fullName"
					validators={{ onBlur: fullNameValidator }}
				>
					{(field) => (
						<field.TextField
							label="Full name"
							type="text"
							placeholder="Jane Doe"
						/>
					)}
				</form.AppField>
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
						label="Create account"
						className="btn-brand-1 rounded-xl w-full"
					/>
				</form.AppForm>
			</form>
			<p className="text-center text-sm text-text-secondary">
				Already have an account?{" "}
				<Link
					to="/login"
					className="font-medium text-brand-200 hover:underline"
				>
					Log in
				</Link>
			</p>
		</div>
	);
}
