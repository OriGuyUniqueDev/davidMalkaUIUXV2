import { FunctionComponent, useEffect, useState } from "react";

interface BrandsProps {}

const Brands: FunctionComponent<BrandsProps> = () => {
	const [imageURL, setImageURL] = useState("");
	window.addEventListener("resize", () => {
		window.innerWidth <= 1280 ? setImageURL("/images/homePage/companiesMobile.png") : setImageURL("/images/homePage/companies.webp");
	});
	useEffect(() => {
		window.innerWidth <= 1280 ? setImageURL("/images/homePage/companiesMobile.png") : setImageURL("/images/homePage/companies.webp");
	}, []);
	return (
		<div className="w-full md:h-[81.2rem] sm:h-fit bg-projectWhite md:px-[7rem] sm:px-[1.8rem] flex flex-col md:py-[12rem] sm:py-[6rem] md:justify-around items-center">
			<div className="md:text-center sm:text-start">
				<p className="font-serif font-bold md:text-[8.4rem] sm:text-[6.4rem] md:leading-[10rem] sm:leading-[6rem]  md:mb-6 sm:mb-[3rem] ">Brands I’ve work with</p>
				<p className="text-[1.8rem] max-w-[82.8rem] mx-auto">Before becoming a product designer, I gained experience in branding for clients. Although it's not my main focus, it shaped and challenged me in my design skills.</p>
			</div>
			<img className="mt-[8.3rem]" src={imageURL} alt="companies logos" />
		</div>
	);
};

export default Brands;
