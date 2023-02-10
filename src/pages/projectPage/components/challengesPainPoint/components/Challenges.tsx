import { FunctionComponent } from "react";
import ChallengeType from "../../../../../interfaces/ChallengeType";
import Title from "../../Title";

interface ChallengesProps {
	challenges: ChallengeType[];
	title?: string | undefined;
}

const Challenges: FunctionComponent<ChallengesProps> = ({ challenges, title }) => {
	return (
		<div>
			{!title && <p className="text-[2.4rem] font-bold mb-[2.4rem] text-projectGrey">CHALLENGES</p>}
			{title && <Title title={title} />}
			<div className="flex flex-col gap-[5.5rem]">
				{challenges.map((challenge) => {
					return (
						<div className="  ">
							<p className="text-[2.4rem] font-bold">{challenge.title}</p>
							<div className="grid grid-flow-col-dense gap-[4rem] text-[1.8rem] items-center ">
								<p>{challenge.textLeft}</p>
								<img src="/icons/drawArrow.svg" alt="arrow" />
								<p>{challenge.textRight}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Challenges;
