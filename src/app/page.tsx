import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Header/HeaderHome";

export default function Page() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<Header />

			{/* Quick About Preview */}
			<section className="py-20 bg-white" style={{ height: "1300px" }}>
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-gray-900 mb-6">
								Who We Are
							</h2>
							<p className="text-gray-600 mb-6 text-lg">
								We are a passionate team of digital experts dedicated to helping
								businesses thrive in the digital age. With over 10 years of
								experience and 500+ successful projects, we bring innovation and
								excellence to every partnership.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
