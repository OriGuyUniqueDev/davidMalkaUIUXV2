import { FunctionComponent } from "react";
import ChallengeType from "../../../../interfaces/ChallengeType";
import PainPointType from "../../../../interfaces/PainPointType";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import ChallengesPainPoints from "../../components/challengesPainPoint/ChallengesPainPoints";
import HeroProject from "../../components/HeroProject";
import ProjectNavigation from "../../components/ProjectsNavigation";

interface PaamonimProps {}

const Paamonim: FunctionComponent<PaamonimProps> = () => {
	const aboutText = "Pa'amonim is a non-profit working towards a better financial future for families in Israel. They offer guidance and advice to help build financial literacy and resilience.";
	const painPoints: PainPointType[] = [
		{
			title: "Management economy",
			text: "Most users are having trouble keeping track of where their money is going.",
		},
		{
			title: "Budget management ",
			text: "Some users find budgeting complicated, even though they try to keep it simple each month.",
		},
		{
			title: "Transparency",
			text: "Most users are having trouble keeping track of their spending and financial activity in their bank accounts.",
		},
		{
			title: "Call to action",
			text: "Users desire inspiration to take action and improve their financial situation.",
		},
	];
	const challenges: ChallengeType[] = [
		{
			title: "Make It Simple",
			textLeft: "As a designer, I noticed that people often struggle with tracking their finances due to the complexity of most finance apps. My goal was to create a fun and user-friendly experience for users, making it easier for them to keep up with their spending and understand their financial situation.",
			textRight: "I wanted to make the app more visually appealing, so I added cute illustrations and used pastel colors. I also tried to make the language more friendly and relatable for everyday users.",
		},
		{
			title: "Use it fast",
			textLeft: "As a designer, I faced a challenge in making data entry quick and simple for users in this app. I aimed to create a user-friendly template to make the process effortless.",
			textRight: "I wanted to make using the app easier, so I came up with the idea of using layers templates (toast). They make it fast and simple to enter information, show the users where they are, and let them go back without any extra steps.",
		},
	];
	return (
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/paamonim/images/heroMobile.png", alt: "paamonim Background" }} imageBG={{ url: "/images/projects/paamonim/images/heroBG.png", alt: "paamonim Background" }} image={{ url: "/images/projects/paamonim/images/heroMockup.png", alt: "ram aderet mockup" }} />
			<AboutProject data={aboutText} />
			<ChallengesPainPoints painPoints={painPoints} challenges={challenges} />
			<Contact />
			<ProjectNavigation previous="ramAderet" next="figmaManage" />
		</div>
	);
};

export default Paamonim;
