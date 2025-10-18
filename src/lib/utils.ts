import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Fungsi scroll ke paling atas halaman
export const scrollToTop = (): void => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

// Fungsi scroll ke elemen dengan ID tertentu
export const scrollToId = (id: string): void => {
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: "smooth" });
	}
};
