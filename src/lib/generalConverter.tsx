export function toSlug(text: string): string {
	return text.toLowerCase().replace(/\s+/g, "-");
}
