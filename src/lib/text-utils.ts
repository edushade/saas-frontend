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
