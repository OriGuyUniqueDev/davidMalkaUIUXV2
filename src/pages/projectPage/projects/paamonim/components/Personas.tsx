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
		<div className=" bg-projectWhite w-full py-[12rem] text-projectBlack ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[8.4rem] sm:text-[4.8rem] mb-[4.4rem] ">Personas</p>
				<div className="w-full mb-[12rem] flex gap-[1.6rem]">
					{data.map((card) => {
						return (
							<div className="border-[0.1rem] border-projectBlack rounded-2xl px-[1.6rem] justify-center items-center flex flex-col w-[36.9rem] h-[17.5rem]  gap-[1.6rem]">
								<p className="text-[4.8rem] font-medium">{card.icon}</p>
								<p className="text-center font-light text-[1.8rem]">{card.data}</p>
							</div>
						);
					})}
				</div>
				<div className="drop-shadow-2xl shadow-projectBlack bg-projectWhite w-full px-[4.4rem] py-[4rem] flex gap-[4.4rem] justify-center items-center">
					<div className="flex gap-[3rem] w-[42rem]  ">
						<p className="text-[#A242D1] text-[6.4rem] font-bold font-serif  ">65%</p>
						<p className="text-[1.8rem] font-light ">Users are hoping for a more visually appealing experience within the app.</p>
					</div>
					<img
						src="/icons/verticleLine.svg"
						alt="vertical Line"
					/>
					<div className="flex gap-[3rem] w-[44.1rem] ">
						<p className="text-[#A242D1] text-[6.4rem] font-bold font-serif  ">35%</p>
						<p className="text-[1.8rem] font-light">I designed the user experience by presenting all the necessary information on one screen, reducing the need for transitions.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Personas;
