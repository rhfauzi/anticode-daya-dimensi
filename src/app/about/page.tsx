"use client";
import {
	Navbar,
	HeaderAbout,
	ExperienceNumber,
	News,
	Footer,
	ButtonBackToTop,
	ButtonWhatsApp,
} from "@/components";

export default function Page() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<HeaderAbout />

			<ExperienceNumber />
			<News />

			<Footer />

			<ButtonBackToTop />
			<ButtonWhatsApp />
		</main>
	);
}
