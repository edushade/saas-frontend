import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";
import type { ContactFormValue } from "@/components/contact-sales/types/contact-sales-form";

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

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
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

					const fromAddress = process.env.EMAIL_FROM?.trim() || user;
					const toAddress = process.env.EMAIL_TO?.trim() || user;

					const mailOptions = {
						from: fromAddress,
						to: toAddress,
						replyTo: body.email,
						subject: `Contact: ${body.firstName} ${body.lastName}`,
						text: [
							`Name: ${body.firstName} ${body.lastName}`,
							`Email: ${body.email}`,
							`Phone: ${body.phone}`,
							body.message?.trim() ? `Message:\n${body.message}` : "",
						]
							.filter(Boolean)
							.join("\n\n"),
						html: [
							`<p><strong>Name:</strong> ${escapeHtml(body.firstName)} ${escapeHtml(body.lastName)}</p>`,
							`<p><strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></p>`,
							`<p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>`,
							body.message?.trim()
								? `<p><strong>Message:</strong></p><p>${escapeHtml(body.message)}</p>`
								: "",
						]
							.filter(Boolean)
							.join(""),
					};

					await transporter.sendMail(mailOptions);

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

					// In development, return a hint to help debug (no secrets)
					const isDev = process.env.NODE_ENV !== "production";
					const hint = isDev
						? ` ${message}${code ? ` (${code})` : ""}. Check EMAIL_SMTP_* in .env, host/port/auth.`
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
