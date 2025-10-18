import Image from "next/image";
import { Title } from "../components";

const bgBeAPart = {
	backgroundImage: "url('/img/work-ddi.jpg')",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const BeAPart = () => {
	return (
		<section className="max-md:px-5" style={bgBeAPart}>
			<div className="grid grid-cols-2 h-full max-md:grid-cols-1 inset-0 bg-gradient-to-r from-[#000000CC] to-transparent">
				<div className="px-28 py-44">
					<Title title={`Be a Part of <br/> Daya Dimensi Indonesia`}>
						<p className="mt-5 text-base text-[#FFFFFFCC] leading-[24px]">
							Are you the resilient leaders we are searching for? Join Daya
							Dimensi Indonesia to advance your leadership skill and generate
							exceptional leaders across Indonesia at once.
						</p>
					</Title>

					<div
						className="mt-5 flex gap-x-2 items-center btn-action"
						role="button"
					>
						<span className={`font-tstar-bold text-base text-white`}>
							LEARN MORE
						</span>
						<Image
							src="/icon/arrow-right-white-2.svg"
							alt="arrow right"
							width={15}
							height={5}
							className="arrow-bounce"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BeAPart;
