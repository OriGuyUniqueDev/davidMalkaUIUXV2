import { FunctionComponent } from "react";

interface ExploreIdeasProps {
	data: string;
}

const ExploreIdeas: FunctionComponent<ExploreIdeasProps> = ({ data }) => {
	return (
		<div className="bg-projectBlack w-full md:py-[12rem] sm:py-[6rem]">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[6.4rem] sm:text-[4.8rem] text-projectWhite">Exploration & ideas</p>
				<p className="text-projectWhite font-light text-[1.8rem] md:w-[95.1rem] sm:w-[33.9rem] mt-[1.4rem]">{data}</p>
			</div>
		</div>
	);
};

export default ExploreIdeas;
