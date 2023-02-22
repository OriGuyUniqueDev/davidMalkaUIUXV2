import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";
import ProjectWrapper from "./ProjectWrapper";

interface BringTogetherProps {
	images: ImageType[];
}

const BringTogether: FunctionComponent<BringTogetherProps> = ({ images }) => {
	return (
		<ProjectWrapper
			bgColor="bg-projectWhite"
			textColor="text-projectBlack"
		>
			<>
				<div className="md:max-w-[1280px] mx-auto  sm:px-[1.8rem] ">
					<p className="font-bold font-serif md:text-[8.4rem] sm:text-[4.8rem] w-[52.6rem] mb-[4.4rem]">Bring it all together</p>
				</div>
				{images.map((image) => {
					return (
						<img
							// width="100%"
							className="w-[100%] h-fit"
							src={image.url}
							alt={image.alt}
						/>
					);
				})}
			</>
		</ProjectWrapper>
	);
};

export default BringTogether;
