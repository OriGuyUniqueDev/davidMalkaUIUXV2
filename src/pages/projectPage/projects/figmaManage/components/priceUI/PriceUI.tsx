import { FunctionComponent } from "react";
import ImageType from "../../../../../../interfaces/ImageType";
import ButtonTextWithIcon from "../../../../components/ButtonTextWithIcon";
import GraySubHeader from "../../../../components/GraySubHeader";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import SubTitle from "../../../../components/SubTitle";
import Title from "../../../../components/Title";

interface PriceUIProps {
	bgColor: string;
	textColor: string;
	greyText: string;
	title: string;
	image: ImageType[];
	subTitleText: string;
}

const PriceUI: FunctionComponent<PriceUIProps> = ({ bgColor, greyText, textColor, title, image, subTitleText }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<GraySubHeader text={greyText} />
				<Title title={title} />
				<span className="mb-[3.9rem] mt-[4.4rem] block w-[20.5rem]">
					<ButtonTextWithIcon borderColor="border-projectWhite" text={"Prototype"} image={{ url: "/icons/leftArrowWhite.svg", alt: "arrow icon" }} />
				</span>
				<SubTitle subTitleText={subTitleText} />
				<div className="relative w-full flex flex-col items-center pb-[24rem]">
					<img className="mt-[4.4rem]" src={image[0].url} alt={image[0].alt} />
					<img className="mt-[4.4rem] absolute bottom-[0rem]  aspect-auto w-[86%]   " src={image[1].url} alt={image[1].alt} />
				</div>
			</>
		</ProjectWrapper>
	);
};

export default PriceUI;
