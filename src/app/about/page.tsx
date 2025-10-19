"use client";
import {
	Blogs,
	Navbar,
	Footer,
	Client,
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

			<Footer />

			<ButtonBackToTop />
			<ButtonWhatsApp />
		</main>
	);
}
