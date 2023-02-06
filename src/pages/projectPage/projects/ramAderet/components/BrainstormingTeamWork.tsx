import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface BrainstormingTeamWorkProps {}

const BrainstormingTeamWork: FunctionComponent<BrainstormingTeamWorkProps> = () => {
	return (
		<div className="mt-[10rem] text-center ">
			<p className="text-[2.4rem]">Brainstorming & team work</p>
			<p className="text-[1.8rem] mb-[3.1rem]">Whiteboarding process for Project dashboard feature</p>
			<LazyLoadImage src="/images/projects/ramAderet/images/brainstorm.png" alt="brainstorm image" className="mx-auto" />
		</div>
	);
};

export default BrainstormingTeamWork;
