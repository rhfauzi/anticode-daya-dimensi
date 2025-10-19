import React from "react";
import Image from "next/image";
import { Title } from "@/components";
import { collaborateItems } from "@/const/dummyData";

const Collaborate = () => {
	return (
		<section className="bg-[#F9FAFB] pl-64 pr-32 pb-[100px] max-md:p-5">
			<div className="">
				<Title
					title={"Reasons to Collaborate"}
					style={{ color: "#000000" }}
					className="text-[#000000] text-[36px] font-normal pt-[100px]"
				/>

				<div className="grid grid-cols-3 gap-7 mt-[100px]">
					{collaborateItems.map((item, index) => (
						<div
							key={index}
							className="flex flex-col gap-4 border-t-4 border-solid border-[#E0E0E0]"
						>
							<Image
								src={item.image}
								alt={item.alt}
								width={64}
								height={64}
								className="mt-5"
							/>
							<Title
								title={item.title}
								style={{ color: "#000000" }}
								className="text-[#000000] text-[36px] font-normal"
							>
								<div className="mt-5 text-base text-[#504B49] leading-[24px]">
									{item.description}
								</div>
							</Title>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Collaborate;
