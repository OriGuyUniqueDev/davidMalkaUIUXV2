import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<div className="bg-projectLightGray w-full mx-auto h-[6rem]  ">
			<div className="container mx-auto  flex justify-between items-center ">
				<div className="flex">
					<img src="/icons/logoDark.png" alt="logo footer" />
					<div className="flex gap-6 text-[#7c7c7c] ">
						<a type="email">dudu5malka@gmail.com</a>
						<p>|</p>
						<a type="phone">+972547951888</a>
					</div>
				</div>
				<div className="text-[#7d7d7d] flex">
					<img src="/icons/instagram.png" alt="instagram link" />
					<img src="/icons/linkdin.png" alt="linkdin link" />
					<img src="/icons/facebook.png" alt="facebook link" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
