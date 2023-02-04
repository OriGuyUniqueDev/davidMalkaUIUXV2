import { FunctionComponent } from "react";

interface ExploreIdeasProps {
	data: string;
}

const ExploreIdeas: FunctionComponent<ExploreIdeasProps> = ({ data }) => {
	return (
		<div className="bg-projectBlack w-full py-[6rem] ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif text-[6.4rem] text-projectWhite">Exploration & ideas</p>
				<p className="text-projectWhite text-[1.8rem] w-[95.1rem] mt-[1.4rem]">{data}</p>
			</div>
		</div>
	);
};

export default ExploreIdeas;
