import { FunctionComponent } from "react";

interface ProjectProps {
	title: string;
	img: {
		url: string;
		alt: string;
	};
	colorBg: string;
}

const Project: FunctionComponent<ProjectProps> = ({ title, img, colorBg }) => {
	return <div className={`w-full  h-full pb-[11.8rem] ${colorBg} px-28`}></div>;
};

export default Project;
