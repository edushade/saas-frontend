import { Eye, EyeOff } from 'lucide-react';
import { useId, useState } from 'react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group';
import { DashboardSettingsRow } from './dashboard-settings-row';

export type DashboardPasswordFieldProps = {
	id?: string;
	label: string;
	description: string;
	autoComplete?: string;
	defaultValue?: string;
	placeholder?: string;
};

export function DashboardPasswordField({
	id: idProp,
	label,
	description,
	autoComplete,
	defaultValue,
	placeholder,
}: DashboardPasswordFieldProps) {
	const reactId = useId();
	const id = idProp ?? reactId;
	const [visible, setVisible] = useState(false);

	return (
		<DashboardSettingsRow
			title={label}
			description={description}
			titleHtmlFor={id}
		>
			<InputGroup className="h-9">
				<InputGroupInput
					id={id}
					type={visible ? 'text' : 'password'}
					autoComplete={autoComplete}
					defaultValue={defaultValue}
					placeholder={placeholder}
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						type="button"
						variant="ghost"
						size="icon-sm"
						aria-label={visible ? 'Hide password' : 'Show password'}
						aria-pressed={visible}
						onClick={() => setVisible((v) => !v)}
					>
						{visible ? (
							<EyeOff className="size-4" />
						) : (
							<Eye className="size-4" />
						)}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</DashboardSettingsRow>
	);
}
