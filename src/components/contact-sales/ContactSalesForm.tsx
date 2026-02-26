import { Link } from "@tanstack/react-router";
import { Typography } from "@/components/ui-custom/typography";
import { PHONE_COUNTRY_CODES } from "@/constants/contact-sales";
import { useAppForm } from "@/hooks/form";
import { cn } from "@/lib/utils";
import {
	type ContactFormValue,
	DEFAULT_CONTACT_FORM_VALUES,
	getContactFormValidators,
} from "./types/contact-sales-form";

export interface ContactSalesFormProps {
	title?: string;
	/** Optional note text above the form title (e.g. response time) */
	note?: React.ReactNode;
	submitLabel?: string;
	termsLinkTo?: string;
	onSubmit?: (value: ContactFormValue) => void;
	countryCodeOptions?: Array<{ label: string; value: string }>;
	className?: string;
}

const defaultOnSubmit = (value: ContactFormValue) => {
	console.log("Contact sales submit", value);
	alert("Message sent! We'll get back to you soon.");
};

export function ContactSalesForm({
	title = "Please fill out the form",
	note,
	submitLabel = "Send Message",
	termsLinkTo = "/",
	onSubmit = defaultOnSubmit,
	countryCodeOptions = PHONE_COUNTRY_CODES,
	className,
}: ContactSalesFormProps) {
	const form = useAppForm({
		defaultValues: DEFAULT_CONTACT_FORM_VALUES,
		validators: getContactFormValidators(),
		onSubmit: ({ value }) => onSubmit(value),
	});

	return (
		<div
			className={cn(
				"rounded-3xl border border-border-primary bg-bg-primary p-6 shadow-lg md:p-8",
				className,
			)}
		>
			{note && (
				<p className="mb-2 text-sm text-text-tertiary">{note}</p>
			)}
			<Typography variant="h6" className="mb-6 font-medium text-text-primary">
				{title}
			</Typography>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="flex flex-col gap-5"
			>
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
					<form.AppField
						name="firstName"
						validators={{
							onBlur: ({ value }) =>
								!value?.trim() ? "First name is required" : undefined,
						}}
					>
						{(field) => (
							<field.TextField label="First Name" placeholder="First Name" />
						)}
					</form.AppField>
					<form.AppField
						name="lastName"
						validators={{
							onBlur: ({ value }) =>
								!value?.trim() ? "Last name is required" : undefined,
						}}
					>
						{(field) => (
							<field.TextField label="Last Name" placeholder="Last Name" />
						)}
					</form.AppField>
				</div>

				<form.AppField
					name="email"
					validators={{
						onBlur: ({ value }) => {
							if (!value?.trim()) return "Email is required";
							if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
								return "Invalid email address";
							return undefined;
						},
					}}
				>
					{(field) => (
						<field.TextField
							label="Email Address"
							placeholder="name@example.com"
						/>
					)}
				</form.AppField>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto_1fr]">
					<form.AppField name="phoneCountry">
						{(field) => (
							<field.Select
								label="Country"
								values={countryCodeOptions}
								placeholder="+1"
							/>
						)}
					</form.AppField>
					<form.AppField
						name="phoneNumber"
						validators={{
							onBlur: ({ value }) =>
								!value?.trim() ? "Phone number is required" : undefined,
						}}
					>
						{(field) => (
							<field.TextField
								label="Phone Number"
								placeholder="--- --- ----"
							/>
						)}
					</form.AppField>
				</div>

				<form.AppField name="message">
					{(field) => (
						<field.TextArea label="Your Message" rows={4} suffix="Optional" />
					)}
				</form.AppField>

				<form.AppField
					name="agreeTerms"
					validators={{
						onBlur: ({ value }) =>
							!value ? "You must agree to the Terms & Conditions" : undefined,
					}}
				>
					{(field) => (
						<field.Checkbox>
							I have read and agree to the{" "}
							<Link
								to={termsLinkTo}
								className="text-brand-300 underline underline-offset-2 hover:no-underline"
							>
								Terms & Conditions
							</Link>
						</field.Checkbox>
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton
						label={submitLabel}
						className="btn-brand-1 w-full"
					/>
				</form.AppForm>
			</form>
		</div>
	);
}
