import { FunctionComponent, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";

interface HeroProjectProps {
	imageBG: ImageType;
	image: ImageType;
	resImage: ImageType;
	isRamAderet?: boolean | undefined;
}

const HeroProject: FunctionComponent<HeroProjectProps> = ({ imageBG, image, resImage, isRamAderet }) => {
	return (
		<div className="w-full md:h-[52.5rem] sm:h-[42.5rem] relative z-50 bg-projectBlack ">
			<div className="container mx-auto">
				<img
					src={imageBG.url}
					alt={imageBG.alt}
					width="100%"
					className="  md:px-[7rem] sm:px-[1.8rem]  mx-auto md:h-[44.1rem] sm:h-[36rem]  md:relative  pt-[4.2rem] relative"
				/>
				<img
					src={image.url}
					alt={image.alt}
					className={`md:px-[7rem] sm:px-[1.8rem]  mx-auto ${isRamAderet && "h-[50rem] md:left-[15rem]"}  aspect-auto pt-[4.2rem] relative bottom-[28.5rem] md:left-[25rem]  `}
				/>
			</div>
		</div>
	);
};

export default HeroProject;
