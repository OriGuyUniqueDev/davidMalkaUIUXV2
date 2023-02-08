import { FunctionComponent } from "react";
import ChallengeType from "../../../../interfaces/ChallengeType";
import PainPointType from "../../../../interfaces/PainPointType";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import BringTogether from "../../components/BringTogether";
import ChallengesPainPoints from "../../components/challengesPainPoint/ChallengesPainPoints";
import Execution from "../../components/Execution";
import ExploreIdeas from "../../components/ExploreIdeas";
import HeroProject from "../../components/HeroProject";
import ProjectNavigation from "../../components/ProjectsNavigation";
import StyleGuide from "../../components/StyleGuide";
import ResearchUsers from "./components/ResearchUsers";

interface RamAderetProps {}

const RamAderet: FunctionComponent<RamAderetProps> = () => {
	const aboutText = "The company is involved in the initiation and execution of the leading and sought-after residential areas and neighborhoods in Israel. Responsible for the construction of some of the most important architectural icons and public buildings erected in recent years. The system is an internal corporate SAP system designed to help Ram Aderet user׳s manage the organization.";
	const exploreText = "You're taking a great approach to ensuring success for Ram Adrat's internal SAP system! By understanding the pain points, motivations, and business goals of the users, you're setting yourself up to provide them with an optimized and enjoyable experience. To get a better understanding of what they need, why not try reaching out to them directly? I was conducting surveys, interviews, or any other type of research to get a feel for what's important to them and how can i help. This information will be invaluable in creating a user-friendly system that everyone will love!";
	const painPoints: PainPointType[] = [
		{
			title: "Old fashion proccess",
			text: "Ram Aedret has a challenge for users who are not skilled in technology.",
		},
		{
			title: "Organization control ",
			text: "Ram Aeret has a challenge as some users lack the tools to organize roles and departments.",
		},
		{
			title: "Suppliers communication",
			text: "Ram Aderet faces a challenge as users communicate with suppliers through slow and inefficient methods such as letters and email.",
		},
		{
			title: "Employees access",
			text: "Ram Aderet has a challenge because managers struggle with granting employee access, leading to the need for a system or tool to simplify the process and ensure necessary access for employees.",
		},
	];
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
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/ramAderet/images/heroMobile.png", alt: "ramAderet Background" }} imageBG={{ url: "/images/projects/ramAderet/images/heroBG.png", alt: "ramAderet Background" }} image={{ url: "/images/projects/ramAderet/images/heroMockup.png", alt: "ram aderet mockup" }} />
			<AboutProject data={aboutText} />
			<ExploreIdeas data={exploreText} />
			<ResearchUsers />
			<ChallengesPainPoints painPoints={painPoints} challenges={challenges} />
			<Execution image={{ url: "/images/projects/ramAderet/images/execution.png", alt: "execution image" }} />
			<BringTogether images={[{ url: "/images/projects/ramAderet/images/bringTogether.png", alt: "bring together image" }]} />
			<StyleGuide image={{ url: "/images/projects/ramAderet/images/styleGuide.png", alt: "style guide image" }} />
			<Contact />
			<ProjectNavigation previous="redis" next="abra" />
		</div>
	);
};

export default RamAderet;
