import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	let activeStyle = {
		textDecoration: "underline",
	};
	return (
		<div className="container mx-auto bg-projectBlack h-[6rem]  flex justify-between px-28  items-center">
			<Link to="/">
				<img src="/icons/logoLight.png" alt="logo in nav bar" />
			</Link>
			<div className="flex gap-14 text-white">
				<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className="font-sans text-[1.8rem] text-center" to="/">
					Home
				</NavLink>
				<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className="font-sans text-[1.8rem] text-center" to="/about">
					About
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
