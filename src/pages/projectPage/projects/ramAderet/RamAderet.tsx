import { FunctionComponent } from "react";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import ExploreIdeas from "../../components/ExploreIdeas";
import HeroProject from "../../components/HeroProject";
import ProjectNavigation from "../../components/ProjectsNavigation";

interface RamAderetProps {}

const RamAderet: FunctionComponent<RamAderetProps> = () => {
	const aboutText = "The company is involved in the initiation and execution of the leading and sought-after residential areas and neighborhoods in Israel. Responsible for the construction of some of the most important architectural icons and public buildings erected in recent years. The system is an internal corporate SAP system designed to help Ram Aderet user׳s manage the organization.";
	const exploreText = "You're taking a great approach to ensuring success for Ram Adrat's internal SAP system! By understanding the pain points, motivations, and business goals of the users, you're setting yourself up to provide them with an optimized and enjoyable experience. To get a better understanding of what they need, why not try reaching out to them directly? I was conducting surveys, interviews, or any other type of research to get a feel for what's important to them and how can i help. This information will be invaluable in creating a user-friendly system that everyone will love!";
	return (
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/ramAderet/images/heroMobile.png", alt: "ramAderet Background" }} imageBG={{ url: "/images/projects/ramAderet/images/heroBG.png", alt: "ramAderet Background" }} image={{ url: "/images/projects/ramAderet/images/heroMockup.png", alt: "ram aderet mockup" }} />
			<AboutProject data={aboutText} />
			<ExploreIdeas data={exploreText} />
			<Contact />
			<ProjectNavigation previous="redis" next="abra" />
		</div>
	);
};

export default RamAderet;
