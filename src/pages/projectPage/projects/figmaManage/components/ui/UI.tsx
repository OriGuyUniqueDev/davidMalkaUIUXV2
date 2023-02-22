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
		<>
			<ProjectWrapper
				bgColor={bgColor}
				textColor={textColor}
			>
				<>
					<GraySubHeader text={greyText} />
					<Title
						isFitWidth={true}
						title={title}
					/>
					<SubTitle subTitleText={subTitleText} />
				</>
			</ProjectWrapper>
			<div className={`w-[100%] ${bgColor} ${textColor}`}>
				<img
					className={`w-[1280px] mx-auto`}
					src={image.url}
					alt={image.alt}
				/>
			</div>
		</>
	);
};

export default UI;
