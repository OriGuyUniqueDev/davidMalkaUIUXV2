import { FunctionComponent } from "react";
import ButtonTextWithIcon from "../projectPage/components/ButtonTextWithIcon";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
	return (
		<div className="bg-projectWhite w-full  mx-auto  py-[12rem] ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem]">
				<div className="flex gap-[2.4rem] items-center">
					<img
						className="w-[20rem] h-[20rem]"
						src="/images/homePage/avatarContact.png"
						alt="avatarContact"
					/>
					<p className="text-[8.4rem] font-serif w-[52rem] font-bold">A little story about me...</p>
				</div>
				<div className="w-[61.7rem] ml-[23rem] mt-[3.4rem] text-[1.8rem] font-light flex flex-col gap-[2.8rem]">
					<p className=" ">
						<p className=" ">Hi there!</p>I'm David, a passionate and experienced UI/UX and product designer with 5 years of experience under my belt, I bring a wealth of creative abilities and a diverse set of design skills to the table. I hold a certificate in digital UI/UX studies from Tiltan College and I'm currently leading the design studio at Abra Web & Mobile.
					</p>
					<p className=" ">I'm proud of my knowledge and experience in UI/UX design, which allows me to confidently tackle any project and bring my unique touch to it. My goal is always to create designs with unbeatable usability and design, and I'm always up for a new challenge in my career.</p>
					<p className=" "> As the head of the design studio, I'm responsible for guiding a team of talented designers. I love working with my team to bring the best possible user experience to our clients, and I'm always looking for ways to improve and streamline our processes.</p>
					<p className=" "> My passion for design drives me forward, and my goal is to become a senior UX/UX designer, leading projects and making a real difference in the industry.</p>
					<ButtonTextWithIcon
						borderColor="border-projectBlack"
						text={"Download CV"}
						image={{ url: "/icons/leftArrowBlack.svg", alt: "arrow icon" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
