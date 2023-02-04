import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import HomePage from "../pages/home/HomePage";
import ProjectPage from "../pages/projectPage/ProjectPage";
import RamAderet from "../pages/projectPage/projects/ramAderet/RamAderet";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<About />} />
			<Route path="project/ramAderet" element={<RamAderet />} />
		</Routes>
	);
};

export default Router;
