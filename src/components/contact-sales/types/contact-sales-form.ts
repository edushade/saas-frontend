export interface ContactFormValue {
	firstName: string;
	lastName: string;
	email: string;
	phoneCountry: string;
	phoneNumber: string;
	message: string;
	agreeTerms: boolean;
}

export const DEFAULT_CONTACT_FORM_VALUES: ContactFormValue = {
	firstName: "",
	lastName: "",
	email: "",
	phoneCountry: "+1",
	phoneNumber: "",
	message: "",
	agreeTerms: false,
};

export function getContactFormValidators() {
	return {
		onBlur: ({ value }: { value: ContactFormValue }) => {
			const errors: { fields: Record<string, string> } = { fields: {} };
			if (!value.firstName?.trim())
				errors.fields.firstName = "First name is required";
			if (!value.lastName?.trim())
				errors.fields.lastName = "Last name is required";
			if (!value.email?.trim()) errors.fields.email = "Email is required";
			else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email))
				errors.fields.email = "Invalid email address";
			if (!value.phoneNumber?.trim())
				errors.fields.phoneNumber = "Phone number is required";
			if (!value.agreeTerms)
				errors.fields.agreeTerms = "You must agree to the Terms & Conditions";
			return errors;
		},
	};
}
