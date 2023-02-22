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
		<div className={`w-full flex flex-col md:items-center md:gap-[8.1rem]  md:py-[12rem] sm:py-[6rem] md:px-[7rem] sm:px-[1.8rem] bg-projectBlack text-projectLightGray`}>
			<p className="md:text-center sm:text-start sm:leading-[6rem] font-bold md:text-[8.4rem] sm:text-[6.4rem] font-serif">Passion areas</p>
			<div className="flex md:flex-row sm:flex-col gap-24 justify-center sm:mt-[3rem] md:mt-0  md:h-[28rem] sm:h-fit ">
				{passionsData.map((passionData, index) => (
					<PassionArea
						key={index}
						passion={passionData}
					/>
				))}
			</div>
		</div>
	);
};

export default PassionAreas;
