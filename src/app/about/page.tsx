"use client";
import {
	Blogs,
	Navbar,
	Footer,
	Client,
	Others,
	Collaborate,
	HeaderAbout,
	ButtonWhatsApp,
	ButtonBackToTop,
	ExperienceNumber,
} from "@/components";

export default function Page() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<HeaderAbout />

			<ExperienceNumber />
			<Blogs />
			<Collaborate />
			<Client />
			<Others />

			<Footer />

			<ButtonBackToTop />
			<ButtonWhatsApp />
		</main>
	);
}
