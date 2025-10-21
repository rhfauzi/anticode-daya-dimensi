import React from "react";
import { Title, ButtonLinkArrow } from "@/components";
import { othersListItems } from "@/const/dummyData";

const othersStyle = {
	backgroundImage: "url('/img/others.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const Others = () => {
	return (
		<section
			className="px-28 pr-32 pb-[70px] h-[600px] max-md:p-5 max-md:h-auto"
			style={othersStyle}
		>
			<div className="grid grid-cols-3 gap-8 bottom-1 h-full items-end max-md:grid-cols-1">
				{othersListItems.map((item, index) => (
					<Title
						key={index}
						title={item.title}
						className="text-[36px] font-normal pt-[60px] border-b-4 border-solid border-[#E0E0E0]"
					>
						<>
							<p className="mt-1 text-base text-[#FFFFFFCC] leading-[24px]">
								{item.description}
							</p>
							{item.url && (
								<ButtonLinkArrow
									url={item.url}
									text={item.buttonText}
									arrowImg="/icon/arrow-right-white-2.svg"
									style={{ color: "#FFFFFF" }}
								/>
							)}
							<div style={{ marginBottom: "24px" }} />
						</>
					</Title>
				))}
			</div>
		</section>
	);
};

export default Others;
