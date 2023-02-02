import { FunctionComponent } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

interface LayoutProps {
	children: JSX.Element;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className="flex flex-col justify-between h-screen">
				<Header />
				<Main>{children}</Main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
