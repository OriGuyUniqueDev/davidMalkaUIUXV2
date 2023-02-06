import { FunctionComponent } from "react";
import BrainstormingTeamWork from "./BrainstormingTeamWork";
import ResearchCard from "./ResearchCard";

interface ResearchUsersProps {}

const ResearchUsers: FunctionComponent<ResearchUsersProps> = () => {
	return (
		<div className="bg-projectWhite text-projectBlack w-full py-[12rem] ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<p className="font-bold font-serif md:text-[6.4rem] sm:text-[4.8rem] mb-[4.4rem]">Research & Users</p>
				<div className="flex gap-[6.4rem]">
					<ResearchCard num={70} text="It's important to consider that most people are not tech-savvy when creating products and services to ensure they are user-friendly and accessible for all." />
					<ResearchCard num={20} text="People look to technology to help simplify their lives and make tasks more efficient, so optimizing processes through technology is crucial in meeting their expectations and enhancing the overall user experience." />
					<ResearchCard num={10} text="Knowing that just 10% of users work in construction is useful information when developing technology solutions, as it helps to cater to their specific needs and create a more enjoyable experience for this group." />
				</div>
				<BrainstormingTeamWork />
			</div>
		</div>
	);
};

export default ResearchUsers;
