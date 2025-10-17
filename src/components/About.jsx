import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

const features = [
	{
		icon: Users,
		title: "Expert Team",
		description:
			"Our team consists of experienced professionals dedicated to delivering excellence.",
	},
	{
		icon: Target,
		title: "Goal Oriented",
		description:
			"We focus on achieving your business objectives with measurable results.",
	},
	{
		icon: Award,
		title: "Award Winning",
		description:
			"Recognized for our innovative solutions and outstanding client service.",
	},
];

export default function About() {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						About Our Company
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						With over 10 years of experience, we've helped hundreds of
						businesses achieve their digital transformation goals.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{features.map((feature, index) => (
						<Card key={index} className="text-center p-8 border-0 shadow-lg">
							<CardContent className="p-0">
								<div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
									<feature.icon className="h-8 w-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h3 className="text-3xl font-bold mb-6">Our Story</h3>
						<p className="text-gray-600 mb-4">
							Founded in 2014, we started as a small team with big dreams.
							Today, we're proud to be one of the leading digital agencies in
							the region, serving clients across various industries.
						</p>
						<p className="text-gray-600">
							Our mission is to empower businesses through innovative technology
							solutions that drive growth and create lasting impact.
						</p>
					</div>
					<div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
						<span className="text-gray-500">Company Image/Video</span>
					</div>
				</div>
			</div>
		</section>
	);
}
