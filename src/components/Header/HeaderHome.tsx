import Image from "next/image";
import HeaderDescription from "./HeaderDescription";

const containerStyle = {
	backgroundImage: "url('img/header-home.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const Header = () => {
	return (
		<section className="max-md:pb pt-20" style={containerStyle}>
			<div className="grid grid-cols-2 max-md:grid-cols-1 px-32 py-20 max-md:p-5">
				<div>
					<h1 className={`text-5xl mb-2`}>
						Adopt Globally,<span className="block">Adapt Locally</span>
					</h1>
					<p className="mb-10">
						Daya Dimensi Indonesia is a world-class strategic partner for
						individual and organisational transformation through humanity-based
						and technology-supported solutions to help you hire, promote, and
						develop exceptional leaders.
					</p>
					<div className="flex w-fit gap-x-16 max-md:flex-col max-md:gap-4">
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
				<Image
					src="/logo/unwomen.png"
					width={195}
					height={64}
					alt="unwomen"
					className="object-contain"
				/>
				<Image
					src="/logo/iso-updated.png"
					width={260}
					height={64}
					alt="unwomen"
					className="object-contain"
				/>
			</div>
		</section>
	);
};

export default Header;
