import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import HomePage from "../pages/home/HomePage";
import ProjectPage from "../pages/projectPage/ProjectPage";
import Abra from "../pages/projectPage/projects/abra/Abra";
import FigmaManage from "../pages/projectPage/projects/figmaManage/FigmaManage";
import Paamonim from "../pages/projectPage/projects/paamonim/Paamonim";
import RamAderet from "../pages/projectPage/projects/ramAderet/RamAderet";
import Redis from "../pages/projectPage/projects/redis/Redis";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<About />} />
			<Route path="project/ramAderet" element={<RamAderet />} />
			<Route path="project/abra" element={<Abra />} />
			<Route path="project/paamonim" element={<Paamonim />} />
			<Route path="project/figmaManage" element={<FigmaManage />} />
			<Route path="project/redis" element={<Redis />} />
		</Routes>
	);
};

export default Router;
