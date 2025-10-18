import Image from "next/image";
import { toSlug } from "../../lib/generalConverter";

interface INewsItemProps {
	category: string;
	date: string;
	title: string;
}

const NewsItem = ({ category, date, title }: INewsItemProps) => {
	return (
		<div
			className="grid grid-cols-12 items-start border-t border-[#F2F2F2] pt-6 btn-action max-md:grid-cols-2 max-md:gap-y-3"
			role="button"
		>
			<div className="col-span-3 max-md:col-span-1 max-md:order-1">
				<p className="text-[#8B0B04] text-sm mb-2 uppercase">
					<a href={`category/${toSlug(category)}`} target="_blank">
						{category}
					</a>
				</p>
				<p className="text-[#00000066] text-sm">{date}</p>
			</div>
			<div className="col-span-6 max-md:col-span-2 max-md:order-3">
				<p className={`font-tstar-medium text-2xl capitalize`}>
					<a href={`news/${toSlug(title)}`} target="_blank">
						{title}
					</a>
				</p>
			</div>
			<div className="col-span-3 flex justify-end max-md:col-span-1 max-md:order-2">
				<Image
					src="/icon/arrow-right-red-1.svg"
					alt="arrow right"
					width={18}
					height={6}
					className="text-end"
				/>
			</div>
		</div>
	);
};

export default NewsItem;
