import React from "react";
import Image from "next/image";
import { blogItems } from "@/const/dummyData";
import { Title, ButtonLinkArrow } from "@/components";

const Blogs = () => {
	return (
		<section className="pl-64 pr-32 pb-[100px] mt-[-150px]">
			<div className="grid grid-cols-2 gap-4">
				{blogItems.map((item, index) => (
					<div key={index}>
						<Image
							src={item.image}
							alt={item.alt}
							width={0}
							height={0}
							sizes="100vw"
							className="w-full h-auto"
						/>
						<Title
							title={item.title}
							style={{ color: "#000000" }}
							className="text-[#000000] text-[36px] font-normal"
						>
							<p className="mt-2 text-base text-[#504B49] font-[Trebuchet MS] leading-[24px]">
								{item.description}
							</p>
						</Title>

						{item.url && <ButtonLinkArrow url={item.url} text="Learn More" />}
					</div>
				))}
			</div>
		</section>
	);
};

export default Blogs;
