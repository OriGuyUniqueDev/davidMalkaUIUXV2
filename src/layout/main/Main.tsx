import { Children, FunctionComponent } from "react";

interface MainProps {
	children: JSX.Element;
}

const Main: FunctionComponent<MainProps> = ({ children }) => {
	return <div className=" ">{children}</div>;
};

export default Main;
