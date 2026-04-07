import { format, parseISO } from "date-fns";

export function formatPostDate(dateStr: string): string {
	try {
		const d = dateStr.includes("T") ? parseISO(dateStr) : new Date(dateStr);
		if (Number.isNaN(d.getTime())) return dateStr;
		return format(d, "d MMM yyyy");
	} catch {
		return dateStr;
	}
}
