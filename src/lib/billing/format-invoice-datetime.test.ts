import { describe, expect, it } from "vitest";
import { formatInvoiceTableDate } from "./format-invoice-datetime";

describe("formatInvoiceTableDate", () => {
	it("formats an ISO instant with date, semicolon, and 12h time", () => {
		const s = formatInvoiceTableDate("2025-09-15T09:30:00.000Z");
		expect(s).toMatch(/^\d{4}-\d{2}-\d{2}; .+[AP]M$/i);
	});

	it("returns the raw string for invalid dates", () => {
		expect(formatInvoiceTableDate("not-a-date")).toBe("not-a-date");
	});
});
