import { FunctionComponent } from "react";
import ThreeColTextGridType from "../../../../../../interfaces/ThreeColTextGridType";
import GraySubHeader from "../../../../components/GraySubHeader";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import ThreeColTextGrid from "../ThreeColTextGrid";

interface ManagingDesignProps {
	cards: ThreeColTextGridType[];
	grayHeader: string;
	title: string;
	bgColor: string;
	textColor: string;
}

const ManagingDesign: FunctionComponent<ManagingDesignProps> = ({ cards, grayHeader, title, bgColor, textColor }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<GraySubHeader text={grayHeader} />
				<p className="text-[8.4rem] font-bold font-serif w-[80rem] mb-[8.1rem]">{title}</p>
				<ThreeColTextGrid cards={cards} />
			</>
		</ProjectWrapper>
	);
};

export default ManagingDesign;
