import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, BarChart } from "lucide-react";

const services = [
	{
		icon: Code,
		title: "Web Development",
		description:
			"Custom web applications built with modern technologies and best practices.",
	},
	{
		icon: Palette,
		title: "UI/UX Design",
		description:
			"Beautiful and intuitive designs that enhance user experience and engagement.",
	},
	{
		icon: Smartphone,
		title: "Mobile Apps",
		description:
			"Native and cross-platform mobile applications for iOS and Android.",
	},
	{
		icon: BarChart,
		title: "Digital Marketing",
		description:
			"Data-driven marketing strategies to grow your online presence and revenue.",
	},
];

export default function Services() {
	return (
		<section id="services" className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Comprehensive digital solutions tailored to meet your unique
						business needs.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<Card
							key={index}
							className="group hover:shadow-xl transition-all duration-300"
						>
							<CardHeader>
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
									<service.icon className="h-6 w-6" />
								</div>
							</CardHeader>
							<CardContent>
								<CardTitle className="mb-2">{service.title}</CardTitle>
								<p className="text-gray-600 text-sm">{service.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
