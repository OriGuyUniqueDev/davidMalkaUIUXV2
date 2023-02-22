import { FunctionComponent } from "react";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
	return (
		<div className="w-full  flex flex-col md:py-[12rem] sm:py-[8.6rem] bg-projectBlack items-center justify-center md:gap-[5.9rem] sm:gap-[4.5rem]">
			<div className="flex flex-col  gap-10 text-projectWhite ">
				<img
					className="md:w-[12.6rem] sm:w-[15.7rem]  mx-auto"
					src="/images/homePage/avatarContact.png"
					alt="avatar image"
				/>
				<div>
					<p className="text-center font-light mb-4 text-4xl">🤙 Did you got impressed? </p>
					<p className="text-center font-light  text-4xl">Let me bring my skills to your team.</p>
				</div>
			</div>
			<a
				className="flex gap-5 w-[22rem] md:mt-[4.5rem] h-[6.1rem]  border-[0.2rem] items-center justify-center border-projectWhite text-3xl text-projectWhite font-medium "
				href="mailto:dudu5malka@gmail.com"
			>
				<img
					src="/icons/mail.svg"
					alt="envelope icon"
				/>
				Leave a message
			</a>
		</div>
	);
};

export default Contact;
