/**
 * Formats a date for the billing invoices table: `YYYY-MM-DD; h:mm AM/PM` (locale en-US).
 */
export function formatInvoiceTableDate(iso: string): string {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) {
		return iso;
	}
	const y = d.getFullYear();
	const m = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	const time = d.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});
	return `${y}-${m}-${day}; ${time}`;
}
