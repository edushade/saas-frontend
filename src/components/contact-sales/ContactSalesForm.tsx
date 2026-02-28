import { Link } from "@tanstack/react-router";
import { parsePhoneNumber } from "react-phone-number-input";
import { Typography } from "@/components/ui-custom/typography";
import { useAppForm } from "@/hooks/form";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import {
	type ContactFormValue,
	DEFAULT_CONTACT_FORM_VALUES,
	getContactFormValidators,
} from "./types/contact-sales-form";

export interface ContactSalesFormProps {
	title?: string;
	note?: React.ReactNode;
	submitLabel?: string;
	termsLinkTo?: string;
	onSubmit?: (value: ContactFormValue) => void;
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
	className,
}: ContactSalesFormProps) {
	const form = useAppForm({
		defaultValues: DEFAULT_CONTACT_FORM_VALUES,
		validators: getContactFormValidators(),
		onSubmit: ({ value }) => {
			const parsed = value.phone?.trim()
				? parsePhoneNumber(value.phone)
				: undefined;
			const phoneCountry = parsed ? `+${parsed.countryCallingCode}` : "";
			const phoneNumber = parsed?.nationalNumber ?? "";
			onSubmit({
				...value,
				phoneCountry,
				phoneNumber,
			});
		},
	});

	return (
		<Card
			className={cn(
				"rounded-3xl relative border border-border-primary bg-[#FFFFFF99]",
				className,
			)}
		>
			<div
				aria-hidden
				className="pointer-events-none left-0 top-0 z-0 h-full w-full rounded-full bg-brand-100"
			/>
			<CardContent>
				{note && <p className="mb-2 text-sm text-text-tertiary">{note}</p>}
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
					<div className="space-y-2">
						<Label className="font-medium text-text-primary">Name</Label>
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<form.AppField
								name="firstName"
								validators={{
									onBlur: ({ value }) =>
										!value?.trim() ? "First name is required" : undefined,
								}}
							>
								{(field) => <field.TextField placeholder="First Name" />}
							</form.AppField>
							<form.AppField
								name="lastName"
								validators={{
									onBlur: ({ value }) =>
										!value?.trim() ? "Last name is required" : undefined,
								}}
							>
								{(field) => <field.TextField placeholder="Last Name" />}
							</form.AppField>
						</div>
					</div>

					<div className="space-y-2">
						<Label className="font-medium text-text-primary">
							Email Address
						</Label>
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
							{(field) => <field.TextField placeholder="name@example.com" />}
						</form.AppField>
					</div>

					<div className="space-y-2">
						<Label className="font-medium text-text-primary">
							Phone Number
						</Label>
						<form.AppField
							name="phone"
							validators={{
								onBlur: ({ value }) =>
									!value?.trim() ? "Phone number is required" : undefined,
							}}
						>
							{(field) => <field.PhoneInputField />}
						</form.AppField>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between gap-2">
							<Label className="font-medium text-text-primary">
								Your Message
							</Label>
							<span className="text-xs text-text-tertiary">Optional</span>
						</div>
						<form.AppField name="message">
							{(field) => <field.TextArea rows={6} suffix="Optional" />}
						</form.AppField>
					</div>

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
			</CardContent>
		</Card>
	);
}
