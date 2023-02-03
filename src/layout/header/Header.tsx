import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	return (
		<div className="container mx-auto bg-projectBlack h-[6rem]  flex justify-between items-center">
			<Link to="/">
				<img src="/icons/logoLight.png" alt="logo in nav bar" />
			</Link>
			<div className="flex gap-14 text-white">
				<Link className="font-sans text-[1.8rem] text-center" to="/">
					Home
				</Link>
				<Link className="font-sans text-[1.8rem] text-center" to="/about">
					About
				</Link>
			</div>
		</div>
	);
};

export default Header;
