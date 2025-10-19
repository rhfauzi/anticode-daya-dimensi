import Title from "../Title";
import ExpertiseItem from "./ExpertiseItem";
import { expertiseItems } from "@/const/dummyData";

const Expertise = () => {
	return (
		<section className="pt-24 px-28 pb-[440px] bg-[#f5f5f5] max-md:p-5 z-0">
			<div className="grid grid-cols-2 mb-14 max-md:grid-cols-1">
				<Title title={`Expertise`} style={{ color: "#000000" }}>
					<p
						className="mt-[20px] text-[16px] leading-6"
						style={{ fontFamily: "Trebuchet MS", color: "#504B49" }}
					>
						&quot;Organisations who will succeed in the long-run are those who
						are open to new ideas, embrace innovations, instill compassion in
						every act and decision, and consistent in advancing humanity through
						sustainability.&quot; - Excerpts from &quot;Leaders of a New
						Planet&quot; book.
					</p>
				</Title>
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
