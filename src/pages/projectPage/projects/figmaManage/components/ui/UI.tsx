import { FunctionComponent } from "react";
import ImageType from "../../../../../../interfaces/ImageType";
import GraySubHeader from "../../../../components/GraySubHeader";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import SubTitle from "../../../../components/SubTitle";
import Title from "../../../../components/Title";

interface UIProps {
	bgColor: string;
	textColor: string;
	greyText: string;
	title: string;
	image: ImageType;
	subTitleText: string;
}

const UI: FunctionComponent<UIProps> = ({ bgColor, greyText, image, subTitleText, textColor, title }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<GraySubHeader text={greyText} />
				<Title isFitWidth={true} title={title} />
				<SubTitle subTitleText={subTitleText} />
				<img src={image.url} alt={image.alt} />
			</>
		</ProjectWrapper>
	);
};

export default UI;
