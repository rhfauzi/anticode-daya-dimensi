"use client";
import {
	Navbar,
	Header,
	Expertise,
	News,
	PortofolioSlider,
	Footer,
	BeAPart,
	ButtonBackToTop,
	ButtonWhatsApp,
} from "../components";

export default function Page() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<Header />

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
