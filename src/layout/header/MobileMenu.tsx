import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

interface MobileMenuProps {}

const MobileMenu: FunctionComponent<MobileMenuProps> = () => {
	let activeStyle = {
		textDecoration: "underline",
	};
	return (
		<div className="md:max-w-[1280px] sm:max-w-[375px] mx-auto h-full md:px-[7rem] sm:px-[1.8rem] flex justify-between md:items-center sm:items-end">
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

export default MobileMenu;
