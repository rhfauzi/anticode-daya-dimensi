import FooterBottom from "./FooterBottom";
import ImageList from "./ImageList";
import Image from "next/image";

const SupportListItems = [
	{
		src: "/logo/gptw-certification.png",
		link: "https://www.greatplacetowork.com/certified-company/1000785",
		alt: "gptw",
		width: 35,
		height: 60,
	},
	{
		src: "/logo/unwomen.png",
		link: "https://www.unwomen.org/",
		alt: "unwomen",
		width: 152,
		height: 50,
	},
	{
		src: "/logo/iso-updated.png",
		link: "https://www.iso.org/",
		alt: "iso updated",
		width: 206,
		height: 50,
	},
];

const SocialListItems = [
	{
		src: "/icon/facebook.svg",
		link: "https://www.facebook.com/",
		alt: "facebook",
		width: 0,
		height: 32,
	},
	{
		src: "/icon/instagram.svg",
		link: "https://www.instagram.com/",
		alt: "instagram",
		width: 0,
		height: 32,
	},
	{
		src: "/icon/linkedin.svg",
		link: "https://www.linkedin.com/",
		alt: "linkedin",
		width: 32,
		height: 32,
	},
	{
		src: "/icon/youtube.svg",
		link: "https://www.youtube.com/",
		alt: "youtube",
		width: 32,
		height: 32,
	},
	{
		src: "/icon/twitter.svg",
		link: "https://www.x.com/",
		alt: "x",
		width: 32,
		height: 32,
	},
];

const Footer = () => {
	return (
		<footer className="bg-[#2F2A2A]">
			<div className="mb-14 px-32 flex justify-between py-12 items-center max-md:flex-col max-md:p-5 max-md:gap-y-6 max-md:mb-5">
				<div className="gap-x-6 flex max-md:flex-wrap max-md:justify-center max-md:gap-4">
					<ImageList items={SupportListItems} />
				</div>
				<div className="gap-x-5 flex items-center gap-4">
					<ImageList items={SocialListItems} />
				</div>
				<div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
					<h4 className={`font-tstar-light text-white text-2xl mb-3`}>
						Subscribe. Join the Community.
					</h4>
					<form method="post">
						<div className="flex width-full">
							<input
								type="email"
								name="email"
								placeholder="Email address"
								className="placeholder:text-[#00000066] px-4 py-3"
							/>
							<button
								type="submit"
								className="bg-[#B92322] px-4 py-5 btn-action"
							>
								<Image
									alt=""
									src="/icon/arrow-right-white-1.svg"
									width={18}
									height={6}
								/>
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="w-full h-[1px] bg-[#FFFFFF]" />
			<FooterBottom />
		</footer>
	);
};

export default Footer;
