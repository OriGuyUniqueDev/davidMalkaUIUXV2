import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<div className="bg-projectLightGray w-full mx-auto h-[6rem] px-28  ">
			<div className="container mx-auto  flex justify-between items-center h-full ">
				<div className="flex items-center">
					<Link to="/">
						<img className="mr-10" src="/icons/logoDark.png" alt="logo footer" />
					</Link>
					<div className="flex gap-6 text-3xl text-[#7c7c7c] ">
						<a href="mailto:dudu5malka@gmail.com">dudu5malka@gmail.com</a>
						<p>|</p>
						<a href="tel:+972547951888" data-rel="external">
							+972547951888
						</a>
					</div>
				</div>
				<div className="text-[#7d7d7d] flex gap-6">
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
