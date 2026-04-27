import { Link } from "@tanstack/react-router";
import { LargeLogoIcon } from "@/assets/icons";
import { DiscordIcon } from "@/assets/icons/discord-icon";
import { FacebookIcon } from "@/assets/icons/facebook-icon";
import { InstagramIcon } from "@/assets/icons/instagram-icon";
import { LinkedinIcon } from "@/assets/icons/linkedin-icon";
import { XIcon } from "@/assets/icons/X-icon";
import { Typography } from "../ui-custom/typography";

const FOOTER_COLUMNS = [
	{
		heading: "Products",
		links: [
			{ label: "Student Panel", to: "/" },
			{ label: "Teacher Panel", to: "/" },
			{ label: "Admin Panel", to: "/" },
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
	/* {
		heading: 'Resources',
		links: [
			{ label: 'Documentation', to: '/' },
			{ label: 'Blog', to: '/blogs' },
			{ label: 'Changelog', to: '/' },
			{ label: 'Videos', to: '/' },
		],
	}, */
	{
		heading: "Company",
		links: [
			{ label: "About Us", to: "/" },
			{ label: "Careers", to: "/" },
			{ label: "Contact", to: "/contact-us" },
		],
	},
	{
		heading: "Legal",
		links: [
			{ label: "Terms of Service", to: "/terms-of-service" },
			{ label: "Privacy Policy", to: "/privacy-policy" },
			{ label: "Cookie Policy", to: "/cookie-policy" },
		],
	},
];

const BOTTOM_LINKS = [
	{ label: "Privacy Policy", to: "/privacy-policy" },
	{ label: "Terms of Service", to: "/terms-of-service" },
	{ label: "Cookie Policy", to: "/cookie-policy" },
];

const SOCIAL_ICONS = [
	{ Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/edushade" },
	{ Icon: InstagramIcon, label: "Instagram", href: "#" },
	{ Icon: XIcon, label: "X", href: "#" },
	{ Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/edushade.lms/" },
	{ Icon: DiscordIcon, label: "Discord", href: "#" },
];

export default function Footer() {
	return (
		<footer className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0)_100%),linear-gradient(180deg,#222222_0%,#07003D_100%)]">
			<div className="relative mx-auto flex max-w-(--es-max-w) flex-col gap-10 pb-0 pt-8 px-4 md:px-8 xl:px-(--es-section-px) md:pt-12">
				<nav
					className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-stretch gap-y-8"
					aria-label="Footer navigation"
				>
					{FOOTER_COLUMNS.map((column) => (
						<div key={column.heading} className="flex flex-col gap-4 lg:gap-8">
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
								Copyright © {new Date().getFullYear()} Edushade. All rights reserved.
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
			</div>

			<div
				className="w-full pt-10 lg:pt-16  max-w-(--es-max-w) mx-auto px-4 md:px-8 xl:px-(--es-section-px) pointer-events-none"
				aria-hidden="true"
			>
				<LargeLogoIcon />
			</div>
		</footer>
	);
}
