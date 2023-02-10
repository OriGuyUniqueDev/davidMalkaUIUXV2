import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import Project from "../../home/components/project/Project";
import ProjectWrapper from "./ProjectWrapper";

interface ScrollToTopButtonProps {}

const ScrollToTopButton: FunctionComponent<ScrollToTopButtonProps> = () => {
	const { pathname } = useLocation();
	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<button onClick={handleClick} className="bg-projectBlack fixed right-[4rem] top-[4.5rem] rounded-full p-[1rem]">
			<img src="/icons/BackToTop.svg" alt="back to top icon" />
		</button>
	);
};

export default ScrollToTopButton;
