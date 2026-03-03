'use client';

import { Upload } from 'lucide-react';
import { useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const DEFAULT_ACCEPT = 'image/*';
const DEFAULT_MAX = 2;

export interface ThumbnailUploaderProps {
	/** Current thumbnail URLs (object URLs or external URLs). Parent must pass an array. */
	value: string[];
	onChange: (urls: string[]) => void;
	selectedIndex: number;
	onSelectedIndexChange: (index: number) => void;
	maxThumbnails?: number;
	accept?: string;
	className?: string;
}

/**
 * Reusable controlled thumbnail uploader. Accepts image files and exposes URLs via onChange.
 * Parent is responsible for storing value and passing it back; this component does not hold state.
 */
export function ThumbnailUploader({
	value,
	onChange,
	selectedIndex,
	onSelectedIndexChange,
	maxThumbnails = DEFAULT_MAX,
	accept = DEFAULT_ACCEPT,
	className,
}: ThumbnailUploaderProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const addFiles = useCallback(
		(files: FileList | null) => {
			if (!files?.length) return;
			const imageFiles = Array.from(files).filter((f) =>
				f.type.startsWith('image/'),
			);
			const toAddCount = Math.min(
				imageFiles.length,
				Math.max(0, maxThumbnails - value.length),
			);
			if (toAddCount === 0) return;
			const toAdd = imageFiles.slice(0, toAddCount);
			const newUrls = toAdd.map((f) => URL.createObjectURL(f));
			const combined = [...value, ...newUrls].slice(0, maxThumbnails);
			onChange(combined);
			onSelectedIndexChange(value.length);
		},
		[maxThumbnails, value, onChange, onSelectedIndexChange],
	);

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		addFiles(e.target.files);
		e.target.value = '';
	};

	const onDrop = (e: React.DragEvent) => {
		e.preventDefault();
		addFiles(e.dataTransfer.files);
	};

	const onDragOver = (e: React.DragEvent) => e.preventDefault();

	const slotCount = maxThumbnails;

	return (
		<div
			className={cn(
				'flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-3',
				className,
			)}
		>
			<Card
				role="button"
				tabIndex={0}
				aria-label="Upload Image or drag and drop here"
				onClick={(e) => {
					e.preventDefault();
					fileInputRef.current?.click();
				}}
				onDrop={onDrop}
				onDragOver={onDragOver}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						fileInputRef.current?.click();
					}
				}}
				className={cn(
					'flex h-[88px] w-full max-w-[156px] shrink-0 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-border-secondary bg-bg-secondary/50 px-2 py-2 transition-colors hover:border-brand-300 hover:bg-bg-secondary',
				)}
			>
				<Upload className="size-6 text-text-tertiary" aria-hidden />
				<span className="text-center text-[10px] font-medium leading-tight text-text-secondary">
					<span className="text-text-primary text-xs font-semibold block w-full">
						Upload Image
					</span>
					<span className="text-text-secondary text-[10px] font-normal block w-full	">
						or drag and drop here
					</span>
				</span>
			</Card>
			<input
				ref={fileInputRef}
				type="file"
				accept={accept}
				multiple
				className="hidden"
				onChange={onFileChange}
				aria-hidden
			/>
			<div className="flex flex-wrap gap-3 sm:flex-nowrap">
				{Array.from({ length: slotCount }, (_, i) => (
					<Button
						key={i}
						type="button"
						variant="outline"
						size="icon"
						className={cn(
							'h-[88px] w-full max-w-[156px] min-w-[156px] shrink-0 overflow-hidden rounded-lg border-2 p-0 bg-bg-secondary transition-colors hover:bg-bg-secondary',
							selectedIndex === i && value[i]
								? 'border-brand-300 ring-2 ring-brand-300/30'
								: 'border-border-secondary hover:border-border-primary',
						)}
						onClick={() => value[i] && onSelectedIndexChange(i)}
						disabled={!value[i]}
						aria-label={
							value[i]
								? `Select thumbnail ${i + 1}`
								: `Thumbnail slot ${i + 1} empty`
						}
					>
						{value[i] ? (
							<img src={value[i]} alt="" className="size-full object-cover" />
						) : (
							<div className="size-full bg-bg-tertiary" aria-hidden />
						)}
					</Button>
				))}
			</div>
		</div>
	);
}
