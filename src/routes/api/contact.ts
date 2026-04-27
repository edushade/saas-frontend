import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";
import { buildContactEmail } from "@/lib/contact-sales/contact-email";
import type { ContactFormValue } from "@/lib/contact-sales/contact-sales-form";

function isContactBody(
	body: unknown,
): body is ContactFormValue & { agreeTerms: boolean } {
	if (!body || typeof body !== "object") return false;
	const b = body as Record<string, unknown>;
	return (
		typeof b.firstName === "string" &&
		typeof b.lastName === "string" &&
		typeof b.email === "string" &&
		typeof b.phone === "string" &&
		typeof b.agreeTerms === "boolean"
	);
}

export const Route = createFileRoute("/api/contact")({
	server: {
		handlers: {
			POST: async ({ request }) => {
				const body = await request.json().catch(() => null);
				if (!isContactBody(body)) {
					return Response.json(
						{ ok: false, message: "Invalid contact form payload" },
						{ status: 400 },
					);
				}

				const provider = process.env.EMAIL_PROVIDER;
				const host = process.env.EMAIL_SMTP_HOST;
				const port = process.env.EMAIL_SMTP_PORT;
				const user = process.env.EMAIL_SMTP_USERNAME;
				const pass = process.env.EMAIL_SMTP_PASSWORD;

				const smtpConfigured =
					provider === "smtp" &&
					host?.trim() &&
					typeof user === "string" &&
					user.trim() !== "" &&
					typeof pass === "string" &&
					pass.trim() !== "";

				if (!smtpConfigured) {
					return Response.json({
						ok: false,
						message:
							"Email is not configured. Set EMAIL_PROVIDER=smtp, EMAIL_SMTP_HOST, EMAIL_SMTP_PORT, EMAIL_SMTP_USERNAME, EMAIL_SMTP_PASSWORD in .env (all non-empty).",
					});
				}

				try {
					const portNumber = port ? Number.parseInt(port, 10) : 2525;
					const isSecure = port === "465";
					// Port 587 uses STARTTLS; don't disable it (nodemailer uses it by default when secure is false)
					const transporter = nodemailer.createTransport({
						host,
						port: Number.isNaN(portNumber) ? 2525 : portNumber,
						secure: isSecure,
						auth: { user, pass },
					});

					// From: must be an address your SMTP allows. Never use the provider's domain (e.g. mailtrap.io) as From.
					let fromAddress = process.env.EMAIL_FROM?.trim();
					if (!fromAddress) {
						try {
							const origin = process.env.SITE_ORIGIN ?? "https://edushade.com";
							fromAddress = `Contact <noreply@${new URL(origin).host}>`;
						} catch {
							fromAddress = "Contact <noreply@edushade.com>";
						}
					}
					const toAddress =
						process.env.EMAIL_TO?.trim() ||
						process.env.EMAIL_FROM?.trim() ||
						user;

					const { subject, text, html } = buildContactEmail({
						firstName: body.firstName,
						lastName: body.lastName,
						email: body.email,
						phone: body.phone,
						message: body.message ?? "",
						siteOrigin: process.env.SITE_ORIGIN,
					});

					await transporter.sendMail({
						from: fromAddress,
						to: toAddress,
						replyTo: body.email,
						subject,
						text,
						html,
					});

					return Response.json({
						ok: true,
						message: "Message sent successfully.",
					});
				} catch (err) {
					const message = err instanceof Error ? err.message : "Unknown error";
					const code =
						err && typeof err === "object" && "code" in err
							? String((err as { code: string }).code)
							: "";
					console.error("[contact API] Send failed:", message, code || "", err);

					const isEenvelope =
						message.includes("EENVELOPE") ||
						message.toLowerCase().includes("not allowed");
					const isDev = process.env.NODE_ENV !== "production";
					const hint = isDev
						? ` ${message}${code ? ` (${code})` : ""}.${
								isEenvelope
									? " Set EMAIL_FROM (and EMAIL_TO) in .env to an address your SMTP allows — do not use the provider's domain (e.g. @mailtrap.io) as From."
									: " Check EMAIL_SMTP_* in .env, host/port/auth."
							}`
						: "";

					return Response.json(
						{
							ok: false,
							message: "Failed to send email." + hint,
						},
						{ status: 502 },
					);
				}
			},
		},
	},
});
