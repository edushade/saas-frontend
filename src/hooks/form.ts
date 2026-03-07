import { createFormHook } from '@tanstack/react-form';

import {
	Checkbox,
	PasswordField,
	PhoneInputField,
	Select,
	SubscribeButton,
	TextArea,
	TextField,
} from '../components/ui-custom/FormTanstack';
import { fieldContext, formContext } from './form-context';

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		PasswordField,
		Select,
		TextArea,
		Checkbox,
		PhoneInputField,
	},
	formComponents: {
		SubscribeButton,
	},
	fieldContext,
	formContext,
});
