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

// Fungsi untuk mengubah huruf pertama setiap kata menjadi kapital
export const capitalizeWords = (str: string): string => {
	return str
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};
