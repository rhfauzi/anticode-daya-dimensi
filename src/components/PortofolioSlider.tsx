import Image from "next/image";

const PortofolioSlider = () => {
	return (
		<section className="grid grid-cols-6 -mt-60 mb-28 max-md:px-5 max-md:mt-0 max-md:grid-cols-1 relative">
			<div className="top-1/2 left-0 absolute transform -translate-y-1/2 translate-x-1/4 max-md:static max-md:translate-x-0 max-md:translate-y-0">
				<Image
					src="/img/kemendikbudristek.png"
					alt=""
					width={584}
					height={438}
					className="max-md:w-full"
				/>
			</div>
			<div className="bg-[#B92322] col-start-3 col-end-7 max-md:col-span-1">
				<div className="px-28 py-20 grid grid-cols-6 max-md:p-5 max-md:grid-cols-1">
					<div className="col-start-2 col-end-7">
						<Image
							src="/logo/tutwuri.png"
							alt="tut wuri handayani"
							width={98}
							height={71}
							className="mb-5"
						/>
						<div className={`mb-6 font-tstar-regular text-white text-2xl`}>
							"Kolaborasi dalam Program Guru Penggerak sangat meaningful dan
							impactful untuk perkembangan pendidikan di Indonesia, sehingga
							perlu untuk dilakukan secara berkelanjutan."
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
			</div>
		</section>
	);
};

export default PortofolioSlider;
