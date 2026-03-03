export function truncate(str: string, max: number): string {
	const s = str.trim();
	if (s.length <= max) return s;
	return s.slice(0, max).trim() + "...";
}

export function stripHtml(html: string): string {
	if (typeof document === "undefined") return html.replace(/<[^>]*>/g, "");
	const tmp = document.createElement("div");
	tmp.innerHTML = html;
	return tmp.textContent ?? tmp.innerText ?? "";
}

/**
 * Extracts plain text from a Plate editor value (JSON string or array of nodes).
 * Used for preview when description is stored as Plate value.
 */
export function plateValueToPlainText(value: string | unknown): string {
	if (value === undefined || value === null) return "";
	let nodes: unknown[];
	if (typeof value === "string") {
		if (value.trim() === "") return "";
		try {
			nodes = JSON.parse(value) as unknown[];
		} catch {
			return value;
		}
	} else if (Array.isArray(value)) {
		nodes = value;
	} else {
		return "";
	}
	function extractText(node: unknown): string {
		if (!node || typeof node !== "object") return "";
		const n = node as { text?: string; children?: unknown[] };
		if ("text" in n && typeof n.text === "string") return n.text;
		if (Array.isArray(n.children)) return n.children.map(extractText).join("");
		return "";
	}
	return nodes.map(extractText).join("\n").trim();
}
