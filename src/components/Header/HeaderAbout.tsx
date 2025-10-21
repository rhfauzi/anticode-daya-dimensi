import Image from "next/image";
import { scrollToId } from "@/lib/utils";
import { Title, Breadcrumb, ImageList } from "@/components";
import { HeaderAboutImgList } from "@/const/dummyData";

const containerStyle = {
	backgroundImage: "url('img/header-about.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const HeaderAbout = () => {
	return (
		<section className="max-md:pb max-md:h-[auto]" style={containerStyle}>
			<div className="w-[531px] h-full max-md:pt-[200px] max-md:grid-cols-1 max-md:p-5 max-md:w-[100%]">
				<div className="bg-[#2F2A2A] flex">
					<div className="pt-[100px] px-28 flex flex-col justify-between gap-5 max-md:px-5">
						<Breadcrumb className="mb-[150px]" />
						<ImageList items={HeaderAboutImgList} />
						<Title
							className="mb-[75px]"
							title={`Force of Progress`}
							styleCss={{ fontSize: "52px" }}
						>
							<p
								className="mt-[20px] text-[16px] leading-6 font-normal"
								style={{ fontFamily: "Trebuchet MS" }}
							>
								Daya Dimensi Indonesia is a leadership consultant that supports
								organisations develop and deliver strategic programmes such as
								assessment centre, selection, learning, and personal &
								organisational transformation.
							</p>
						</Title>
						<div
							className="h-[57px] w-[100px]"
							onClick={() => scrollToId("expertise")}
						>
							<Image
								src="/icon/arrow-down-white-1.svg"
								alt="arrow down"
								width={9}
								height={3}
								className="arrow-bounce"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderAbout;
