import { FunctionComponent } from "react";
import ProjectType from "../../interfaces/ProjectType";
import Brands from "./components/brands/Brands";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import PassionAreas from "./components/passionAreas/PassionAreas";
import Project from "./components/project/Project";

interface HomePageProps {}
const projects: ProjectType[] = [
	{ title: "Abra W&M", subTitle: "UI/UX (Website)", img: { url: "/images/homePage/abra.webp", alt: "abra project" }, colorBG: "projectWhite", reverse: false },
	{ title: "Ram Aderet", subTitle: "Product Design", img: { url: "/images/homePage/ramAderet.webp", alt: "ramAderet project" }, colorBG: "projectBlack", reverse: true },
	{ title: "Pa’amonim", subTitle: "Product design", img: { url: "/images/homePage/paamonim.webp", alt: "paamonim project" }, colorBG: "projectWhite", reverse: false },
	{ title: "Figma Manage", subTitle: "Case Study", img: { url: "/images/homePage/figmaManage.webp", alt: "figmaManage project" }, colorBG: "projectBlack", reverse: true },
	{ title: "Redis Labs", subTitle: "UI/UX Design", img: { url: "/images/homePage/redis.webp", alt: "redis project" }, colorBG: "projectWhite", reverse: false },
];

const HomePage: FunctionComponent<HomePageProps> = () => {
	return (
		<>
			<Hero />
			{projects.map((project, index) => {
				return <Project key={index} project={{ title: project.title, subTitle: project.subTitle, img: { url: project.img.url, alt: project.img.url }, colorBG: project.colorBG, reverse: project.reverse }} />;
			})}
			<PassionAreas />
			<Brands />
			<Contact />
		</>
	);
};
// colorBg="projectWhite" reverse={true}

export default HomePage;
