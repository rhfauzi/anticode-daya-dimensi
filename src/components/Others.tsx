import React from "react";
import { Title, ButtonLinkArrow } from "@/components";
import { clientItems } from "@/const/dummyData";

const othersStyle = {
	backgroundImage: "url('/img/others.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const Others = () => {
	return (
		<section
			className="px-28 pr-32 pb-[100px] h-[600px] max-md:p-5"
			style={othersStyle}
		>
			<div className="grid grid-cols-3 gap-8 bottom-1 h-full items-end">
				<Title
					title={"Family"}
					className="text-[36px] font-normal pt-[60px] border-b-4 border-solid border-[#E0E0E0]"
				>
					<>
						<p className="mt-1 text-base text-[#FFFFFFCC] leading-[24px]">
							Introducing the DayaLima Family
						</p>
						<ButtonLinkArrow
							url={"/learn-more"}
							text="LEARN MORE"
							arrowImg="/icon/arrow-right-white-2.svg"
							style={{ color: "#FFFFFF", marginBottom: "24px" }}
						/>
					</>
				</Title>
				<Title
					title={"Board of Management"}
					className="text-[36px] font-normal pt-[100px] border-b-4 border-solid border-[#E0E0E0]"
				/>
				<Title
					title={"Partners"}
					className="text-[36px] font-normal pt-[100px] border-b-4 border-solid border-[#E0E0E0]"
				/>
			</div>
		</section>
	);
};

export default Others;
