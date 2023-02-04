import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./hero.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
	return (
		<div className="w-full h-[81.2rem]   bg-projectBlack ">
			<div className="container mx-auto">
				<LazyLoadImage src="images/homePage/hero.webp" alt="hero img" width="100%" className=" px-[7rem]  mx-auto h-[65.2rem] pt-[4.2rem] relative" effect="opacity" />
				<p className="relative bottom-[32rem] left-20 w-[60rem] font-serif text-white text-[6.4rem] leading-[6.97rem] ">
					Hi, I’m David UI/UX, Product designer, <span className="text-[2.4rem]">(and team leader)</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;
