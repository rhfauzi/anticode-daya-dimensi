import Title from "../Title";
import Image from "next/image";
import NewsItem from "./NewsItem";

const NewsItems = [
	{
		category: "PUBLIC WORKSHOP",
		date: "25 Feb 2022",
		title: "Zoompathy vs Zoom-fatigue: Managing Virtual Meeting Burnout",
	},
	{
		category: "BUKA PINTU",
		date: "20 Oct 2021",
		title: "Our New Solution To Hire The Right Person For Your Company",
	},
	{
		category: "LIVE WEBINAR",
		date: "20 Oct 2021",
		title: "DDI : Among Indonesia's First Signatories of UN WEP",
	},
	{
		category: "BUKA PINTU",
		date: "20 Oct 2021",
		title: "Our New Solution To Hire The Right Person For Your Company",
	},
];

const News = () => {
	return (
		<section className="px-32 max-md:p-5 mb-24">
			<div className="flex justify-between items-center mb-10">
				<Title
					title="Upcoming Activities"
					type={"font-tstar-light"}
					description={``}
				/>
				<div className="flex items-center gap-x-2 btn-action" role="button">
					<span className={`font-tstar-bold text-base text-[#B92322]`}>
						VIEW ALL
					</span>
					<Image
						src="/icon/arrow-right-red-sm.svg"
						alt="arrow right"
						className="arrow-bounce"
						width={15}
						height={5}
					/>
				</div>
			</div>
			<div className="grid grid-cols-8 gap-x-16 max-md:grid-cols-1 border-t border-b border-[#F2F2F2]">
				<div className="col-span-3 max-md:col-span-full">
					<Image
						src="/img/webinar.png"
						alt="webinar"
						width={481}
						height={481}
					/>
				</div>
				<div className="col-span-5 grid grid-cols-1 gap-y-10 max-md:col-span-1">
					{NewsItems.map((item, index) => (
						<NewsItem
							key={index}
							category={item.category}
							date={item.date}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default News;
