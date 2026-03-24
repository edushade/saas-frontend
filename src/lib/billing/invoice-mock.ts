export type BillingInvoiceStatus = "paid" | "unpaid";

export interface BillingInvoiceRow {
	/** Display id e.g. 1234567892 */
	id: string;
	title: string;
	/** ISO 8601 */
	dateIso: string;
	amountCents: number;
	status: BillingInvoiceStatus;
}

/** Demo rows until billing API is connected. */
export const MOCK_BILLING_INVOICES: BillingInvoiceRow[] = [
	{
		id: "1234567892",
		title: "Starter — monthly",
		dateIso: "2025-09-15T09:30:00.000Z",
		amountCents: 2900,
		status: "unpaid",
	},
	{
		id: "1234567891",
		title: "Starter — monthly",
		dateIso: "2025-08-10T14:15:00.000Z",
		amountCents: 2900,
		status: "paid",
	},
	{
		id: "1234567890",
		title: "Growth — monthly",
		dateIso: "2025-07-05T11:00:00.000Z",
		amountCents: 7900,
		status: "paid",
	},
	{
		id: "1234567889",
		title: "Starter — monthly",
		dateIso: "2025-06-01T08:45:00.000Z",
		amountCents: 2900,
		status: "paid",
	},
	{
		id: "1234567888",
		title: "Add-on storage",
		dateIso: "2025-05-20T16:20:00.000Z",
		amountCents: 1500,
		status: "unpaid",
	},
	{
		id: "1234567887",
		title: "Starter — monthly",
		dateIso: "2025-04-12T10:00:00.000Z",
		amountCents: 2900,
		status: "paid",
	},
	{
		id: "1234567886",
		title: "Starter — monthly",
		dateIso: "2025-03-08T13:30:00.000Z",
		amountCents: 2900,
		status: "paid",
	},
	{
		id: "1234567885",
		title: "Growth — monthly",
		dateIso: "2025-02-22T09:15:00.000Z",
		amountCents: 7900,
		status: "unpaid",
	},
	{
		id: "1234567884",
		title: "Starter — monthly",
		dateIso: "2025-01-18T12:00:00.000Z",
		amountCents: 2900,
		status: "paid",
	},
	{
		id: "1234567883",
		title: "Credit adjustment",
		dateIso: "2024-12-05T15:45:00.000Z",
		amountCents: -500,
		status: "paid",
	},
	{
		id: "1234567882",
		title: "Starter — monthly",
		dateIso: "2024-11-11T08:30:00.000Z",
		amountCents: 2900,
		status: "paid",
	},
	{
		id: "1234567881",
		title: "Starter — monthly",
		dateIso: "2024-10-03T17:00:00.000Z",
		amountCents: 2900,
		status: "paid",
	},
	{
		id: "1234567880",
		title: "Growth — monthly",
		dateIso: "2024-09-19T11:20:00.000Z",
		amountCents: 7900,
		status: "paid",
	},
	{
		id: "1234567879",
		title: "Starter — monthly",
		dateIso: "2024-08-07T14:50:00.000Z",
		amountCents: 2900,
		status: "unpaid",
	},
];
