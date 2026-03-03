import {
	Editor,
	EditorContainer,
	EditorKit,
	Plate,
	usePlateEditor,
} from '@softimist/platejs';
import { useMemo } from 'react';

/**
 * Reusable Plate editor for forms. Follows Plate's form integration pattern:
 * uncontrolled editor, sync to form on onChange. See https://platejs.org/docs/form
 *
 * Accepts `value` as Plate Value (array) or JSON string; emits Plate Value in `onChange`.
 * Store in form as string (JSON.stringify) if your API expects string.
 */
export interface PlateLiteEditorProps {
	/** Current value: Plate Value (array of nodes) or JSON string. */
	value?: any;
	/** Called when content changes; receives Plate Value. Sync to form here (e.g. setValue / handleChange). */
	onChange?: (value: any) => void;
	placeholder?: string;
	className?: string;
	editorClassName?: string;
	readOnly?: boolean;
	autoFocus?: boolean;
	disabled?: boolean;
	minHeight?: string;
	/** Max height of the full component; only the editor body scrolls vertically. */
	maxHeight?: string;
}

export const PlateLiteEditor: React.FC<PlateLiteEditorProps> = ({
	value,
	onChange,
	placeholder = 'Start typing...',
	className,
	editorClassName,
	readOnly = false,
	disabled = false,
	minHeight = '200px',
	maxHeight = '50vh',
}) => {
	const EMPTY_PLATE_VALUE = [{ type: 'p', children: [{ text: '' }] }];

	const safeValue = useMemo(() => {
		if (!value || (Array.isArray(value) && value.length === 0)) {
			return EMPTY_PLATE_VALUE;
		}
		if (typeof value === 'string') {
			try {
				return JSON.parse(value);
			} catch {
				return EMPTY_PLATE_VALUE;
			}
		}
		return value;
	}, [value]);

	const editor = usePlateEditor({
		plugins: EditorKit,
		value: safeValue,
		readOnly,
	});

	return (
		<div
			className="flex h-full w-full flex-col rounded-lg border border-border bg-bg-primary overflow-hidden"
			style={{ minHeight, maxHeight, height: maxHeight }}
		>
			<Plate
				editor={editor}
				onValueChange={({ value }: { value: any }) => {
					onChange?.(value);
				}}
			>
				<EditorContainer className={` ${className ?? ''}`}>
					<Editor
						placeholder={placeholder}
						className={`pl-12 pr-4 py-3 w-full h-full  bg-bg-tertiary focus:outline-none [&>*:first-child]:text-justify ${editorClassName ?? ''}`}
						disabled={disabled}
					/>
				</EditorContainer>
			</Plate>
		</div>
	);
};
