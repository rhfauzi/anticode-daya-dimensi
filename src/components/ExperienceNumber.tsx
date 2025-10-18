import React from "react";
import { Title, NumberList } from "@/components";
import { numberList } from "@/const/dummyData";

const ExperienceNumber = () => {
	return (
		<section className="pl-64 pr-32 pb-[180px] bg-[#F5F5F5]">
			<div className="py-[60px]">
				<Title title={`Daya Dimensi In Numbers`} style={{ color: "#000" }} />
				<div className="w-full py-10 flex flex-row justify-between gap-x-16  max-md:flex-col max-md:w-full max-md:justify-center max-md:items-center max-md:text-center max-md:gap-y-8">
					<NumberList
						dataSource={numberList}
						titleSize="text-[72px]"
						descSize="text-[20px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default ExperienceNumber;
