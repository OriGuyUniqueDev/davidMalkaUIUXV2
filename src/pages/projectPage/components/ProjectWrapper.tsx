import { FunctionComponent } from "react";

interface ProjectWrapperProps {
	children: JSX.Element;
	bgColor: string;
	textColor: string;
}

const ProjectWrapper: FunctionComponent<ProjectWrapperProps> = ({ children, bgColor, textColor }) => {
	return (
		<div className={`${bgColor} w-full md:py-[12rem] sm:py-[6rem] ${textColor} `}>
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">{children}</div>
		</div>
	);
};

export default ProjectWrapper;
