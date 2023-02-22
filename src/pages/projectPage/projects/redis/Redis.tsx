import { FunctionComponent } from "react";
import ChallengeType from "../../../../interfaces/ChallengeType";
import PainPointType from "../../../../interfaces/PainPointType";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import HeroProject from "../../components/HeroProject";
import ListOneTwoThree from "../../components/ListOneTwoThree";
import ProjectNavigation from "../../components/ProjectsNavigation";
import UI from "../figmaManage/components/ui/UI";
import BeforeAfter from "./components/beforeAfter/BeforeAfter";
import PartOfTeam from "./components/partOfTeam/PartOfTeam";
import RedisChallenges from "./components/redisChallenges/RedisChallenges";

interface RedisProps {}

const Redis: FunctionComponent<RedisProps> = () => {
	const aboutText = "Redis Enterprise is simply the best version of Redis, the most loved database in the world. It delivers unmatched performance, scalability, innovation, and cost-effectiveness across clouds, on-premises, and hybrid deployments.";
	const cards: PainPointType[] = [
		{
			title: "Finding a subscription dashboard solution",
			text: "Before, all the different parts of the dashboard were scattered throughout the system, making it difficult for users to find everything they needed. To fix this, we decided to bring all the components together into one central dashboard where users can easily monitor their subscription. This way, users no longer have to search for each piece of information in multiple places.",
		},
		{
			title: "Find a Payment methods solution",
			text: "Previously, the payments and accounts screen was not user-friendly and only allowed for one payment method. Our goal was to improve the experience by allowing users to choose from multiple payment options and making the screen more user-friendly.",
		},
		{
			title: "Redesign the new feature od account settings",
			text: "I aimed to improve the subscriber's account profile by bringing all missing information together in one dedicated screen. This was necessary to provide a complete and organized view for the subscriber.",
		},
	];
	const challenges: ChallengeType[] = [
		{
			title: "Working with new team",
			textLeft: "The biggest challenge in this project was working with a new team and having to quickly adapt to their processes and familiarize myself with a new product. But, I was up for the challenge and enjoyed learning new work methods and bringing my own knowledge to the table.",
			textRight: "The solution was to have plenty of conversations with the team to fully grasp the product. It was key to have a good understanding before starting the design process, and once I had that, it made creating the design much easier.",
		},
		{
			title: "Redesign features",
			textLeft: "To update the SM Cloud system, we're adding new features to enhance the user experience and fix previous issues. This includes working with the design team to seamlessly integrate the new features and using a flexible development approach to design and test the changes step by step.",
			textRight: "We went on a quest for inspiration and had a lively team brainstorming session to spark new ideas.",
		},
	];
	return (
		<div className="">
			<HeroProject
				resImage={{ url: "/images/projects/redis/images/heroMobile.png", alt: "redis Background" }}
				imageBG={{ url: "/images/projects/redis/images/heroBG.png", alt: "redis Background" }}
				image={{ url: "/images/projects/redis/images/heroMockup.png", alt: "redis mockup" }}
			/>
			<AboutProject data={aboutText} />
			<PartOfTeam
				bgColor={"bg-projectBlack"}
				textColor={"text-projectWhite"}
				title={"Part of a team"}
				image={{ url: "/images/projects/redis/images/redisIcon.png", alt: "redis icon" }}
				subTitleText={"I had the pleasure of working with Yifat Ziv (Radis designer) and Yonathan Solomon (product manager) on a project where we developed a new design system, came up with creative solutions for our product and had a great time brainstorming together. I want to give a shout-out to my fantastic team for an excellent collaboration over the 6 months we worked together."}
			/>
			<RedisChallenges
				challenges={challenges}
				title={"Challenges"}
				bgColor={"bg-projectWhite"}
				textColor={"text-projectBlack"}
			/>
			<ListOneTwoThree
				bgColor={"bg-[#6479DB]"}
				textColor={"text-projectWhite"}
				numColor={"text-projectBlack"}
				title={"My responsible was..."}
				cards={cards}
				greyText={""}
			/>
			<BeforeAfter
				grayText1={"Last version"}
				grayText2={"new version"}
				title={"Before & After"}
				bgColor={"bg-projectBlack"}
				textColor={"text-projectWhite"}
			/>
			<UI
				bgColor={"bg-projectWhite"}
				textColor={"text-projectBlack"}
				greyText={""}
				title={"User interface"}
				image={{ alt: "redisUI", url: "/images/projects/redis/images/redisUI.png" }}
				subTitleText={""}
			/>
			<UI
				bgColor={"bg-projectLightGray"}
				textColor={"text-projectBlack"}
				greyText={""}
				title={"Style & Components"}
				image={{ url: "/images/projects/redis/images/ui.png", alt: "ui image" }}
				subTitleText={""}
			/>
			<Contact />
			<ProjectNavigation
				previous="figmaManage"
				next="ramAderet"
			/>
		</div>
	);
};

export default Redis;
