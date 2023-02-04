import { FunctionComponent } from "react";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import HeroProject from "../../components/HeroProject";
import ProjectNavigation from "../../components/ProjectsNavigation";

interface RedisProps {}

const Redis: FunctionComponent<RedisProps> = () => {
	const aboutText = "Redis Enterprise is simply the best version of Redis, the most loved database in the world. It delivers unmatched performance, scalability, innovation, and cost-effectiveness across clouds, on-premises, and hybrid deployments.";
	return (
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/redis/images/heroMobile.png", alt: "redis Background" }} imageBG={{ url: "/images/projects/redis/images/heroBG.png", alt: "redis Background" }} image={{ url: "/images/projects/redis/images/heroMockup.png", alt: "redis mockup" }} />
			<AboutProject data={aboutText} />
			{/* <ExploreIdeas data={exploreText} /> */}
			<Contact />
			<ProjectNavigation previous="figmaManage" next="ramAderet" />
		</div>
	);
};

export default Redis;
