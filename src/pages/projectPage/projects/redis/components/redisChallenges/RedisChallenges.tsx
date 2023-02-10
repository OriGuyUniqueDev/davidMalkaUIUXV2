import { FunctionComponent } from "react";
import ChallengeType from "../../../../../../interfaces/ChallengeType";
import Challenges from "../../../../components/challengesPainPoint/components/Challenges";
import ProjectWrapper from "../../../../components/ProjectWrapper";

interface RedisChallengesProps {
	challenges: ChallengeType[];
	title: string;
	bgColor: string;
	textColor: string;
}

const RedisChallenges: FunctionComponent<RedisChallengesProps> = ({ bgColor, challenges, textColor, title }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<Challenges title={title} challenges={challenges} />
		</ProjectWrapper>
	);
};

export default RedisChallenges;
