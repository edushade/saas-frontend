import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { Typography } from "./ui-custom/typography";

function FeaturesMenu() {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className={cn(
							"bg-transparent text-text-dark-2 rounded-full text-sm font-medium",
							"hover:text-brand-300 hover:bg-bg-secondary",
							"data-[state=open]:bg-bg-secondary data-[state=open]:text-brand-300",
						)}
					>
						Features
					</NavigationMenuTrigger>
					<NavigationMenuContent className="w-(--es-max-w)! bg-bg-primary border-border-secondary shadow-[0px_0px_3px_-1px_#0A090B0A,0px_32px_33px_0px_#0A090B24]! fixed! left-1/2! -translate-x-1/2! top-(--es-nav-h)! p-0">
						<Card className="border-none shadow-none bg-transparent gap-0 overflow-hidden">
							<CardContent className="grid grid-cols-4 gap-8">
								{FEATURES_GROUPS.map((group) => (
									<div key={group.title}>
										<Typography
											variant="extraSmall"
											className="mb-3 font-medium uppercase tracking-widest text-text-quaternary"
										>
											{group.title}
										</Typography>
										<ul className="space-y-0.5">
											{group.items.map((item) => (
												<li key={item.label}>
													<Link
														to={item.href}
														className="flex items-start gap-3 rounded-lg py-2 transition-colors hover:bg-bg-secondary"
													>
														<div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-bg-tertiary">
															<item.icon size={14} className="text-brand" />
														</div>
														<div className="flex flex-col gap-1">
															<Typography
																variant="small"
																className="leading-tight font-medium text-text-primary"
															>
																{item.label}
															</Typography>
															<Typography
																variant="extraSmall"
																className="font-normal leading-relaxed text-text-secondary mt-0.5"
															>
																{item.description}
															</Typography>
														</div>
													</Link>
												</li>
											))}
										</ul>
									</div>
								))}
							</CardContent>

							{/* CTA bar */}
							<CardFooter className="border-t border-border-secondary   items-center w-full">
								<div className="bg-bg-secondary w-full px-3 py-2 flex items-center justify-between rounded-lg">
									<Typography variant="small" className="leading-relaxed">
										<span className="font-medium text-text-primary">
											{FEATURES_CTA.highlight}
										</span>{" "}
										<span className="font-normal leading-relaxed text-text-secondary">
											{FEATURES_CTA.text}
										</span>
									</Typography>
									<Button className="btn-brand-1 rounded-full">
										{FEATURES_CTA.button}
									</Button>
								</div>
							</CardFooter>
						</Card>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ResourcesMenu() {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger
						className={cn(
							"bg-transparent text-text-dark-2 rounded-full text-sm font-medium",
							"hover:text-brand-300 hover:bg-bg-secondary",
							"data-[state=open]:bg-bg-secondary data-[state=open]:text-brand-300",
						)}
					>
						Resources
					</NavigationMenuTrigger>
					<NavigationMenuContent className="bg-bg-primary border-border-secondary shadow-[0px_0px_3px_-1px_#0A090B0A,0px_32px_33px_0px_#0A090B24]! p-1">
						<ul>
							{RESOURCES_ITEMS.map((item) => (
								<li key={item.label}>
									<Link
										to={item.href}
										className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
									>
										<item.icon
											size={15}
											className="shrink-0 text-text-tertiary"
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
					className="md:hidden text-text-primary"
					aria-label="Open menu"
				>
					<Menu size={22} />
				</Button>
			</SheetTrigger>

			<SheetContent side="right" className="w-72 p-0 flex flex-col">
				<SheetHeader className="border-b border-border-primary px-5 py-4">
					<SheetTitle className="flex items-center">
						<img src="/svgs/logo.svg" alt="Edushade" className="h-8" />
					</SheetTitle>
				</SheetHeader>

				<nav className="flex-1 overflow-y-auto px-4 py-3">
					<Accordion type="single" collapsible>
						{/* Features */}
						<AccordionItem value="features" className="border-none">
							<AccordionTrigger className="py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:no-underline">
								Features
							</AccordionTrigger>
							<AccordionContent>
								{FEATURES_GROUPS.map((group) => (
									<div key={group.title} className="mb-4">
										<p className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-text-tertiary">
											{group.title}
										</p>
										{group.items.map((item) => (
											<Link
												key={item.label}
												to={item.href}
												className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
											>
												<item.icon
													size={14}
													className="shrink-0 text-text-tertiary"
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
							<AccordionTrigger className="py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:no-underline">
								Resources
							</AccordionTrigger>
							<AccordionContent>
								{RESOURCES_ITEMS.map((item) => (
									<Link
										key={item.label}
										to={item.href}
										className="flex items-center gap-2.5 rounded-md px-2 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
									>
										<item.icon
											size={14}
											className="shrink-0 text-text-tertiary"
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
							className="flex items-center rounded-md  py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Footer CTA */}
				<div className="border-t border-border-primary px-4 py-4 flex flex-col gap-2">
					<Button variant="outline" asChild className="w-full">
						<Link to="/">Sign In</Link>
					</Button>
					<Button asChild className="btn-brand-1 w-full rounded-full gap-1.5">
						<Link to="/">
							Request a Demo <ArrowUpRight size={14} />
						</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 flex items-center px-(--es-section-px) h-(--es-nav-h) bg-bg-primary">
			<div className="mx-auto w-full max-w-(--es-max-w) flex items-center justify-between">
				<Link to="/" className="flex items-center shrink-0">
					<img src="/svgs/logo.svg" alt="Edushade" className="h-10" />
				</Link>

				<div className="flex items-center gap-3 shrink-0">
					<nav className="hidden md:flex items-center ">
						<FeaturesMenu />
						<ResourcesMenu />
						{NAV_LINKS.map((link) => (
							<Link
								key={link.label}
								to={link.href}
								className={cn(
									navigationMenuTriggerStyle(),
									"bg-transparent text-text-dark-2 rounded-full text-sm font-medium",
									"hover:text-brand-300 hover:bg-bg-secondary",
								)}
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="hidden md:flex items-center gap-3 shrink-0">
						<Button
							variant="outline"
							size="sm"
							asChild
							className="text-text-dark-2 rounded-full text-sm font-medium hover:text-brand-300 hover:bg-bg-secondary"
						>
							<Link to="/">Sign In</Link>
						</Button>
						<Button
							asChild
							className="btn-brand-1 text-text-primary rounded-full gap-1.5 text-sm font-medium"
						>
							<Link to="/">
								Request a Demo
								<ArrowUpRight size={14} strokeWidth={2.5} />
							</Link>
						</Button>
					</div>
				</div>

				<MobileMenu />
			</div>
		</header>
	);
}
