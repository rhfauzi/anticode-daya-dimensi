import React from "react";
import { Title, ImageList } from "@/components";
import { clientItems } from "@/const/dummyData";

const Client = () => {
	return (
		<section className="bg-[#2F2A2A] px-28 pr-32 pb-[100px] max-md:p-5">
			<div className="">
				<Title
					title={"Our Clients"}
					className="text-[36px] font-normal pt-[100px]"
				/>

				<div className="grid grid-cols-6 gap-7 mt-[100px]">
					<ImageList items={clientItems} />
				</div>
			</div>
		</section>
	);
};

export default Client;
