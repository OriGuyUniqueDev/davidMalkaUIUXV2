import { FunctionComponent } from "react";

interface ResearchUsersProps {}

const ResearchUsers: FunctionComponent<ResearchUsersProps> = () => {
	return (
		<div className="bg-projectWhite text-projectBlack w-full py-[12rem] ">
			<div className="md:max-w-[1280px] relative mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[6.4rem] sm:text-[4.8rem] mb-[5rem]">Research & Users</p>
				<div className="w-[58rem] flex flex-col gap-[2rem] mb-[4.4rem]">
					<p className="flex gap-[1.2rem] text-[4.8rem] font-serif">
						<img src="/icons/textQuestion.svg" alt="text Question icon" /> Dilema
					</p>
					<p className="text-[1.8rem]">Abra Web & Mobile must decide whether to keep their superhero brand or try a new approach that better fits the high-tech industry. They'll weigh the pros and cons to make the best decision for their brand and audience.</p>
				</div>
				<img className="absolute right-0 -top-10 h-[29.5rem]" src="/images/projects/abra/images/angularAvatar.png" alt="angular avatar" />
				<div className="drop-shadow-2xl shadow-projectBlack bg-projectWhite w-full px-[4.4rem] py-[4rem] flex gap-[4.4rem]">
					<div className="flex gap-[3rem] h-fit ">
						<p className="text-[#EA5488] text-[6.4rem] font-bold font-serif h-[6.1rem] ">85%</p>
						<p className="text-[1.8rem]">Users want to see the superhero concept continue, with a fresh twist for a more personalized and enjoyable experience.</p>
					</div>
					<img src="/icons/verticleLine.svg" alt="vertical Line" />
					<div className="flex gap-[3rem] ">
						<p className="text-[#EA5488] text-[6.4rem] font-bold font-serif h-[6.1rem] ">15%</p>
						<p className="text-[1.8rem]">Some users suggest a change to the superhero concept and brand strategy, offering valuable insights to help create a more relevant and appealing brand image.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchUsers;
