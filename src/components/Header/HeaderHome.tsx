import Image from "next/image";
import { HeaderDescription, Title, ImageList } from "../../components";

const containerStyle = {
	backgroundImage: "url('img/header-home.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const HeaderImgList = [
	{
		src: "/logo/unwomen.png",
		link: "https://www.unwomen.org/",
		alt: "unwomen",
		width: 195,
		height: 64,
	},
	{
		src: "/logo/iso-updated.png",
		link: "https://www.iso.org/iso-9001-quality-management.html",
		alt: "iso",
		width: 260,
		height: 64,
	},
];

const Header = () => {
	return (
		<section className="max-md:pb pt-20" style={containerStyle}>
			<div className="grid grid-cols-2 max-md:grid-cols-1 px-32 py-20 max-md:p-5">
				<div>
					<Title
						title={`Adopt Globally,<br/> Adapt Locally`}
						style={{ fontSize: "52px" }}
					>
						<p
							className="mt-[20px] text-[16px] leading-6"
							style={{ fontFamily: "Trebuchet MS" }}
						>
							Daya Dimensi Indonesia is a world-class strategic partner for
							individual and organisational transformation through
							humanity-based and technology-supported solutions to help you
							hire, promote, and develop exceptional leaders.
						</p>
					</Title>

					<div className="mt-[20px] flex w-fit gap-x-16 max-md:flex-col max-md:gap-4">
						<div className="flex gap-x-3 btn-action" role="button">
							<span className={`font-tstar text-base`}>
								LEARN MORE ABOUT US
							</span>
							<Image
								width={15}
								height={5}
								src="/icon/arrow-right-white-2.svg"
								alt="arrow right white small"
								className="arrow-bounce"
							/>
						</div>
						<div className="flex gap-x-3 btn-action" role="button">
							<span className={`font-tstar text-base`}>CONTACT US</span>
							<Image
								width={15}
								height={5}
								src="/icon/arrow-right-white-2.svg"
								alt="arrow right white small"
								className="arrow-bounce"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-x-8 max-md:flex-col max-md:gap-y-6 max-md:items-center">
				<HeaderDescription />

				<div className="flex justify-start items-center">
					<ImageList items={HeaderImgList} />
				</div>
			</div>
		</section>
	);
};

export default Header;
