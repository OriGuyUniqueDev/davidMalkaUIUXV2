import { FunctionComponent, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import "./header.css";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	let activeStyle: React.CSSProperties = {
		textDecoration: "underline",
	};
	return (
		<div className="w-full mx-auto sticky z-50 bg-projectBlack md:h-[6rem] sm:h-[10rem] sm:mb-[2.4rem] md:mb-0     ">
			<div className="md:max-w-[1280px] sm:max-w-[375px] mx-auto h-full md:px-[7rem] sm:px-[1.8rem] flex justify-between md:items-center sm:items-end">
				<Link to="/">
					<img
						src="/icons/logoLight.svg"
						alt="logo in nav bar"
					/>
				</Link>
				<div className="flex gap-14 text-white">
					<NavLink
						style={{ fontSize: 18, textAlign: "center" }}
						className={({ isActive }) => (isActive ? "activeNav" : undefined)}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						style={{ fontSize: 18, textAlign: "center" }}
						className={({ isActive }) => (isActive ? "activeNav" : undefined)}
						to="/about"
					>
						About
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;
