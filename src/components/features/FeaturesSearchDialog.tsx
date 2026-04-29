import { useNavigate } from '@tanstack/react-router';
import { Command as CommandPrimitive } from 'cmdk';
import { ArrowRight, CornerDownLeft, Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { Kbd } from '@/components/ui/kbd';
import {
	Popover,
	PopoverAnchor,
	PopoverContent,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FEATURES_GROUPS } from '@/constants/nav';
import { cn } from '@/lib/utils';

const GROUP_COLORS: Record<
	string,
	{ dot: string; label: string; chipBg: string; chipText: string }
> = {
	'Build Learning': {
		dot: 'bg-brand-300',
		label: 'text-brand-300',
		chipBg: 'bg-brand-200/10',
		chipText: 'text-brand-300',
	},
	'Deliver & Engage': {
		dot: 'bg-amber-500',
		label: 'text-amber-600',
		chipBg: 'bg-amber-500/10',
		chipText: 'text-amber-700',
	},
	'Manage Roles': {
		dot: 'bg-violet-500',
		label: 'text-violet-600',
		chipBg: 'bg-violet-500/10',
		chipText: 'text-violet-700',
	},
	'Track and Measure': {
		dot: 'bg-emerald-500',
		label: 'text-emerald-600',
		chipBg: 'bg-emerald-500/10',
		chipText: 'text-emerald-700',
	},
};

const FALLBACK_COLORS = {
	dot: 'bg-text-tertiary',
	label: 'text-text-primary',
	chipBg: 'bg-bg-secondary',
	chipText: 'text-text-secondary',
};

interface FeaturesSearchDialogProps {
	className?: string;
}

export function FeaturesSearchDialog({ className }: FeaturesSearchDialogProps) {
	const navigate = useNavigate();
	const [query, setQuery] = useState('');
	const [open, setOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				inputRef.current?.focus();
			}
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	const q = query.trim().toLowerCase();
	const hasQuery = q.length > 0;

	const groups = useMemo(
		() =>
			FEATURES_GROUPS.map((group) => ({
				title: group.title,
				items: q
					? group.items.filter(
							(item) =>
								item.label.toLowerCase().includes(q) ||
								item.description.toLowerCase().includes(q),
						)
					: group.items,
			})).filter((group) => group.items.length > 0),
		[q],
	);

	const totalResults = groups.reduce((sum, g) => sum + g.items.length, 0);
	const hasResults = totalResults > 0;

	const handleSelect = (href: string) => {
		setOpen(false);
		setQuery('');
		navigate({ to: href });
	};

	return (
		<Popover open={open && hasQuery} onOpenChange={setOpen}>
			<Command
				shouldFilter={false}
				className={cn('bg-transparent overflow-visible mx-auto', className)}
			>
				<PopoverAnchor asChild>
					<div
						className={cn(
							'flex items-center gap-3 rounded-xl border border-border-secondary bg-bg-primary px-5 py-4 shadow-xs transition-shadow hover:shadow-md focus-within:shadow-md',
							open && hasQuery && 'rounded-b-none border-b-0 shadow-md',
						)}
					>
						<Search
							className="size-5 shrink-0 text-text-tertiary"
							aria-hidden
						/>
						<CommandPrimitive.Input
							ref={inputRef}
							value={query}
							onValueChange={(v) => {
								setQuery(v);
								setOpen(true);
							}}
							onFocus={() => setOpen(true)}
							onKeyDown={(e) => {
								if (e.key === 'Escape') {
									e.preventDefault();
									if (query) {
										setQuery('');
									} else {
										setOpen(false);
										inputRef.current?.blur();
									}
								}
							}}
							placeholder="Search features…"
							aria-label="Search features"
							className="flex-1 bg-transparent text-base font-normal text-text-primary placeholder:text-text-quaternary focus:outline-none"
						/>
						{hasQuery && (
							<button
								type="button"
								onClick={() => {
									setQuery('');
									inputRef.current?.focus();
								}}
								aria-label="Clear search"
								className="flex size-7 items-center justify-center rounded-md text-text-tertiary hover:bg-bg-secondary hover:text-text-primary"
							>
								<X className="size-4" />
							</button>
						)}
						<Kbd className="h-7 px-2 bg-bg-primary text-text-secondary border border-border-secondary">
							⌘ K
						</Kbd>
					</div>
				</PopoverAnchor>

				<PopoverContent
					align="start"
					sideOffset={-1}
					onOpenAutoFocus={(e) => e.preventDefault()}
					onCloseAutoFocus={(e) => e.preventDefault()}
					className="w-(--radix-popover-trigger-width) p-0 rounded-t-none rounded-b-xl border border-t-0 border-border-secondary bg-bg-primary shadow-lg overflow-hidden"
				>
					<div className="flex items-center justify-between border-b border-border-secondary bg-bg-secondary/60 px-5 py-2.5 text-xs text-text-tertiary">
						<span className="font-medium">
							{totalResults} {totalResults === 1 ? 'feature' : 'features'} found
						</span>
						<span className="hidden sm:flex items-center gap-2">
							<span className="inline-flex items-center gap-1">
								<span aria-hidden>↑↓</span>
								<span>navigate</span>
							</span>
							<span aria-hidden>·</span>
							<span className="inline-flex items-center gap-1">
								<CornerDownLeft className="size-3" aria-hidden />
								<span>select</span>
							</span>
							<span aria-hidden>·</span>
							<span className="inline-flex items-center gap-1">
								<span>esc</span>
								<span>close</span>
							</span>
						</span>
					</div>

					<ScrollArea className="h-[min(70vh,580px)] [&>[data-slot=scroll-area-viewport]>div]:block!">
						<CommandList className="max-h-none overflow-visible py-2 px-2">
							<CommandEmpty className="py-12 text-center text-sm text-text-tertiary">
								No features found for “{query}”.
							</CommandEmpty>

							{groups.map((group) => {
								const colors = GROUP_COLORS[group.title] ?? FALLBACK_COLORS;
								return (
									<CommandGroup
										key={group.title}
										heading={
											<div className="flex items-center gap-2 px-3 py-2">
												<span
													className={cn('size-2 rounded-full', colors.dot)}
													aria-hidden
												/>
												<span
													className={cn('text-sm font-semibold', colors.label)}
												>
													{group.title}
												</span>
												<span className="text-xs text-text-tertiary">
													({group.items.length})
												</span>
											</div>
										}
										className="px-0 **:[[cmdk-group-heading]]:px-0"
									>
										{group.items.map((item) => {
											const Icon = item.icon;
											return (
												<CommandItem
													key={item.slug}
													value={`${group.title}-${item.label}`}
													onSelect={() => {
														if (item.comingSoon) return;
														handleSelect(item.href);
													}}
													className="group/feat data-[selected=true]:bg-brand-200/10 rounded-xl my-0.5 px-3 py-3 cursor-pointer aria-selected:bg-brand-200/10"
												>
													<div className="flex w-full items-center gap-4 text-left">
														<div className="bg-bg-tertiary rounded-md p-0.5 group-data-[selected=true]/feat:bg-bg-secondary">
															<div className="relative flex p-1 shrink-0 items-center justify-center rounded-md bg-bg-primary group-data-[selected=true]/feat:bg-bg-secondary bg-[url('/svgs/small-grid.svg')] bg-center bg-no-repeat bg-contain">
																<Icon className="relative z-10 text-brand-200 size-7 group-data-[selected=true]/feat:text-brand-300" />
															</div>
														</div>
														<div className="flex min-w-0 flex-1 flex-col gap-0.5">
															<HighlightedText
																text={item.label}
																query={q}
																className="block truncate text-base font-semibold text-text-primary"
															/>
															<HighlightedText
																text={item.description}
																query={q}
																className="block truncate text-sm text-text-tertiary"
															/>
														</div>
														<ArrowRight
															className="size-5 shrink-0 text-brand-300"
															aria-hidden
														/>
													</div>
												</CommandItem>
											);
										})}
									</CommandGroup>
								);
							})}
						</CommandList>
					</ScrollArea>

					{hasResults && (
						<div className="flex flex-wrap items-center gap-2 border-t border-border-secondary bg-bg-primary px-5 py-3">
							{groups.map((group) => {
								const colors = GROUP_COLORS[group.title] ?? FALLBACK_COLORS;
								return (
									<Badge
										key={group.title}
										variant="secondary"
										className={cn(
											'gap-1.5 rounded-full border-0 px-2.5 py-1 text-xs font-medium',
											colors.chipBg,
											colors.chipText,
										)}
									>
										<span
											className={cn('size-1.5 rounded-full', colors.dot)}
											aria-hidden
										/>
										{group.title}
									</Badge>
								);
							})}
						</div>
					)}
				</PopoverContent>
			</Command>
		</Popover>
	);
}

function HighlightedText({
	text,
	query,
	className,
}: {
	text: string;
	query: string;
	className?: string;
}) {
	if (!query) return <span className={className}>{text}</span>;

	const lower = text.toLowerCase();
	const idx = lower.indexOf(query);
	if (idx === -1) return <span className={className}>{text}</span>;

	const before = text.slice(0, idx);
	const match = text.slice(idx, idx + query.length);
	const after = text.slice(idx + query.length);

	return (
		<span className={className}>
			{before}
			<mark className="bg-transparent font-bold text-text-primary">
				{match}
			</mark>
			{after}
		</span>
	);
}
