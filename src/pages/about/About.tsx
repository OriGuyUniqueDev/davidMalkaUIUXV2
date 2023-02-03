import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
	return (
		<div className="">
			<div className="flex gap-8">
				<img src="/images/homePage/avatarContact.webp" alt="avatarContact" />
				<p className="text-[8.4rem] font-serif w-[52rem] font-bold">A little story about me...</p>
			</div>
			<p className="text-[1.8rem] text-projectGrey">Hi there! I'm David, a passionate and experienced UI/UX and product designer with 5 years of experience under my belt, I bring a wealth of creative abilities and a diverse set of design skills to the table. I hold a certificate in digital UI/UX studies from Tiltan College and I'm currently leading the design studio at Abra Web & Mobile. I'm proud of my knowledge and experience in UI/UX design, which allows me to confidently tackle any project and bring my unique touch to it. My goal is always to create designs with unbeatable usability and design, and I'm always up for a new challenge in my career. As the head of the design studio, I'm responsible for guiding a team of talented designers. I love working with my team to bring the best possible user experience to our clients, and I'm always looking for ways to improve and streamline our processes. My passion for design drives me forward, and my goal is to become a senior UX/UX designer, leading projects and making a real difference in the industry.</p>
		</div>
	);
};

export default About;
