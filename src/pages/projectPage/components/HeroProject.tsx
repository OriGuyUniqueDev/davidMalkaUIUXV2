import { FunctionComponent, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";

interface HeroProjectProps {
	imageBG: ImageType;
	image: ImageType;
	resImage: ImageType;
}

const HeroProject: FunctionComponent<HeroProjectProps> = ({ imageBG, image, resImage }) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	window.addEventListener("resize", () => {
		window.innerWidth <= 1280 ? setIsMobile(true) : setIsMobile(false);
	});
	useEffect(() => {
		window.innerWidth <= 1280 ? setIsMobile(true) : setIsMobile(false);
	}, []);
	return (
		<div className="w-full md:h-[52.5rem] sm:h-[42.5rem]  bg-projectBlack ">
			<div className="container mx-auto">
				<LazyLoadImage src={imageBG.url} alt={imageBG.alt} width="100%" className=" md:px-[7rem] sm:px-[1.8rem]  mx-auto md:h-[44.1rem] sm:h-[36rem]  md:relative  pt-[4.2rem] relative" effect="opacity" />
				<LazyLoadImage src={image.url} alt={image.alt} className=" md:px-[7rem] sm:px-[1.8rem]  mx-auto md:h-[42.8rem]   pt-[4.2rem] relative bottom-[20rem] md:left-[45rem] sm:h-fit sm:left-[0rem]" effect="opacity" />
			</div>
		</div>
	);
};

export default HeroProject;
