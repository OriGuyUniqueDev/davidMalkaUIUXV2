import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";

interface ExecutionProps {
	images: ImageType[];
}

const Execution: FunctionComponent<ExecutionProps> = ({ images }) => {
	return (
		<div className="bg-projectBlack w-full md:py-[12rem] sm:py-[6rem] text-projectWhite ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[8.4rem] sm:text-[4.8rem] w-[52.6rem]">From Idea to execution</p>
				<p className="text-[2.4rem] mb-[7.2rem]">A prototype that demonstrates the workflow</p>
				<div className="flex flex-col gap-[7.2rem]">
					{images.map((image, index) => {
						return <LazyLoadImage key={index} className="" src={image.url} alt={image.alt} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Execution;
