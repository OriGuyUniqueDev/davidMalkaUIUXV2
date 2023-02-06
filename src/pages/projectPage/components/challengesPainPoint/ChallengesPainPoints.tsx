import { FunctionComponent } from "react";
import PainPointType from "../../../../interfaces/PainPointType";
import Challenges from "./components/Challenges";
import PainPoint from "./components/PainPoint";

interface ChallengesPainPointsProps {}

const ChallengesPainPoints: FunctionComponent<ChallengesPainPointsProps> = () => {
	const painPoints: PainPointType[] = [
		{
			title: "Old fashion proccess",
			text: "Ram Aedret has a challenge for users who are not skilled in technology.",
		},
		{
			title: "Organization control ",
			text: "Ram Aeret has a challenge as some users lack the tools to organize roles and departments.",
		},
		{
			title: "Suppliers communication",
			text: "Ram Aderet faces a challenge as users communicate with suppliers through slow and inefficient methods such as letters and email.",
		},
		{
			title: "Employees access",
			text: "Ram Aderet has a challenge because managers struggle with granting employee access, leading to the need for a system or tool to simplify the process and ensure necessary access for employees.",
		},
	];
	return (
		<div className=" bg-projectLightGray w-full py-[12rem] text-projectBlack ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[6.4rem] sm:text-[4.8rem] mb-[4.4rem] ">Challenges & Pain points</p>
				<Challenges />
				<hr className="my-[4.4rem]" />
				<PainPoint painPoints={painPoints} />
			</div>
		</div>
	);
};

export default ChallengesPainPoints;
