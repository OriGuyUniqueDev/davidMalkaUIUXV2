import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PainPointType from "../../../../interfaces/PainPointType";
import PainPoint from "../../components/challengesPainPoint/components/PainPoint";

interface AllHappensProps {}

const AllHappens: FunctionComponent<AllHappensProps> = () => {
	const painPoints: PainPointType[] = [
		{
			title: "Creating a new standard",
			text: "I led the creation of our Studio Portfolio to showcase our capabilities and past projects. It's now a key part of our website and helps us attract new clients and resources.",
		},
		{
			title: "Locating potential customer leads",
			text: "I'm proud of our Studio Portfolio that showcases our capabilities, past projects, and who we are as a studio. It's like our business card, helping us attract new clients and grow our business.",
		},
		{
			title: "Taking initiative and responsibility",
			text: "As the leader of the studio, I wanted to add value and bring a fresh perspective. I took the initiative to create a Studio Portfolio to showcase our capabilities and past projects, and am proud of what we delivered.",
		},
		{
			title: "Bring the company to the next level",
			text: "As a customer-focused company, we aim to showcase our success and growth through the full range of services we offer. Our Studio Portfolio highlights our attention to detail and investment in the company, making it a great tool to show our customers.",
		},
	];
	return (
		<div className="bg-projectBlack relative text-projectWhite  w-full md:py-[12rem] sm:py-[6rem] ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<div className="w-full">
					<p className="text-[8.4rem] w-[45rem] font-serif font-bold leading-[10rem] ">Here is all happens</p>
					<p className="text-[1.8rem] w-[65.7rem] mt-[2.4rem] font-light mb-[10rem]">Along with my teammates, spent a year developing our Studio Portfolio, which is now a significant part of our company's website. The idea for this project was born from my own initiative, and after careful consideration, we decided to integrate it fully into the company. This is an exciting step forward for us and shows our commitment to making the studio a key player in the business.</p>
					<img
						className="mb-[10rem] w-[100vw]"
						src="/images/projects/abra/images/happens1.png"
						alt="happens photo"
					/>
					<img
						className="mb-[10rem] w-[100vw]"
						src="/images/projects/abra/images/happens2.png"
						alt="happens photo"
					/>
					<p className="text-[2.1rem] uppercase text-center sm:hidden md:block   text-projectGrey mb-[7.2rem]">Portfolio’s goals</p>
					<div className="grid grid-cols-2 gap-[12rem]">
						{painPoints.map((painPoint, index) => {
							return (
								<div className="w-[33.9rem] mx-auto">
									<div className="flex gap-[1.9rem] items-end ">
										<p className="text-[10rem]  font-bold text-[#FF9500]">.{index + 1}</p>
										<p className="text-[2.4rem] text-projectWhite mb-12">{painPoint.title}</p>
									</div>
									<p className="text-[1.8rem]">{painPoint.text}</p>
								</div>
							);
						})}
					</div>
					<img
						className=" mt-[10rem] relative z-20 w-[100vw]"
						src="/images/projects/abra/images/happens3.png"
						alt="happens photo"
					/>
				</div>
			</div>
			<div className="bg-projectWhite h-[40rem] z-10 w-full absolute bottom-0"> </div>
		</div>
	);
};

export default AllHappens;
