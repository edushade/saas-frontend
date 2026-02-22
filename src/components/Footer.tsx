import { Link } from "@tanstack/react-router";
import {
	Facebook,
	Instagram,
	Linkedin,
	MessageCircle,
	Twitter,
} from "lucide-react";

const FOOTER_COLUMNS = [
	{
		heading: "Products",
		links: [
			{ label: "Student Panel", to: "/" },
			{ label: "Teacher Panel", to: "/" },
			{ label: "Admin Panel", to: "/" },
			{ label: "Pricing", to: "/" },
		],
	},
	{
		heading: "Use Cases",
		links: [
			{ label: "For Tutors", to: "/" },
			{ label: "For Educators", to: "/" },
			{ label: "For Academies", to: "/" },
			{ label: "For Schools & Universities", to: "/" },
			{ label: "For Training Teams", to: "/" },
		],
	},
	{
		heading: "Resources",
		links: [
			{ label: "Documentation", to: "/" },
			{ label: "Blog", to: "/" },
			{ label: "Changelog", to: "/" },
			{ label: "Videos", to: "/" },
		],
	},
	{
		heading: "Company",
		links: [
			{ label: "About Us", to: "/" },
			{ label: "Careers", to: "/" },
			{ label: "Contact", to: "/" },
		],
	},
	{
		heading: "Legal",
		links: [
			{ label: "Terms of Service", to: "/" },
			{ label: "Privacy Policy", to: "/" },
			{ label: "Cookie Policy", to: "/" },
		],
	},
];

const BOTTOM_LINKS = [
	{ label: "Privacy Policy", to: "/" },
	{ label: "Terms of Services", to: "/" },
	{ label: "Cookies", to: "/" },
];

const SOCIAL_ICONS = [
	{ Icon: Linkedin, label: "LinkedIn", href: "#" },
	{ Icon: Instagram, label: "Instagram", href: "#" },
	{ Icon: Twitter, label: "Twitter", href: "#" },
	{ Icon: Facebook, label: "Facebook", href: "#" },
	{ Icon: MessageCircle, label: "Discord", href: "#" },
];

export default function Footer() {
	return (
		<footer className="w-full bg-[linear-gradient(to_bottom,#222222,#07003D)] text-zinc-300">
			{/* Figma: Width 1440px, Padding T=4xl R=80 B=0 L=80, Gap 40px */}
			<div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-20 pt-12 pb-0">
				{/* Top: five columns */}
				<nav className="grid grid-cols-5" aria-label="Footer navigation">
					{FOOTER_COLUMNS.map((column) => (
						<div key={column.heading} className="flex flex-col gap-2">
							<h3 className="text-sm font-semibold tracking-wide text-white">
								{column.heading}
							</h3>
							<ul className="flex flex-col gap-1">
								{column.links.map((link) => (
									<li key={link.label}>
										<Link
											to={link.to}
											className="text-sm text-zinc-400 transition-colors hover:text-white"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</nav>

				{/* Separator */}
				<div className="border-t border-zinc-600" />

				{/* Bottom: legal links | copyright | social */}
				<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
					<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm">
						{BOTTOM_LINKS.map((link) => (
							<Link
								key={link.label}
								to={link.to}
								className="text-zinc-400 transition-colors hover:text-white"
							>
								{link.label}
							</Link>
						))}
					</div>
					<p className="text-center text-sm text-zinc-400 sm:order-0">
						Copyright © 2025 Edushade. All rights reserved.
					</p>
					<div className="flex items-center gap-4">
						{SOCIAL_ICONS.map(({ Icon, label, href }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-400 transition-colors hover:text-white"
								aria-label={label}
							>
								<Icon className="size-5" />
							</a>
						))}
					</div>
				</div>

				<section
					className="flex  w-full  items-center justify-center"
					aria-hidden
				>
					<span className="block w-full text-center font-bold tracking-tighter text-[#FFFFFF29] text-[clamp(4rem,18vw,22rem)]">
						Edushade
					</span>
				</section>
			</div>
		</footer>
	);
}
