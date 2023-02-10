import { FunctionComponent } from "react";
import GraySubHeader from "../../../../components/GraySubHeader";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import SubTitle from "../../../../components/SubTitle";
import Title from "../../../../components/Title";

interface PriceProps {
	bgColor: string;
	textColor: string;
	greyText: string;
	title: string;
	subTitleText: string;
}

const Price: FunctionComponent<PriceProps> = ({ bgColor, greyText, textColor, title, subTitleText }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<GraySubHeader text={greyText} />
				<Title title={title} />
				<SubTitle subTitleText={subTitleText} />
				<div className="flex gap-[4.4rem] mt-[4.4rem] w-full">
					<img className="w-[35rem]" src="/images/projects/figmaManage/images/price1.png" alt="price image" />
					<img className="w-[35rem]" src="/images/projects/figmaManage/images/price2.png" alt="price image" />
					<img className="w-[35rem]" src="/images/projects/figmaManage/images/price3.png" alt="price image" />
				</div>
			</>
		</ProjectWrapper>
	);
};

export default Price;
