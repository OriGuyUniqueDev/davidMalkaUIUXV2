import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";

interface StyleGuideProps {
	image: ImageType;
}

const StyleGuide: FunctionComponent<StyleGuideProps> = ({ image }) => {
	return (
		<div className="bg-projectWhite w-full py-[6rem] text-projectBlack ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[8.4rem] sm:text-[4.8rem] w-[52.6rem] mb-[4.4rem]">Style guide</p>
				<LazyLoadImage src={image.url} alt={image.alt} />
			</div>
		</div>
	);
};

export default StyleGuide;
