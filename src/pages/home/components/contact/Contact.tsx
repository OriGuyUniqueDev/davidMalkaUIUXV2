import { FunctionComponent } from "react";

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
	return (
		<div className="w-full h-[81.2rem] flex flex-col py-[12.8rem] bg-projectBlack items-center justify-center gap-[5.9rem]">
			<div className="flex flex-col  gap-10 text-projectWhite ">
				<img className="w-[12.6rem] mx-auto" src="/images/homePage/avatarContact.png" alt="avatar image" />
				<div>
					<p className="text-center mb-4 text-4xl">🤙 Did you got impressed? </p>
					<p className="text-center  text-4xl">Let me bring my skills to your team.</p>
				</div>
			</div>
			<a className="flex gap-5 w-[22rem] mt-[4.5rem] h-[6.1rem]  border-2 items-center justify-center border-projectWhite text-3xl text-projectWhite " href="mailto:dudu5malka@gmail.com">
				<img src="/icons/mail.svg" alt="envelope icon" />
				Leave a message
			</a>
		</div>
	);
};

export default Contact;
