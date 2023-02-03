import { FunctionComponent } from "react";

interface BrandsProps {}

const Brands: FunctionComponent<BrandsProps> = () => {
	return (
		<div className="w-full h-[81.2rem] bg-projectWhite px-28 flex flex-col py-[12rem] justify-around items-center">
			<div className="">
				<p className="font-serif font-bold text-[8.4rem] leading-[10rem] text-center mb-6 ">Brands I’ve work with</p>
				<p className="text-center text-[1.8rem] max-w-[82.8rem] mx-auto">Before I started my way as a product designer,I dealt a lot with. Branding for customers. Although it's not my bread and butter, it's importantfor me to say that it built me and cracked me in terms of design.</p>
			</div>
			<img className="mt-[8.3rem]" src="/images/homePage/companies.webp" alt="companies logos" />
		</div>
	);
};

export default Brands;
