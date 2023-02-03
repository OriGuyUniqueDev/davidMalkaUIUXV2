import { FunctionComponent } from "react";
import "./hero.css";
interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
	return (
		<div className="w-full  h-full pb-[11.6rem]  bg-projectBlack px-28">
			<div className="container mx-auto">
				<img className=" w-full h-[65.2rem] pt-[4.2rem] relative" src="images/homePage/hero.png" alt="" />

				<p className="relative bottom-[32rem] -left-8 w-[60rem] font-serif text-white text-[6.4rem] leading-[6.97rem] ">
					Hi, I’m David UI/UX, Product designer, <span className="text-[2.4rem]">(and team leader)</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;
