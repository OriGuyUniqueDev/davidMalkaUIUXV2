import { FunctionComponent } from "react";
import ImageType from "../../../interfaces/ImageType";

interface ButtonTextWithIconProps {
	text: string;
	image: ImageType;
	borderColor: string;
}

const ButtonTextWithIcon: FunctionComponent<ButtonTextWithIconProps> = ({ image, text, borderColor }) => {
	return (
		<a
			href="/files/davidMalkaResume.docx"
			download
			className={`px-6 py-7   md:w-fit sm:w-full h-[6.1rem] flex flex-nowrap items-center gap-2 justify-center ${borderColor}   border-[0.2rem] font-medium text-[1.8rem]`}
		>
			{text}{" "}
			<img
				className=""
				src={image.url}
				alt={image.alt}
			/>
		</a>
	);
};

export default ButtonTextWithIcon;
