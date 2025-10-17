export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-2xl font-bold mb-4">CompanyName</h3>
						<p className="text-gray-400">
							Building innovative digital solutions for businesses worldwide.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="#home" className="hover:text-white transition-colors">
									Home
								</a>
							</li>
							<li>
								<a href="#about" className="hover:text-white transition-colors">
									About
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-white transition-colors"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									className="hover:text-white transition-colors"
								>
									Portfolio
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Services</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Web Development
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Mobile Apps
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									UI/UX Design
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Digital Marketing
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Connect With Us</h4>
						<div className="flex space-x-4">
							{/* Social media icons would go here */}
							<div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
								<span className="text-sm">FB</span>
							</div>
							<div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
								<span className="text-sm">TW</span>
							</div>
							<div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
								<span className="text-sm">IG</span>
							</div>
							<div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
								<span className="text-sm">IN</span>
							</div>
						</div>
					</div>
				</div>

				<div
					id="expertise"
					className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
				>
					<p>&copy; 2024 CompanyName. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
