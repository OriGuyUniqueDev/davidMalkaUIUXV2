import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};

export default Router;
