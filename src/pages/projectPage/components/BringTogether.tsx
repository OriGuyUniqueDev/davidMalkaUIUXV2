import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";
import ProjectWrapper from "./ProjectWrapper";

interface BringTogetherProps {
	images: ImageType[];
}

const BringTogether: FunctionComponent<BringTogetherProps> = ({ images }) => {
	return (
		<ProjectWrapper bgColor="bg-projectWhite" textColor="text-projectBlack">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[8.4rem] sm:text-[4.8rem] w-[52.6rem] mb-[4.4rem]">Bring it all together</p>
				{images.map((image) => {
					return <LazyLoadImage width="100%" src={image.url} alt={image.alt} />;
				})}
			</div>
		</ProjectWrapper>
	);
};

export default BringTogether;
