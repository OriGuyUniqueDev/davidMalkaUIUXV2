import { FunctionComponent } from "react";
import ChallengeType from "../../../../../interfaces/ChallengeType";
import Challenges from "../../../components/challengesPainPoint/components/Challenges";

interface PersonasProps {}

const Personas: FunctionComponent<PersonasProps> = () => {
	const data = [
		{
			icon: "🤦‍♂️",
			data: "Users are having trouble keeping track of where their money goes.",
		},
		{
			icon: "👩🏼‍🎓",
			data: "Students who live on a tight budget.",
		},
		{
			icon: "👩‍👧‍👧",
			data: "Families with a big brood.",
		},
	];

	return (
		<div className=" bg-projectLightGray w-full py-[12rem] text-projectBlack ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[6.4rem] sm:text-[4.8rem] mb-[4.4rem] ">Personas</p>
				<div className="w-full mb-[12rem]">
					{data.map((card) => {
						return (
							<div className="border-2 border-projectBlack rounded-2xl px-[1.6rem] flex flex-col gap-[1.6rem]">
								<p className="text-[4.8rem]">{card.icon}</p>
								<p className="text-center text-[1.8rem]">{card.data}</p>
							</div>
						);
					})}
				</div>
				<div className="drop-shadow-2xl shadow-projectBlack bg-projectWhite w-full px-[4.4rem] py-[4rem] flex gap-[4.4rem]">
					<div className="flex gap-[3rem] h-fit ">
						<p className="text-[#EA5488] text-[6.4rem] font-bold font-serif h-[6.1rem] ">65%</p>
						<p className="text-[1.8rem]">Users are hoping for a more visually appealing experience within the app.</p>
					</div>
					<img src="/icons/verticleLine.svg" alt="vertical Line" />
					<div className="flex gap-[3rem] ">
						<p className="text-[#EA5488] text-[6.4rem] font-bold font-serif h-[6.1rem] ">35%</p>
						<p className="text-[1.8rem]">I designed the user experience by presenting all the necessary information on one screen, reducing the need for transitions.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Personas;
