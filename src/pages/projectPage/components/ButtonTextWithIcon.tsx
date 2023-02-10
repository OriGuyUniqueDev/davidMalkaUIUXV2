import { FunctionComponent } from "react";
import ImageType from "../../../interfaces/ImageType";

interface ButtonTextWithIconProps {
	text: string;
	image: ImageType;
	borderColor: string;
}

const ButtonTextWithIcon: FunctionComponent<ButtonTextWithIconProps> = ({ image, text, borderColor }) => {
	return (
		<a href="/files/davidMalkaResume.docx" download className={`px-6 py-7  md:w-full sm:w-full h-[6.1rem] flex items-center gap-4 justify-center ${borderColor}   border-[0.2rem] font-bold text-2xl`}>
			{text} <img src={image.url} alt={image.alt} />
		</a>
	);
};

export default ButtonTextWithIcon;
