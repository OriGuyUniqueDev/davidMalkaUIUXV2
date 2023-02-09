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
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<GraySubHeader text={greyText} />
				<p className="text-[8.4rem] font-bold font-serif w-[80rem] mb-[8.1rem]">{title}</p>
				<div className="flex flex-col gap-[6rem]">
					{cards.map((card, index) => {
						return (
							<div className="flex gap-[6rem] items-center">
								<p className={`${numColor} text-[20rem]`}>{index + 1}.</p>
								<div className="flex flex-col gap-[2.4rem]">
									<p className="font-bold text-[3.6rem]">{card.title}</p>
									<p className="text-[1.8rem]">{card.text}</p>
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
