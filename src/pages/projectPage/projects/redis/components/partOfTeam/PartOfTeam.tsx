import { FunctionComponent } from "react";
import ImageType from "../../../../../../interfaces/ImageType";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import SubTitle from "../../../../components/SubTitle";
import Title from "../../../../components/Title";

interface PartOfTeamProps {
	bgColor: string;
	textColor: string;
	title: string;
	image: ImageType;
	subTitleText: string;
}

const PartOfTeam: FunctionComponent<PartOfTeamProps> = ({ bgColor, textColor, title, subTitleText, image }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<div className="flex w-full justify-between ">
					<div>
						<Title title={title} />
						<SubTitle subTitleText={subTitleText} />
					</div>
					<img className="aspect-square h-[23.2rem]" src={image.url} alt={image.alt} />
				</div>
			</>
		</ProjectWrapper>
	);
};

export default PartOfTeam;
