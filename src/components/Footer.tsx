import { Link } from "@tanstack/react-router";
import { DiscordIcon } from "@/assets/icons/discord-icon";
import { FacebookIcon } from "@/assets/icons/facebook-icon";
import { InstagramIcon } from "@/assets/icons/instagram-icon";
import { LinkedinIcon } from "@/assets/icons/linkedin-icon";
import { XIcon } from "@/assets/icons/X-icon";
import { Typography } from "./ui-custom/typography";

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
	{ Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
	{ Icon: InstagramIcon, label: "Instagram", href: "#" },
	{ Icon: XIcon, label: "X", href: "#" },
	{ Icon: FacebookIcon, label: "Facebook", href: "#" },
	{ Icon: DiscordIcon, label: "Discord", href: "#" },
];

export default function Footer() {
	return (
		<footer className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#222222_0%,#07003D_100%)]">
			<div className="relative mx-auto flex max-w-(--es-max-w) flex-col gap-10 px-4 pb-0 pt-8 md:px-(--es-section-px) md:pt-12">
				<nav
					className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-stretch gap-y-8"
					aria-label="Footer navigation"
				>
					{FOOTER_COLUMNS.map((column) => (
						<div key={column.heading} className="flex flex-col gap-2">
							<Typography
								variant="extraSmall"
								className="font-semibold tracking-widest text-text-on-brand"
							>
								{column.heading}
							</Typography>
							<ul className="flex flex-col gap-1">
								{column.links.map((link) => (
									<li key={link.label}>
										<Link to={link.to}>
											<Typography
												variant="small"
												className="text-text-quaternary font-normal transition-colors hover:text-text-on-brand"
											>
												{link.label}
											</Typography>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</nav>

				<div className="border-t border-text-white-alpha" />

				<div>
					{/* Bottom: legal links | copyright | social */}
					<div className="flex flex-col items-center justify-between gap-3 md:gap-6 sm:flex-row">
						<div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm md:gap-x-6">
							{BOTTOM_LINKS.map((link) => (
								<Link key={link.label} to={link.to} className="hover:underline">
									<Typography
										variant="extraSmall"
										className="text-text-quaternary font-normal transition-colors hover:text-text-on-brand"
									>
										{link.label}
									</Typography>
								</Link>
							))}
						</div>
						<Typography
							variant="extraSmall"
							className="text-center text-text-quaternary font-normal sm:order-0"
						>
							<span className="font-medium text-text-quaternary">
								Copyright © 2025 Edushade. All rights reserved.
							</span>
						</Typography>
						<div className="flex items-center gap-1">
							{SOCIAL_ICONS.map(({ Icon, label, href }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center rounded-sm p-1.5 text-text-quaternary transition-all hover:text-text-on-brand hover:bg-white/10"
									aria-label={label}
								>
									<Icon className="size-5" />
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Large decorative "Edushade" — full width band, text contained in max-width */}
				<div className="relative w-full min-h-56 max-h-[220px]  md:min-h-72">
					<section
						className="mx-auto flex w-full max-w-(--es-max-w) items-end justify-center "
						aria-hidden
					>
						<span className="block w-full  text-center font-medium leading-none tracking-tighter text-text-white-alpha text-[clamp(4rem,18vw,18rem)]">
							Edushade
						</span>
					</section>
				</div>
			</div>
		</footer>
	);
}
