import Image from "next/image";
import { scrollToId } from "@/lib/utils";
import { NumberList } from "@/components";
import { numberList } from "@/const/dummyData";
import { HeaderImgList } from "@/const/dummyData";
import { Title, ImageList, ButtonLinkArrow } from "../../components";

const containerStyle = {
	backgroundImage: "url('img/header-home.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const Header = () => {
	return (
		<section
			className="h-[700px] pt-20 max-md:pb max-md:flex max-md:flex-col max-md:items-center max-md:h-auto"
			style={containerStyle}
		>
			<div className="flex flex-row">
				<div className="w-[60%] h-[464px] px-32 py-[40px] max-md:w-full max-md:h-auto">
					<Title
						title={`Adopt Globally,<br/> Adapt Locally`}
						styleCss={{ fontSize: "52px" }}
					>
						<p
							className="mt-[20px] text-[16px] leading-6 font-normal"
							style={{ fontFamily: "Trebuchet MS" }}
						>
							Daya Dimensi Indonesia is a world-class strategic partner for
							individual and organisational transformation through
							humanity-based and technology-supported solutions to help you
							hire, promote, and develop exceptional leaders.
						</p>
					</Title>

					<div className="mt-[20px] text-[#FFFFFF] flex w-fit gap-x-16 max-md:flex-col max-md:gap-4">
						<ButtonLinkArrow
							url={"/learn-more"}
							text="LEARN MORE ABOUT US"
							arrowImg="/icon/arrow-right-white-2.svg"
							style={{ color: "#FFFFFF" }}
						/>
						<ButtonLinkArrow
							url={"/contact"}
							text="CONTACT US"
							arrowImg="/icon/arrow-right-white-2.svg"
							style={{ color: "#FFFFFF" }}
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-row justify-start w-full h-[156px] max-md:h-auto max-md:flex-col max-md:justify-center max-md:mt-5">
				<div className="w-28 bg-[#ffffff] flex justify-center items-center max-md:w-full">
					<div
						onClick={() => scrollToId("expertise")}
						className="flex flex-col items-center cursor-pointer gap-3 max-md:pt-5"
					>
						<span className="text-[#00000066] text-xs font-bold text-discover">
							DISCOVER
						</span>
						<Image
							src="/icon/arrow-down-black-xs.svg"
							width={9}
							height={3}
							alt="arrow down black xs"
						/>
					</div>
				</div>

				<div className="w-full flex flex-row justify-start gap-5 max-md:flex-col max-md:justify-center">
					<div className="w-[70%] bg-[#ffffff] gap-[20px] py-5 grid grid-cols-3 max-md:w-full max-md:justify-center">
						<NumberList dataSource={numberList} />
					</div>

					<div className="w-[30%] gap-[20px] py-5 flex justify-start items-center max-md:w-full max-md:flex-col max-md:justify-center">
						<ImageList items={HeaderImgList} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
