import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";

interface HeroProjectProps {
	imageBG: ImageType;
	image: ImageType;
}

const HeroProject: FunctionComponent<HeroProjectProps> = ({ imageBG, image }) => {
	return (
		<div className="w-full md:h-[52.5rem]  bg-projectBlack ">
			<div className="container mx-auto">
				<LazyLoadImage src={imageBG.url} alt={imageBG.alt} width="100%" className=" md:px-[7rem] sm:px-[1.8rem]  mx-auto h-[44.1rem] pt-[4.2rem] relative" effect="opacity" />
				<LazyLoadImage src={image.url} alt={image.alt} className=" md:px-[7rem] sm:px-[1.8rem]  mx-auto h-[42.8rem]   pt-[4.2rem] relative bottom-[28rem] left-[45rem]" effect="opacity" />
			</div>
		</div>
	);
};

export default HeroProject;
