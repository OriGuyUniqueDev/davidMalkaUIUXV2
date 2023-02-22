import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import Project from "../../home/components/project/Project";
import ProjectWrapper from "./ProjectWrapper";

interface ScrollToTopButtonProps {}

const ScrollToTopButton: FunctionComponent<ScrollToTopButtonProps> = () => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<button
			onClick={handleClick}
			className="bg-projectBlack fixed z-[999] right-[4rem] bottom-[4.5rem] rounded-full p-[1rem] border-[0.2rem] border-projectWhite"
		>
			<img
				src="/icons/BackToTop.svg"
				alt="back to top icon"
			/>
		</button>
	);
};

export default ScrollToTopButton;
