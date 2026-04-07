import type { Row } from "@tanstack/react-table";

import type { AuditLogRow } from "@/lib/audit/constants";

export function auditLogGlobalFilterFn(
	row: Row<AuditLogRow>,
	_columnId: string,
	filterValue: unknown,
): boolean {
	const q = String(filterValue ?? "")
		.trim()
		.toLowerCase();
	if (!q) {
		return true;
	}
	const r = row.original;
	const hay = [r.event, r.actedBy, r.email, r.type, r.ipAddress, r.role]
		.join(" ")
		.toLowerCase();
	return hay.includes(q);
}
