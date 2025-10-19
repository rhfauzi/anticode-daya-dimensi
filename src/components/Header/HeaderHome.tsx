import {
	Title,
	ImageList,
	ButtonLinkArrow,
	HeaderDescription,
} from "../../components";
import { HeaderImgList } from "@/const/dummyData";

const containerStyle = {
	backgroundImage: "url('img/header-home.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const Header = () => {
	return (
		<section
			className="h-[700px] pt-20 max-md:pb max-md:h-[auto] max-md:flex max-md:flex-col max-md:items-center"
			style={containerStyle}
		>
			<div className="flex flex-row">
				<div className="w-[70%] h-[464px] px-32 py-[40px] max-md:w-full max-md:h-auto">
					<Title
						title={`Adopt Globally,<br/> Adapt Locally`}
						style={{ fontSize: "52px" }}
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
			<div className="flex flex-row gap-5 max-md:w-full max-md:p-5 max-md:flex max-md:flex-col max-md:items-center">
				<div className="w-[70%] h-[156px] flex gap-x-8 max-md:w-full max-md:h-auto max-md:flex-col max-md:gap-y-6 max-md:items-center">
					<HeaderDescription />
				</div>

				<div className="w-[25%] h-[156px] gap-[20px] py-5 flex justify-start items-center max-md:w-full max-md:h-auto max-md:justify-center">
					<ImageList items={HeaderImgList} />
				</div>
			</div>
		</section>
	);
};

export default Header;
