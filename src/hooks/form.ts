import { createFormHook } from "@tanstack/react-form";

import {
	Checkbox,
	PhoneInputField,
	Select,
	SubscribeButton,
	TextArea,
	TextField,
} from "../components/ui-custom/FormTanstack";
import { fieldContext, formContext } from "./form-context";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
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
