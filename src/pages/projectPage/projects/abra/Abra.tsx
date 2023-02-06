import { FunctionComponent } from "react";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import ExploreIdeas from "../../components/ExploreIdeas";
import HeroProject from "../../components/HeroProject";
import ProjectNavigation from "../../components/ProjectsNavigation";
import History from "./components/History";
import OldNew from "./components/OldNew";
import ResearchUsers from "./components/researchUsers/ResearchUsers";

interface AbraProps {}

const Abra: FunctionComponent<AbraProps> = () => {
	const aboutText = "Abra Web & Mobile is a fantastic front-end development company in Israel that makes it easy for big businesses and startups alike to take their digital presence to the next level. Their team of experts creates amazing web products that help companies better engage with their online audience. And, the best part? They do it all with ease and flair, making it seem like heroics is just part of their everyday routine!";
	return (
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/ramAderet/images/heroMobile.png", alt: "ramAderet Background" }} imageBG={{ url: "/images/projects/abra/images/heroBG.png", alt: "ramAderet Background" }} image={{ url: "/images/projects/abra/images/heroMockup.png", alt: "ram aderet mockup" }} />
			<AboutProject data={aboutText} />

			<div className="relative">
				<img className="mx-auto absolute -top-[17rem]  left-[55%] z-10 md:px-[7rem] sm:px-[1.8rem]" src="/images/projects/abra/images/reactAvatar.png" alt="react avatar" />
			</div>
			<History />
			<ResearchUsers />
			<OldNew />
			<Contact />
			<ProjectNavigation previous="ramAderet" next="paamonim" />
		</div>
	);
};

export default Abra;
