import Image from "next/image";

const PortofolioSlider = () => {
	return (
		<section className="flex flex-row justify-end mb-16 mt-[-240px] z-10 max-md:mt-10 max-md:justify-center max-md:items-center">
			<div className="w-[80%] h-[598px] bg-[#8B0B04] bg-[url('/svg/portofolio-bg.svg')] absolute max-md:w-auto " />
			<div className="flex flex-row justify-around items-center w-full h-[598px] px-28 gap-5 z-20 max-md:p-5 max-md:h-full max-md:flex-col max-md:bg-[#8B0B04] max-md:mx-5">
				<div className="w-[50%] h-[438px] max-md:w-full max-md:h-auto">
					<Image
						src="/img/kemendikbudristek.png"
						alt=""
						width={584}
						height={0}
						sizes="100vw"
						className="w-[584px] h-auto max-md:w-full"
					/>
				</div>
				<div className="w-[50%] max-md:w-full">
					<Image
						src="/logo/tutwuri.png"
						alt="tut wuri handayani"
						width={98}
						height={71}
						className="mb-5"
					/>
					<div className={`mb-6 font-tstar-regular text-white text-2xl`}>
						"Kolaborasi dalam Program Guru Penggerak sangat meaningful dan
						impactful untuk perkembangan pendidikan di Indonesia, sehingga perlu
						untuk dilakukan secara berkelanjutan."
					</div>
					<div className="mb-8 font-tstar-pro-regular text-lg text-white">
						Kementerian Pendidikan, Budaya, Riset, dan Teknologi
					</div>
					<div className="flex justify-end items-center gap-x-8 max-md:flex-col max-md:gap-y-4 max-md:items-center">
						<div className="w-full bg-gray-50 opacity-30 rounded-full h-1 dark:bg-gray-700">
							<div
								className="bg-gray-500 h-1 rounded-full"
								style={{ width: "45%" }}
							></div>
						</div>

						<div className="flex gap-x-5">
							<Image
								src="/icon/chevron-left-cricle-white-md.svg"
								alt="chevron left"
								width={56}
								height={56}
								role="button"
							/>
							<Image
								src="/icon/chevron-right-circle-white-md.svg"
								alt="chevron right"
								width={56}
								height={56}
								role="button"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortofolioSlider;
