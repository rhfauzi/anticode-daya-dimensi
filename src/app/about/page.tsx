"use client";
import {
	Navbar,
	HeaderAbout,
	Expertise,
	News,
	PortofolioSlider,
	Footer,
	BeAPart,
	ButtonBackToTop,
	ButtonWhatsApp,
} from "@/components";

export default function Page() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<HeaderAbout />

			<Expertise />
			<PortofolioSlider />
			<News />
			<BeAPart />

			<Footer />

			<ButtonBackToTop />
			<ButtonWhatsApp />
		</main>
	);
}
