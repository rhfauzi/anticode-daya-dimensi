import Image from "next/image";
import { phoneNumber, message } from "@/const/generalConst";

export function ButtonWhatsApp() {
	const handleClick = () => {
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.open(url, "_blank");
	};

	return (
		<button
			title="Chat on WhatsApp"
			onClick={handleClick}
			className="fixed bottom-6 right-[90px] z-50 w-[56px] h-[56px] rounded-full shadow-lg  transition-all duration-300 ease-in-out flex items-center justify-center"
			aria-label="Chat on WhatsApp"
		>
			<Image alt="" src="/icon/whatsapp.svg" width={56} height={56} />
		</button>
	);
}

export default ButtonWhatsApp;
