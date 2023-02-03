import { FunctionComponent } from "react";
import PassionType from "../../../../interfaces/PassionType";
import PassionArea from "./components/PassionArea";

interface PassionAreasProps {}

const PassionAreas: FunctionComponent<PassionAreasProps> = () => {
	const passionsData: PassionType[] = [
		{
			title: "User Experience ",
			icon: { url: "/icons/lightBulb.svg", alt: "lightBulb icon" },
			data: ["Research", "Brainstorming", "Wireframes", "Prototypes", "Feedbacks"],
		},
		{
			title: "Leadership ",
			icon: { url: "/icons/flag.svg", alt: "flag icon" },
			data: ["Research", "Brainstorming", "Wireframes", "Bringing other", "To journey", "Design review", "Team player"],
		},
		{
			title: "Digital & Brand ",
			icon: { url: "/icons/diamond.svg", alt: "diamond icon" },
			data: ["Marketing design", "Infographic", "Typography", "Logo design", "Animations"],
		},
	];
	return (
		<div className={`w-full flex flex-col items-center justify-between py-[12rem]  h-[81.2rem] px-28 bg-projectBlack text-projectLightGray`}>
			<p className="text-center font-bold text-[8.4rem] font-serif">Passion areas</p>
			<div className="flex gap-24 justify-center h-[28rem] ">
				{passionsData.map((passionData) => (
					<PassionArea passion={passionData} />
				))}
			</div>
		</div>
	);
};

export default PassionAreas;
