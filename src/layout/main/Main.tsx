import { Children, FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface MainProps {
	children: JSX.Element;
}

const Main: FunctionComponent<MainProps> = ({ children }) => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return <div className=" ">{children}</div>;
};

export default Main;
