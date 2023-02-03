import { FunctionComponent } from "react";
import Hero from "./components/hero/Hero";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
	return (
		<div className="w-full   ">
			<Hero />
		</div>
	);
};

export default HomePage;
