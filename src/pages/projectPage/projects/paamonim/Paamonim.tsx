import { FunctionComponent } from "react";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import HeroProject from "../../components/HeroProject";
import ProjectNavigation from "../../components/ProjectsNavigation";

interface PaamonimProps {}

const Paamonim: FunctionComponent<PaamonimProps> = () => {
	const aboutText = "Pa'amonim is a non-profit working towards a better financial future for families in Israel. They offer guidance and advice to help build financial literacy and resilience.";
	return (
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/paamonim/images/heroMobile.png", alt: "paamonim Background" }} imageBG={{ url: "/images/projects/paamonim/images/heroBG.png", alt: "paamonim Background" }} image={{ url: "/images/projects/paamonim/images/heroMockup.png", alt: "ram aderet mockup" }} />
			<AboutProject data={aboutText} />
			{/* <ExploreIdeas data={exploreText} /> */}
			<Contact />
			<ProjectNavigation previous="ramAderet" next="figmaManage" />
		</div>
	);
};

export default Paamonim;
