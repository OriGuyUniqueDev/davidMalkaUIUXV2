import { FunctionComponent, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./hero.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
	const [imageURL, setImageURL] = useState("");
	window.addEventListener("resize", () => {
		window.innerWidth <= 1280 ? setImageURL("/images/homePage/heroMobile.png") : setImageURL("/images/homePage/hero.webp");
	});
	useEffect(() => {
		window.innerWidth <= 1280 ? setImageURL("/images/homePage/heroMobile.png") : setImageURL("/images/homePage/hero.webp");
	}, []);
	return (
		<div className="w-full md:h-[81.2rem]  bg-projectBlack ">
			<div className="container mx-auto">
				<LazyLoadImage src={imageURL} alt="hero img" width="100%" className=" md:px-[7rem] sm:px-[1.8rem]  mx-auto h-[65.2rem] pt-[4.2rem] relative" effect="opacity" />

				<p className="relative sm:bottom-[20rem] md:bottom-[30.4rem] left-20 md:w-[60rem] sm:w-[36rem] font-serif text-white md:text-[6.4rem] font-bold sm:text-[3.6rem] md:leading-[6.97rem] sm:leading-[4.17rem] ">
					Hi, I’m David UI/UX, Product designer, <span className="text-[2.4rem] font-normal block">(and team leader)</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;
