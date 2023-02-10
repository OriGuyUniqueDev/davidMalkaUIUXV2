import { FunctionComponent } from "react";
import GraySubHeader from "../../../../components/GraySubHeader";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import Title from "../../../../components/Title";

interface DilemasProps {
	bgColor: string;
	textColor: string;
	greyText: string;
	title: string;
}

const Dilemas: FunctionComponent<DilemasProps> = ({ bgColor, textColor, greyText, title }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<GraySubHeader text={greyText} />
				<Title title={title} />
				<p className="text-[1.8rem] w-[67.1rem] leading-[2.87rem] mb-[7.2rem]">The challenge was finding the best place for the Figma Manage plugin, to ensure it wouldn't interrupt the designer's workflow but also have enough visibility to showcase its features.</p>
				<div className="drop-shadow-2xl shadow-projectBlack bg-projectWhite w-[100.6rem] mx-auto px-[12rem] py-[5.9rem] flex gap-[7rem] justify-center items-center rounded-[2rem]">
					<img src="/icons/textQuestion.svg" alt="Question icon" />
					<div className="flex flex-col gap-[2.4rem]">
						<p className="text-[3.6rem] font-bold">Dilema</p>
						<p className="text-[1.8rem]">Decide whether to include in the plugin the option of synchronizing tasks to another management tool or whether the plugin will remain stand alone.</p>
					</div>
				</div>
				<div className="grid grid-cols-2 grid-flow-col-dense gap-[7.2rem] w-full justify-center my-[7.2rem]">
					<div className="flex flex-col gap-10 w-[42rem] h-[38.9rem] text-[1.8rem]">
						<img src="/images/projects/figmaManage/images/dilema1.png" alt="dilema image" />
						<p className="">The plug-in in the first configuration - located in the right side panel of the Figma under a tab called Task.</p>
					</div>
					<div className="flex flex-col gap-10 h-[38.9rem] text-[1.8rem]">
						<img src="/images/projects/figmaManage/images/dilema2.png" alt="dilema image" />
						<p className="">The plug-in is placed in a floating model with the option to minimize and hide it if necessary so as not to create an unnecessary disturbance in the design work</p>
					</div>
				</div>
			</>
		</ProjectWrapper>
	);
};

export default Dilemas;
