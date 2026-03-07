import { useStore } from '@tanstack/react-form';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import * as ShadcnSelect from '@/components/ui/select';
import { Slider as ShadcnSlider } from '@/components/ui/slider';
import { Switch as ShadcnSwitch } from '@/components/ui/switch';
import { Textarea as ShadcnTextarea } from '@/components/ui/textarea';
import { PhoneInput } from '@/components/ui-custom/phone-input';
import { useFieldContext, useFormContext } from '@/hooks/form-context';
import { cn } from '@/lib/utils';

const INPUT_BASE =
	'h-11 rounded-lg text-sm text-text-primary placeholder:text-text-quaternary border-border-secondary';

export function SubscribeButton({
	label,
	className,
}: {
	label: string;
	className?: string;
}) {
	const form = useFormContext();
	return (
		<form.Subscribe selector={(state) => state.isSubmitting}>
			{(isSubmitting) => (
				<Button type="submit" disabled={isSubmitting} className={className}>
					{label}
				</Button>
			)}
		</form.Subscribe>
	);
}

function ErrorMessages({
	errors,
}: {
	errors: Array<string | { message: string }>;
}) {
	return (
		<>
			{errors.map((error) => (
				<div
					key={typeof error === 'string' ? error : error.message}
					className="mt-1 font-medium text-destructive text-sm"
				>
					{typeof error === 'string' ? error : error.message}
				</div>
			))}
		</>
	);
}

export function PhoneInputField() {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);
	const value = field.state.value || undefined;

	return (
		<div>
			<PhoneInput
				value={value || undefined}
				onChange={(val) => field.handleChange(val ?? '')}
				onBlur={field.handleBlur}
				defaultCountry="US"
				placeholder="Enter phone number"
				className="w-full text-sm text-text-primary h-11 border-border-secondary"
			/>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}

export function TextField({
	label,
	placeholder,
	type = 'text',
	className,
	suffix,
}: {
	label?: string;
	placeholder?: string;
	type?: 'text' | 'email' | 'password';
	className?: string;
	suffix?: React.ReactNode;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);
	const id = field.name;

	return (
		<div>
			{label && (
				<div className="mb-2 flex items-center justify-between gap-2">
					<Label
						htmlFor={id}
						className="text-sm text-text-primary font-semibold"
					>
						{label}
					</Label>
					{suffix && <span>{suffix}</span>}
				</div>
			)}
			<Input
				id={id}
				type={type}
				value={field.state.value}
				placeholder={placeholder}
				onBlur={field.handleBlur}
				className={cn(INPUT_BASE, className)}
				onChange={(e) => field.handleChange(e.target.value)}
			/>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}

export function PasswordField({
	label,
	placeholder,
	suffix,
	helperText,
}: {
	label?: string;
	placeholder?: string;
	suffix?: React.ReactNode;
	helperText?: string;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);
	const id = field.name;
	const [show, setShow] = React.useState(false);

	return (
		<div>
			{label && (
				<div className="mb-2 flex items-center justify-between gap-2">
					<Label
						htmlFor={id}
						className="text-sm text-text-primary font-semibold"
					>
						{label}
					</Label>
					{suffix && <span>{suffix}</span>}
				</div>
			)}
			<InputGroup
				className={cn(
					'rounded-lg border-border-secondary',
					'h-11 focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:border-ring',
				)}
			>
				<InputGroupInput
					id={id}
					type={show ? 'text' : 'password'}
					value={field.state.value}
					placeholder={placeholder ?? '••••••••'}
					onBlur={field.handleBlur}
					onChange={(e) => field.handleChange(e.target.value)}
					className="text-sm text-text-primary placeholder:text-text-quaternary h-full"
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						type="button"
						onClick={() => setShow((prev) => !prev)}
						aria-label={show ? 'Hide password' : 'Show password'}
						className="text-text-tertiary hover:text-text-primary"
					>
						{show ? (
							<EyeOff className="size-4" aria-hidden />
						) : (
							<Eye className="size-4" aria-hidden />
						)}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
			{helperText && (
				<p className="mt-1 text-xs text-text-tertiary">{helperText}</p>
			)}
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}

export function TextArea({
	label,
	rows = 3,
	suffix,
	placeholder,
}: {
	label?: string;
	rows?: number;
	suffix?: React.ReactNode;
	placeholder?: string;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<div>
			{label && (
				<div className="mb-2 flex items-center justify-between gap-2">
					<Label
						htmlFor={label}
						className="text-sm text-text-primary font-semibold"
					>
						{label}
					</Label>
					{suffix && (
						<span className="text-xs text-text-tertiary">{suffix}</span>
					)}
				</div>
			)}
			<ShadcnTextarea
				id={label}
				value={field.state.value}
				placeholder={placeholder}
				onBlur={field.handleBlur}
				rows={rows}
				onChange={(e) => field.handleChange(e.target.value)}
				className="resize-none min-h-[180px] max-h-[180px]"
			/>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}

export function Select({
	label,
	values,
	placeholder,
}: {
	label: string;
	values: Array<{ label: string; value: string }>;
	placeholder?: string;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<div>
			<ShadcnSelect.Select
				name={field.name}
				value={field.state.value}
				onValueChange={(value) => field.handleChange(value)}
			>
				<ShadcnSelect.SelectTrigger className="w-full">
					<ShadcnSelect.SelectValue placeholder={placeholder} />
				</ShadcnSelect.SelectTrigger>
				<ShadcnSelect.SelectContent className="bg-background text-foreground">
					<ShadcnSelect.SelectGroup>
						{label ? (
							<ShadcnSelect.SelectLabel>{label}</ShadcnSelect.SelectLabel>
						) : null}
						{values.map((value) => (
							<ShadcnSelect.SelectItem
								key={value.value}
								value={value.value}
								className="text-foreground"
							>
								{value.label}
							</ShadcnSelect.SelectItem>
						))}
					</ShadcnSelect.SelectGroup>
				</ShadcnSelect.SelectContent>
			</ShadcnSelect.Select>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}

export function Slider({ label }: { label?: string }) {
	const field = useFieldContext<number>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<div>
			{label && (
				<Label htmlFor={label} className="mb-2 text-xl font-bold">
					{label}
				</Label>
			)}
			<ShadcnSlider
				id={label}
				onBlur={field.handleBlur}
				value={[field.state.value]}
				onValueChange={(value) => field.handleChange(value[0])}
			/>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}

export function Switch({ label }: { label: string }) {
	const field = useFieldContext<boolean>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<div>
			<div className="flex items-center gap-2">
				<ShadcnSwitch
					id={label}
					onBlur={field.handleBlur}
					checked={field.state.value}
					onCheckedChange={(checked) => field.handleChange(checked)}
				/>
				<Label htmlFor={label}>{label}</Label>
			</div>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}

export function Checkbox({
	className,
	label,
	children,
}: {
	className?: string;
	label?: string;
	children?: React.ReactNode;
}) {
	const field = useFieldContext<boolean>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<div>
			<div className={cn('flex items-center gap-2', className)}>
				<ShadcnCheckbox
					id={field.name}
					checked={field.state.value}
					onCheckedChange={(checked) => field.handleChange(checked === true)}
					onBlur={field.handleBlur}
				/>
				<Label
					htmlFor={field.name}
					className="text-sm text-text-primary font-medium cursor-pointer"
				>
					{children ?? label}
				</Label>
			</div>
			{field.state.meta.isTouched && <ErrorMessages errors={errors} />}
		</div>
	);
}
