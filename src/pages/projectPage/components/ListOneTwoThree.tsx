import { FunctionComponent } from "react";
import PainPointType from "../../../interfaces/PainPointType";
import GraySubHeader from "./GraySubHeader";
import ProjectWrapper from "./ProjectWrapper";

interface ListOneTwoThreeProps {
	bgColor: string;
	textColor: string;
	numColor: string;
	title: string;
	cards: PainPointType[];
	greyText: string;
}

const ListOneTwoThree: FunctionComponent<ListOneTwoThreeProps> = ({ bgColor, numColor, textColor, title, cards, greyText }) => {
	return (
		<ProjectWrapper
			bgColor={bgColor}
			textColor={textColor}
		>
			<>
				<GraySubHeader text={greyText} />
				<p className="text-[8.4rem] font-bold font-serif w-fit mb-[8.1rem]">{title}</p>
				<div className="flex flex-col gap-[6rem]">
					{cards.map((card, index) => {
						return (
							<div className="grid grid-cols-12  w-full items-center">
								<p className={`${numColor} font-bold text-[20rem] text-left col-span-2 justify-self-start `}>{index + 1}.</p>
								{/* <div className="col-span-1"></div> */}
								<div className="flex flex-col gap-[2.4rem] col-span-9 justify-self-start">
									<p className="font-bold text-[3.6rem]">{card.title}</p>
									<p className="text-[1.8rem] font-light">{card.text}</p>
								</div>
							</div>
						);
					})}
				</div>
			</>
		</ProjectWrapper>
	);
};

export default ListOneTwoThree;
