import { FunctionComponent } from "react";
import ImageType from "../../../../../../interfaces/ImageType";
import ButtonTextWithIcon from "../../../../components/ButtonTextWithIcon";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import SubTitle from "../../../../components/SubTitle";
import Title from "../../../../components/Title";

interface PresentationProps {
	bgColor: string;
	textColor: string;
	greyText: string;
	title: string;
	imageButton: ImageType;
	image: ImageType;
	subTitleText: string;
}

const Presentation: FunctionComponent<PresentationProps> = ({ bgColor, greyText, image, subTitleText, textColor, title, imageButton }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<Title title={title} />
				<SubTitle subTitleText={subTitleText} />
				<span className="mb-[3.9rem] mt-[4.4rem] block w-[20.5rem]">
					<ButtonTextWithIcon borderColor="border-projectBlack" text={"View presentation"} image={imageButton} />
				</span>
				<img className="h-[49.3rem] relative ml-auto" src={image.url} alt={image.alt} />
			</>
		</ProjectWrapper>
	);
};

export default Presentation;
