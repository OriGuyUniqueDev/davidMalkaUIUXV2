import { FunctionComponent } from "react";
import ChallengeType from "../../../../../interfaces/ChallengeType";

interface ChallengesProps {}

const Challenges: FunctionComponent<ChallengesProps> = () => {
	const challenges: ChallengeType[] = [
		{
			title: "Permission access",
			textLeft: "The challenge faced by Ram Aderet was to determine and assign the appropriate permissions for each department and employee in the organization. This involved finding the right balance of access and control for each person so that they can effectively carry out their responsibilities.",
			textRight: "A solution to the challenge of assigning permissions is to create admin-manageable permission screens. This allows for centralized control of access and makes it easier for administrators to assign the right level of permissions to each user.",
		},
		{
			title: "Responsive for small devices",
			textLeft: "Ram Aderet's challenge was to make their system work great on mobile and tablet devices, with a goal of 90% responsiveness. This means making sure the system is easy to use on smaller screens and that most features are accessible on these devices. It's a complex task, but with careful planning and design",
			textRight: "A solution to the challenge of responsiveness is to create ready-to-use desktop components that follow the style guide and work on any device. This makes it easier to have a responsive system, with a consistent and efficient design, that works well on mobile and tablet devices.",
		},
	];
	return (
		<div>
			<p className="text-[2.4rem] font-bold mb-[2.4rem] text-projectGrey">CHALLENGES</p>
			<div className="flex flex-col gap-[5.5rem]">
				{challenges.map((challenge) => {
					return (
						<div className="  ">
							<p className="text-[2.4rem] font-bold">{challenge.title}</p>
							<div className="flex gap-[4rem] text-[1.8rem] items-center ">
								<p>{challenge.textLeft}</p>
								<img src="/icons/drawArrow.svg" alt="arrow" />
								<p>{challenge.textRight}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Challenges;
