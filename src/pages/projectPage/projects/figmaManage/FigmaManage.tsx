import { FunctionComponent } from "react";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import HeroProject from "../../components/HeroProject";
import ProjectNavigation from "../../components/ProjectsNavigation";

interface FigmaManageProps {}

const FigmaManage: FunctionComponent<FigmaManageProps> = () => {
	const aboutText = "Figma Manage is a handy tool for designers created by Figma, to streamline their work and keep everything organized in one place. No more jumping between different management tools, Figma Manage allows designers to manage their tasks right within Figma, saving time and making the design process a breeze!";
	return (
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/figmaManage/images/heroMobile.png", alt: "figmaManage Background" }} imageBG={{ url: "/images/projects/figmaManage/images/heroBG.png", alt: "figmaManage Background" }} image={{ url: "/images/projects/figmaManage/images/heroMockup.png", alt: "figmaManage" }} />
			<AboutProject data={aboutText} />
			{/* <ExploreIdeas data={exploreText} /> */}
			<Contact />
			<ProjectNavigation previous="paamonim" next="redis" />
		</div>
	);
};

export default FigmaManage;
