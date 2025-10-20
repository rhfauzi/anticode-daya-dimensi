import Image from "next/image";

interface IExpertiseItemProps {
	icon: string;
	title: string;
}

const containerStyle = {
	backgroundImage: "url('/svg/expertise-bg.svg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const ExpertiseItem = ({ icon, title }: IExpertiseItemProps) => {
	return (
		<div
			className="bg-[#8B0B04] relative overflow-hidden transition-all duration-500 group rounded-lg"
			style={containerStyle}
		>
			<Image
				src="/img/expertise-1.png"
				alt="Expertise 1"
				width={0}
				height={0}
				sizes="100vw"
				className="absolute inset-0 w-full h-full object-cover transform scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
			/>
			<div className="bg-expertise-inner">
				<div className="relative z-10 flex flex-col justify-between h-[379px] w-full px-6 py-8 max-md:h-[300px]">
					<div>
						<Image
							src={`/icon/${icon}`}
							width={56}
							height={56}
							alt={title}
							className="mb-5"
						/>
						<h3
							className={`font-tstar-light text-4xl text-white max-md:text-2xl`}
						>
							{title}
						</h3>
					</div>
					<span className="flex justify-end" role="button">
						<Image
							src="/icon/arrow-right-white-1.svg"
							alt="arrow"
							width={30}
							height={10}
						/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ExpertiseItem;
