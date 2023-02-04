import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<div className="bg-projectWhite w-full mx-auto h-[6rem] ">
			<div className="md:max-w-[1280px] sm:max-w-[375px] mx-auto px-[7rem] sm:py-[4.8rem] md:py-0  flex justify-between md:flex-row sm:flex-col items-center  md:h-full sm:h-fit ">
				<div className="flex md:flex-row sm:flex-col  items-center">
					<Link to="/">
						<img className="md:mr-10 md:mb-0 sm:mb-[3.1rem] sm:w-[7.4rem] md:w-[4rem] sm:mx-auto" src="/icons/logoDark.png" alt="logo footer" />
					</Link>
					<div className="flex md:flex-row sm:flex-col sm:text-center gap-6 text-3xl text-[#7c7c7c] ">
						<a href="mailto:dudu5malka@gmail.com">dudu5malka@gmail.com</a>
						<p className="md:block sm:hidden">|</p>
						<a href="tel:+972547951888" data-rel="external">
							+972547951888
						</a>
					</div>
				</div>
				<div className="text-[#7d7d7d] flex gap-6 md:mt-0 sm:mt-[5.2rem]">
					<a href="https://www.instagram.com/david12187/" target="blank">
						<img width="24px" src="/icons/instagram.png" alt="instagram link" />
					</a>
					<a href="https://www.linkedin.com/in/david-malka-83918ab3/" target="blank">
						<img width="24px" src="/icons/linkdin.png" alt="linkdin link" />
					</a>
					<a href="https://www.facebook.com/dudu.malka.14" target="blank">
						<img width="24px" src="/icons/facebook.png" alt="facebook link" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
