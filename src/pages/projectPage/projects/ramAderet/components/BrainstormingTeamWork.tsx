import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BrainstormingTeamWorkProps {}

const BrainstormingTeamWork: FunctionComponent<BrainstormingTeamWorkProps> = () => {
	return (
		<div className="mt-[10rem] text-center ">
			<p className="font-normal text-[2.4rem]">Brainstorming & team work</p>
			<p className="font-light text-[1.8rem] mb-[3.1rem]">Whiteboarding process for Project dashboard feature</p>
			<img
				src="/images/projects/ramAderet/images/brainstorm.png"
				alt="brainstorm image"
				className="mx-0 "
			/>
		</div>
	);
};

export default BrainstormingTeamWork;
