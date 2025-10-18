import Title from "../Title";
import ExpertiseItem from "./ExpertiseItem";

const expertiseItems = [
	{
		icon: "learning.svg",
		title: "Applied Science & Imagination Centre",
	},
	{
		icon: "diagnostic.svg",
		title: "Diagnostics and Assessments",
	},
	{
		icon: "transformation.svg",
		title: "Human Resources & Organizational Transformation",
	},
	{
		icon: "klobility.svg",
		title: "Klobility",
	},
	{
		icon: "executive.svg",
		title: "Leadership Development",
	},
	{
		icon: "learning.svg",
		title: "On-Demand Online Learning",
	},
];

const Expertise = () => {
	return (
		<section className="pt-17 px-28 pb-[440px] bg-[#f5f5f5] max-md:p-5">
			<div className="grid grid-cols-2 mb-14 max-md:grid-cols-1">
				<Title
					title="Expertise"
					type={"font-tstar-light"}
					description={`"Organisations who will succeed in the long-run are those who are open to new ideas, embrace innovations, instill compassion in every act and decision, and consistent in advancing humanity through sustainability." - Excerpts from 'Leaders of a New Planet' book.`}
					style={{}}
				/>
			</div>

			<div id="expertise" className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
				{expertiseItems.map((item, index) => (
					<ExpertiseItem key={index} icon={item.icon} title={item.title} />
				))}
			</div>
		</section>
	);
};

export default Expertise;
