import Footer from "@/components/Footer/FooterBottom";

export default function About() {
	return (
		<main className="min-h-screen">
			<section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
							About Our Company
						</h1>
						<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
							We are a team of passionate innovators, designers, and developers
							dedicated to creating digital solutions that make a real
							difference.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
