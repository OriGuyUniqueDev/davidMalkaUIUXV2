import { FunctionComponent } from "react";

interface ResearchCardProps {
	num: number;
	text: string;
}

const ResearchCard: FunctionComponent<ResearchCardProps> = ({ num, text }) => {
	return (
		<div className="w-[35rem] h-[24.3rem] p-[2rem] border-[0.1rem] border-projectGrey  rounded-[1rem]">
			<p className="font-bold text-[6.4rem]">{num}%</p>
			<p className="text-[1.4rem]">{text}</p>
		</div>
	);
};

export default ResearchCard;
