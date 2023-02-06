import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageType from "../../../interfaces/ImageType";

interface ExecutionProps {
	image: ImageType;
}

const Execution: FunctionComponent<ExecutionProps> = ({ image }) => {
	return (
		<div className="bg-projectBlack w-full md:py-[12rem] sm:py-[6rem] text-projectWhite ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[8.4rem] sm:text-[4.8rem] w-[52.6rem]">From Idea to execution</p>
				<p className="text-[2.4rem] mb-[7.2rem]">A prototype that demonstrates the workflow</p>
				<LazyLoadImage src={image.url} alt={image.alt} />
			</div>
		</div>
	);
};

export default Execution;
