import { Slot } from "@radix-ui/react-slot";
import type {
	DeepKeys,
	DeepValue,
	FieldApi,
	ReactFormExtendedApi,
} from "@tanstack/react-form";
import { functionalUpdate, useField, type Validator } from "@tanstack/react-form";
import type { UseFieldOptions } from "node_modules/@tanstack/react-form/dist/esm/types";
import type { Label as LabelPrimitive } from "radix-ui";
import type { FormEvent } from "react";
import React from "react";

import { cn } from "@/lib/utils";

import { Label } from "./label";

type FormFieldContextValue<
	TParentData,
	TName extends DeepKeys<TParentData>,
	TFieldValidator extends
		| Validator<DeepValue<TParentData, TName>, unknown>
		| undefined = undefined,
	TFormValidator extends
		| Validator<TParentData, unknown>
		| undefined = undefined,
	TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = FieldApi<TParentData, TName, TFieldValidator, TFormValidator, TData>;

const FormFieldContext = React.createContext<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	FormFieldContextValue<any, any, any, any, any>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
>({} as FormFieldContextValue<any, any, any, any, any>);

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext);
	const itemContext = React.useContext(FormItemContext);

	if (!fieldContext) {
		throw new Error("useFormField should be used within <FormItem>");
	}
	const { id } = itemContext;
	return {
		id,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...{
			fieldContext,
		},
	};
};

type FieldComponentProps<
	TParentData,
	TName extends DeepKeys<TParentData>,
	TFieldValidator extends
		| Validator<DeepValue<TParentData, TName>, unknown>
		| undefined = undefined,
	TFormValidator extends
		| Validator<TParentData, unknown>
		| undefined = undefined,
	TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = {
	render: (
		fieldApi: FieldApi<
			TParentData,
			TName,
			TFieldValidator,
			TFormValidator,
			TData
		>,
	) => React.ReactNode;
} & UseFieldOptions<TParentData, TName, TFieldValidator, TFormValidator, TData>;

export const FormField = (<
	TParentData,
	TName extends DeepKeys<TParentData>,
	TFieldValidator extends
		| Validator<DeepValue<TParentData, TName>, unknown>
		| undefined = undefined,
	TFormValidator extends
		| Validator<TParentData, unknown>
		| undefined = undefined,
	TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
>({
	render,
	...fieldOptions
}: FieldComponentProps<
	TParentData,
	TName,
	TFieldValidator,
	TFormValidator,
	TData
>): React.ReactNode => {
	const fieldApi = useField(fieldOptions);
	const jsxToDisplay = React.useMemo(
		() => functionalUpdate(render, fieldApi),

		// eslint-disable-next-line react-hooks/exhaustive-deps
		[render, fieldApi, fieldApi.state.value, fieldApi.state.meta],
	);

	return (
		<React.Fragment>
			<FormFieldContext value={fieldApi}>{jsxToDisplay}</FormFieldContext>
		</React.Fragment>
	);
}) satisfies React.FunctionComponent<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	FieldComponentProps<any, any, any, any, any>
>;
type FormContextValue = {
	id: string;
};
const FormItemContext = React.createContext<FormContextValue>(
	{} as FormContextValue,
);
export const FormItem: React.FC<React.ComponentProps<"div">> = ({
	className,
	...props
}) => {
	const id = React.useId();

	return (
		<FormItemContext value={{ id }}>
			<div className={cn("space-y-2", className)} {...props} />
		</FormItemContext>
	);
};
export const FormLabel: React.FC<
	React.ComponentPropsWithRef<typeof LabelPrimitive.Root>
> = ({ className, ...props }) => {
	const { formItemId, fieldContext } = useFormField();

	return (
		<Label
			className={cn(
				fieldContext.state.meta.errors.length && "text-destructive",
				className,
			)}
			htmlFor={formItemId}
			{...props}
		/>
	);
};

export const FormControl: React.FC<
	React.ComponentPropsWithRef<typeof Slot>
> = ({ ...props }) => {
	const { formItemId, formDescriptionId, fieldContext } = useFormField();

	return (
		<Slot
			id={formItemId}
			aria-describedby={
				fieldContext.state.meta.errors.length
					? `${formDescriptionId} ${fieldContext.state.meta.errors.join(", ")}`
					: `${formDescriptionId}`
			}
			aria-invalid={!!fieldContext.state.meta.errors.length}
			{...props}
		/>
	);
};

export const FormDescription: React.FC<React.ComponentPropsWithRef<"p">> = ({
	className,
	...props
}) => {
	const { formDescriptionId } = useFormField();

	return (
		<p
			id={formDescriptionId}
			className={cn("text-[0.8rem] text-muted-foreground", className)}
			{...props}
		/>
	);
};

export const FormMessage: React.FC<React.ComponentPropsWithRef<"p">> = ({
	className,
	children,
	...props
}) => {
	const { formMessageId, fieldContext } = useFormField();
	const body = fieldContext.state.meta.errors.length
		? fieldContext.state.meta.errors.join(", ")
		: children;

	if (!body) return null;

	return (
		<p
			id={formMessageId}
			className={cn("text-[0.8rem] font-medium text-destructive", className)}
			{...props}
		>
			{body}
		</p>
	);
};

export const FormButton = <
	TFormData,
	TFormValidator extends Validator<TFormData, unknown> | undefined = undefined,
>({
	form,
	children,
}: {
	form: ReactFormExtendedApi<TFormData, TFormValidator>;
	children: (state: {
		canSubmit: boolean;
		isSubmitting: boolean;
	}) => React.ReactNode;
}) => {
	return (
		<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
			{([canSubmit, isSubmitting]) => children({ canSubmit, isSubmitting })}
		</form.Subscribe>
	);
};

const Form = <
	TFormData,
	TFormValidator extends Validator<TFormData, unknown> | undefined = undefined,
>({
	onSubmit,
	form,
	...props
}: React.ComponentPropsWithRef<"form"> & {
	form: ReactFormExtendedApi<TFormData, TFormValidator>;
}) => {
	const handleSubmit = React.useCallback(
		(event: FormEvent) => {
			event.preventDefault();
			event.stopPropagation();
			form.handleSubmit();
		},
		[form],
	);
	return (
		<form
			onSubmit={typeof onSubmit === "undefined" ? handleSubmit : onSubmit}
			{...props}
		/>
	);
};

export default Form;
