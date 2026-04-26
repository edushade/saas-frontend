import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { parsePhoneNumber } from 'react-phone-number-input';
import { Typography } from '@/components/ui-custom/typography';
import { useAppForm } from '@/hooks/form';
import { cn } from '@/lib/utils';
import {
	type ContactFormValue,
	DEFAULT_CONTACT_FORM_VALUES,
	getContactFormValidators,
} from '../../lib/contact-sales/contact-sales-form';
import { Card, CardContent } from '../ui/card';
import { Label } from '../ui/label';

export interface ContactSalesFormProps {
	title?: string;
	note?: React.ReactNode;
	submitLabel?: string;
	termsLinkTo?: string;
	onSubmit?: (value: ContactFormValue) => void;
	contactApiUrl?: string;
	className?: string;
}

const defaultOnSubmit = (value: ContactFormValue) => {
	console.log('Contact sales submit', value);
	alert("Message sent! We'll get back to you soon.");
};

export function ContactSalesForm({
	title = 'Please fill out the form',
	note,
	submitLabel = 'Send Message',
	termsLinkTo = '/terms-of-service',
	onSubmit = defaultOnSubmit,
	contactApiUrl = '/api/contact',
	className = 'bg-[#FFFFFF99] border-none shadow-none',
}: ContactSalesFormProps) {
	const [submitError, setSubmitError] = useState<string | null>(null);

	const form = useAppForm({
		defaultValues: DEFAULT_CONTACT_FORM_VALUES,
		validators: getContactFormValidators(),
		onSubmit: async ({ value }) => {
			setSubmitError(null);
			const parsed = value.phone?.trim()
				? parsePhoneNumber(value.phone)
				: undefined;
			const phoneCountry = parsed ? `+${parsed.countryCallingCode}` : '';
			const phoneNumber = parsed?.nationalNumber ?? '';
			const payload: ContactFormValue = {
				...value,
				phoneCountry,
				phoneNumber,
			};

			try {
				const res = await fetch(contactApiUrl, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				});
				const data = (await res.json().catch(() => ({}))) as {
					ok?: boolean;
					message?: string;
				};

				if (!res.ok) {
					setSubmitError(
						data?.message ?? 'Something went wrong. Please try again.',
					);
					return;
				}
				if (data?.ok === true) {
					onSubmit(payload);
					return;
				}
				setSubmitError(data?.message ?? 'Message could not be sent.');
			} catch {
				setSubmitError('Network error. Please try again.');
			}
		},
	});

	return (
		<Card
			className={cn(
				'rounded-3xl relative border border-border-primary',
				className,
			)}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full rounded-full bg-brand-100 opacity-50"
			/>
			<CardContent className="flex flex-col gap-4">
				{note && <p className="mb-2 text-sm text-text-tertiary">{note}</p>}
				<Typography variant="h6" className="font-medium text-text-primary">
					{title}
				</Typography>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
					className="flex flex-col gap-2 md:gap-6"
				>
					<div className="space-y-2">
						<Label className="font-medium text-text-primary">Name</Label>
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<form.AppField
								name="firstName"
								validators={{
									onSubmit: ({ value }) =>
										!value?.trim() ? 'First name is required' : undefined,
								}}
							>
								{(field) => <field.TextField placeholder="First Name" />}
							</form.AppField>
							<form.AppField
								name="lastName"
								validators={{
									onSubmit: ({ value }) =>
										!value?.trim() ? 'Last name is required' : undefined,
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
								onSubmit: ({ value }) => {
									if (!value?.trim()) return 'Email is required';
									if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
										return 'Invalid email address';
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
								onSubmit: ({ value }) =>
									!value?.trim() ? 'Phone number is required' : undefined,
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
							{(field) => <field.TextArea suffix="Optional" />}
						</form.AppField>
					</div>

					<form.AppField
						name="agreeTerms"
						validators={{
							onSubmit: ({ value }) =>
								!value ? 'You must agree to the Terms & Conditions' : undefined,
						}}
					>
						{(field) => (
							<field.Checkbox>
								<Link to={termsLinkTo} className="hover:underline">
									<span>I have read and agree to the</span>{' '}
									<span className="text-brand-300">Terms & Conditions</span>
								</Link>
							</field.Checkbox>
						)}
					</form.AppField>

					{submitError && (
						<p className="text-sm font-medium text-destructive" role="alert">
							{submitError}
						</p>
					)}

					<form.AppForm>
						<form.SubscribeButton
							label={submitLabel}
							className="btn-brand-1 w-full hover:bg-brand-300/80"
						/>
					</form.AppForm>
				</form>
			</CardContent>
		</Card>
	);
}
