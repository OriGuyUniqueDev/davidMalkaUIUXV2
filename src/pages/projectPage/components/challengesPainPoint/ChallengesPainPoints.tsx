import { FunctionComponent } from "react";
import ChallengeType from "../../../../interfaces/ChallengeType";
import PainPointType from "../../../../interfaces/PainPointType";
import Challenges from "./components/Challenges";
import PainPoint from "./components/PainPoint";

interface ChallengesPainPointsProps {
	painPoints: PainPointType[];
	challenges: ChallengeType[];
}

const ChallengesPainPoints: FunctionComponent<ChallengesPainPointsProps> = ({ painPoints, challenges }) => {
	return (
		<div className=" bg-projectLightGray w-full py-[12rem] text-projectBlack ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[6.4rem] sm:text-[4.8rem] mb-[4.4rem] ">Challenges & Pain points</p>
				<Challenges challenges={challenges} />
				<hr className="my-[4.4rem]" />
				<PainPoint painPoints={painPoints} />
			</div>
		</div>
	);
};

export default ChallengesPainPoints;
