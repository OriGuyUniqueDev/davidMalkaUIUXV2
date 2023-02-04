import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
	return (
		<div className="bg-projectWhite px-[7rem] py-[12rem]">
			<div className="flex gap-[2.4rem] items-center">
				<img className="w-[20rem] h-[20rem]" src="/images/homePage/avatarContact.webp" alt="avatarContact" />
				<p className="text-[8.4rem] font-serif w-[52rem] font-bold">A little story about me...</p>
			</div>
			<div className="w-[61.7rem] ml-[23rem] mt-[3.4rem] text-[1.8rem] flex flex-col gap-[2.8rem]">
				<p className=" text-projectGrey">
					<p className=" text-projectGrey">Hi there!</p>I'm David, a passionate and experienced UI/UX and product designer with 5 years of experience under my belt, I bring a wealth of creative abilities and a diverse set of design skills to the table. I hold a certificate in digital UI/UX studies from Tiltan College and I'm currently leading the design studio at Abra Web & Mobile.
				</p>
				<p className=" text-projectGrey">I'm proud of my knowledge and experience in UI/UX design, which allows me to confidently tackle any project and bring my unique touch to it. My goal is always to create designs with unbeatable usability and design, and I'm always up for a new challenge in my career.</p>
				<p className=" text-projectGrey"> As the head of the design studio, I'm responsible for guiding a team of talented designers. I love working with my team to bring the best possible user experience to our clients, and I'm always looking for ways to improve and streamline our processes.</p>
				<p className=" text-projectGrey"> My passion for design drives me forward, and my goal is to become a senior UX/UX designer, leading projects and making a real difference in the industry.</p>
				<a href={``} className={`px-6 py-7 mt-[4.6rem] md:w-[16.9rem] sm:w-full h-[6.1rem] flex items-center gap-4 justify-center border-projectBlack   border-[0.2rem] font-bold text-2xl`}>
					Download CV <img src="/icons/download.svg" alt="download icon" />
				</a>
			</div>
		</div>
	);
};

export default About;
