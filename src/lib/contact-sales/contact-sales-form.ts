export interface ContactFormValue {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	phoneCountry: string;
	phoneNumber: string;
	message: string;
	agreeTerms: boolean;
}

export const DEFAULT_CONTACT_FORM_VALUES: ContactFormValue = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	phoneCountry: 'US',
	phoneNumber: '',
	message: '',
	agreeTerms: false,
};

export function getContactFormValidators() {
	return {
		onSubmit: ({ value }: { value: ContactFormValue }) => {
			const errors: { fields: Record<string, string> } = { fields: {} };
			if (!value.firstName?.trim())
				errors.fields.firstName = 'First name is required';
			if (!value.lastName?.trim())
				errors.fields.lastName = 'Last name is required';
			if (!value.email?.trim()) errors.fields.email = 'Email is required';
			else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email))
				errors.fields.email = 'Invalid email address';
			if (!value.phone?.trim())
				errors.fields.phone = 'Phone number is required';
			if (!value.message?.trim())
				errors.fields.message = 'Message is required';
			if (!value.agreeTerms)
				errors.fields.agreeTerms = 'You must agree to the Terms & Conditions';
			return errors;
		},
	};
}
