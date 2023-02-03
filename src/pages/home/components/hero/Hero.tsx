import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./hero.css";
import "react-lazy-load-image-component/src/effects/blur.css";
interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
	return (
		<div className="w-full h-[81.2rem]   bg-projectBlack x-28">
			<div className="container mx-auto">
				<div className="w-full mx-auto">
					<LazyLoadImage src="images/homePage/hero.png" alt="hero img" width="100%" className=" w-[112.3rem] mx-auto h-[65.2rem] pt-[4.2rem] relative" placeholderSrc={"loading..."} effect="blur" />
				</div>
				{/* <img className=" w-[112.3rem] mx-auto h-[65.2rem] pt-[4.2rem] relative" src="images/homePage/hero.png" alt="hero img" /> */}

				<p className="relative bottom-[32rem] left-20 w-[60rem] font-serif text-white text-[6.4rem] leading-[6.97rem] ">
					Hi, I’m David UI/UX, Product designer, <span className="text-[2.4rem]">(and team leader)</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;
