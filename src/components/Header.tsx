import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	FEATURES_CTA,
	FEATURES_GROUPS,
	NAV_LINKS,
	RESOURCES_ITEMS,
} from "@/constants/nav";
import { cn } from "@/lib/utils";

function FeaturesMenu() {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onClickOutside(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", onClickOutside);
		return () => document.removeEventListener("mousedown", onClickOutside);
	}, []);

	return (
		<div ref={ref}>
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className={cn(
					navigationMenuTriggerStyle(),
					"bg-transparent text-(--es-text-2)",
					"hover:bg-(--es-surface-2) hover:text-(--es-text-1)",
					open && "bg-(--es-surface-2) text-(--es-brand)",
				)}
			>
				Features
				<ChevronDown
					size={13}
					aria-hidden="true"
					className={cn(
						"ml-1 transition-transform duration-300",
						open && "rotate-180",
					)}
				/>
			</button>

			{open && (
				<div
					className="fixed left-0 right-0 z-40 border-b border-(--es-border-1) bg-white shadow-lg"
					style={{ top: "var(--es-nav-h)" }}
				>
					{/* 4-column grid */}
					<div
						className="mx-auto grid grid-cols-4 gap-x-8"
						style={{
							maxWidth: "var(--es-max-w)",
							padding: "2rem var(--es-section-px)",
						}}
					>
						{FEATURES_GROUPS.map((group) => (
							<div key={group.title}>
								<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-(--es-text-3)">
									{group.title}
								</p>
								<ul className="space-y-0.5">
									{group.items.map((item) => (
										<li key={item.label}>
											<Link
												to={item.href}
												onClick={() => setOpen(false)}
												className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-(--es-surface-2)"
											>
												<div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-(--es-brand-light)">
													<item.icon size={14} className="text-(--es-brand)" />
												</div>
												<div>
													<p className="text-sm font-medium leading-tight text-(--es-text-1)">
														{item.label}
													</p>
													<p className="text-xs text-(--es-text-3)">
														{item.description}
													</p>
												</div>
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* CTA bar */}
					<div
						className="border-t border-(--es-border-1) bg-(--es-surface-2)"
						style={{ padding: "0.875rem var(--es-section-px)" }}
					>
						<div
							className="mx-auto flex items-center justify-between"
							style={{ maxWidth: "var(--es-max-w)" }}
						>
							<p className="text-sm text-(--es-text-2)">
								<span className="font-semibold text-(--es-text-1)">
									{FEATURES_CTA.highlight}
								</span>{" "}
								{FEATURES_CTA.text}
							</p>
							<Button
								className="rounded-full bg-(--es-brand) text-white hover:bg-(--es-brand-hover)"
								onClick={() => setOpen(false)}
							>
								{FEATURES_CTA.button}
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function ResourcesMenu() {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className={cn(
							"bg-transparent text-(--es-text-2)",
							"hover:bg-(--es-surface-2) hover:text-(--es-text-1)",
							"data-[state=open]:bg-(--es-surface-2) data-[state=open]:text-(--es-text-1)",
						)}
					>
						Resources
					</NavigationMenuTrigger>
					<NavigationMenuContent className="w-52">
						<ul className="p-1">
							{RESOURCES_ITEMS.map((item) => (
								<li key={item.label}>
									<Link
										to={item.href}
										className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-(--es-text-2) transition-colors hover:bg-(--es-surface-2) hover:text-(--es-text-1)"
									>
										<item.icon
											size={15}
											className="shrink-0 text-(--es-text-3)"
										/>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden text-(--es-text-1)"
					aria-label="Open menu"
				>
					<Menu size={22} />
				</Button>
			</SheetTrigger>

			<SheetContent side="right" className="w-72 p-0 flex flex-col">
				<SheetHeader className="border-b border-(--es-border-1) px-5 py-4">
					<SheetTitle className="flex items-center gap-2">
						<div className="flex h-7 w-7 items-center justify-center rounded-full bg-(--es-brand) text-white text-xs font-bold select-none">
							S
						</div>
						<span className="text-(--es-text-1) font-semibold">Edushade</span>
					</SheetTitle>
				</SheetHeader>

				<nav className="flex-1 overflow-y-auto px-4 py-3">
					<Accordion type="single" collapsible>
						{/* Features */}
						<AccordionItem value="features" className="border-none">
							<AccordionTrigger className="py-3 text-sm font-medium text-(--es-text-2) hover:text-(--es-text-1) hover:no-underline">
								Features
							</AccordionTrigger>
							<AccordionContent>
								{FEATURES_GROUPS.map((group) => (
									<div key={group.title} className="mb-4">
										<p className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-(--es-text-3)">
											{group.title}
										</p>
										{group.items.map((item) => (
											<Link
												key={item.label}
												to={item.href}
												className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-(--es-text-2) transition-colors hover:bg-(--es-surface-2) hover:text-(--es-text-1)"
											>
												<item.icon
													size={14}
													className="shrink-0 text-(--es-text-3)"
												/>
												{item.label}
											</Link>
										))}
									</div>
								))}
							</AccordionContent>
						</AccordionItem>

						{/* Resources */}
						<AccordionItem value="resources" className="border-none">
							<AccordionTrigger className="py-3 text-sm font-medium text-(--es-text-2) hover:text-(--es-text-1) hover:no-underline">
								Resources
							</AccordionTrigger>
							<AccordionContent>
								{RESOURCES_ITEMS.map((item) => (
									<Link
										key={item.label}
										to={item.href}
										className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-(--es-text-2) transition-colors hover:bg-(--es-surface-2) hover:text-(--es-text-1)"
									>
										<item.icon
											size={14}
											className="shrink-0 text-(--es-text-3)"
										/>
										{item.label}
									</Link>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					{/* Flat nav links */}
					{NAV_LINKS.map((link) => (
						<Link
							key={link.label}
							to={link.href}
							className="flex items-center rounded-md px-3 py-3 text-sm font-medium text-(--es-text-2) transition-colors hover:bg-(--es-surface-2) hover:text-(--es-text-1)"
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Footer CTA */}
				<div className="border-t border-(--es-border-1) px-4 py-4 flex flex-col gap-2">
					<Button variant="outline" asChild className="w-full">
						<Link to="/">Sign In</Link>
					</Button>
					<Button
						asChild
						className="w-full rounded-full bg-(--es-brand) text-white hover:bg-(--es-brand-hover) gap-1.5"
					>
						<Link to="/">
							Request a Demo <ArrowUpRight size={14} />
						</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}

/* ─────────────────────────────────────────────
   Header
───────────────────────────────────────────── */
export default function Header() {
	return (
		<header
			style={{ height: "var(--es-nav-h)" }}
			className="fixed top-0 left-0 right-0 z-50 flex items-center border-b border-(--es-border-1) bg-white/95 backdrop-blur-sm"
		>
			<div
				style={{
					maxWidth: "var(--es-max-w)",
					padding: "0 var(--es-section-px)",
				}}
				className="mx-auto flex w-full items-center justify-between"
			>
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2 shrink-0">
					<div className="flex h-8 w-8 items-center justify-center rounded-full bg-(--es-brand) text-white font-bold text-sm select-none">
						S
					</div>
					<span className="text-(--es-text-1) font-semibold text-[17px] tracking-tight">
						Edushade
					</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-0.5">
					<FeaturesMenu />
					<ResourcesMenu />
					{NAV_LINKS.map((link) => (
						<Link
							key={link.label}
							to={link.href}
							className={cn(
								navigationMenuTriggerStyle(),
								"bg-transparent text-(--es-text-2)",
								"hover:bg-(--es-surface-2) hover:text-(--es-text-1)",
							)}
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Desktop actions */}
				<div className="hidden md:flex items-center gap-3 shrink-0">
					<Button
						variant="ghost"
						asChild
						className="text-(--es-text-1) hover:text-(--es-brand) hover:bg-(--es-brand-light)"
					>
						<Link to="/">Sign In</Link>
					</Button>
					<Button
						asChild
						className="rounded-full bg-(--es-brand) text-white hover:bg-(--es-brand-hover) gap-1.5"
					>
						<Link to="/">
							Request a Demo
							<ArrowUpRight size={14} strokeWidth={2.5} />
						</Link>
					</Button>
				</div>

				{/* Mobile hamburger */}
				<MobileMenu />
			</div>
		</header>
	);
}
