import type { ContactFormValue } from "./contact-sales-form";

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export interface ContactEmailInput
	extends Pick<
		ContactFormValue,
		"firstName" | "lastName" | "email" | "phone" | "message"
	> {
	siteOrigin?: string;
	submittedAt?: Date;
}

export interface BuiltContactEmail {
	subject: string;
	text: string;
	html: string;
}

const BRAND = {
	primary: "#0066FF",
	primaryDark: "#0044CC",
	accent: "#2B80FF",
	bg: "#F4F6FB",
	cardBg: "#FFFFFF",
	border: "#E5E9F2",
	textPrimary: "#0F1729",
	textSecondary: "#4B5468",
	textMuted: "#8B93A7",
};

function row(label: string, value: string, isLink?: "mailto" | "tel"): string {
	const safeValue = escapeHtml(value);
	const rendered =
		isLink === "mailto"
			? `<a href="mailto:${safeValue}" style="color:${BRAND.primary};text-decoration:none;font-weight:500;">${safeValue}</a>`
			: isLink === "tel"
				? `<a href="tel:${safeValue.replace(/[^+\d]/g, "")}" style="color:${BRAND.primary};text-decoration:none;font-weight:500;">${safeValue}</a>`
				: `<span style="color:${BRAND.textPrimary};font-weight:500;">${safeValue}</span>`;

	return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${BRAND.border};">
        <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.textMuted};font-weight:600;margin-bottom:4px;">${escapeHtml(label)}</div>
        <div style="font-size:15px;line-height:1.5;">${rendered}</div>
      </td>
    </tr>`;
}

export function buildContactEmail(input: ContactEmailInput): BuiltContactEmail {
	const fullName = `${input.firstName} ${input.lastName}`.trim();
	const submittedAt = input.submittedAt ?? new Date();
	const formattedDate = submittedAt.toLocaleString("en-US", {
		dateStyle: "long",
		timeStyle: "short",
	});
	const trimmedMessage = input.message?.trim() ?? "";
	const siteOrigin =
		input.siteOrigin?.replace(/\/$/, "") ?? "https://edushade.com";

	const subject = `New Contact Sales lead — ${fullName || input.email}`;

	const text = [
		"New Contact Sales submission",
		"=============================",
		"",
		`Name:  ${fullName || "—"}`,
		`Email: ${input.email}`,
		`Phone: ${input.phone}`,
		trimmedMessage ? `\nMessage:\n${trimmedMessage}` : "",
		"",
		`Submitted: ${formattedDate}`,
		`Source:    ${siteOrigin}/contact-sales`,
	]
		.filter(Boolean)
		.join("\n");

	const messageBlock = trimmedMessage
		? `
        <tr>
          <td style="padding:18px 0 4px;">
            <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.textMuted};font-weight:600;margin-bottom:8px;">Message</div>
            <div style="background:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:12px;padding:16px 18px;font-size:15px;line-height:1.6;color:${BRAND.textPrimary};white-space:pre-wrap;">${escapeHtml(trimmedMessage)}</div>
          </td>
        </tr>`
		: "";

	const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${BRAND.textPrimary};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${escapeHtml(`${fullName} (${input.email}) just reached out from the Contact Sales form.`)}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.bg};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

            <tr>
              <td style="padding:0 4px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="font-size:14px;font-weight:600;letter-spacing:0.04em;color:${BRAND.primary};">EDUSHADE</td>
                    <td align="right" style="font-size:12px;color:${BRAND.textMuted};">${escapeHtml(formattedDate)}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.cardBg};border:1px solid ${BRAND.border};border-radius:20px;overflow:hidden;box-shadow:0 1px 2px rgba(15,23,41,0.04);">

                  <tr>
                    <td style="background:linear-gradient(135deg,${BRAND.primary} 0%,${BRAND.accent} 100%);padding:28px 32px;color:#FFFFFF;">
                      <div style="font-size:12px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.85;font-weight:600;">New Lead</div>
                      <div style="font-size:24px;line-height:1.25;font-weight:600;margin-top:6px;">Contact Sales submission</div>
                      <div style="font-size:14px;line-height:1.5;margin-top:6px;opacity:0.9;">Someone wants to talk to your team about Edushade.</div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:24px 32px 8px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        ${row("Full name", fullName || "—")}
                        ${row("Email", input.email, "mailto")}
                        ${row("Phone", input.phone, "tel")}
                        ${messageBlock}
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 32px 28px;">
                      <a href="mailto:${escapeHtml(input.email)}?subject=${encodeURIComponent(`Re: Edushade — Hi ${fullName}`)}"
                         style="display:inline-block;background:${BRAND.primary};color:#FFFFFF;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:999px;">
                        Reply to ${escapeHtml(input.firstName || "lead")}
                      </a>
                      <a href="tel:${escapeHtml(input.phone).replace(/[^+\d]/g, "")}"
                         style="display:inline-block;margin-left:8px;color:${BRAND.primary};text-decoration:none;font-weight:600;font-size:14px;padding:12px 18px;border:1px solid ${BRAND.border};border-radius:999px;">
                        Call back
                      </a>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 4px 0;font-size:12px;color:${BRAND.textMuted};line-height:1.6;">
                Sent automatically from <a href="${escapeHtml(siteOrigin)}/contact-sales" style="color:${BRAND.textSecondary};text-decoration:none;">${escapeHtml(siteOrigin.replace(/^https?:\/\//, ""))}/contact-sales</a>.
                <br />
                Replying to this email goes directly to ${escapeHtml(input.email)}.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

	return { subject, text, html };
}
