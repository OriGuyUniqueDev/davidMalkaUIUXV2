import { FunctionComponent } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProjectType from "../../../../interfaces/ProjectType";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Link } from "react-router-dom";

interface ProjectProps {
	project: ProjectType;
}

const Project: FunctionComponent<ProjectProps> = ({ project }) => {
	return (
		<div className={`w-full mx-auto  md:h-[81.2rem] sm:h-[53.3rem] pb-[11.8rem] ${`bg-${project.colorBG}`} `}>
			<div className={`md:max-w-[1280px] sm:max-w-[375px] mx-auto flex md:flex-row sm:flex-col md:h-[81.2rem] sm:h-[53.3rem] items-center md:justify-between sm:justify-around ${project.reverse ? "md:flex-row-reverse" : ""} md:px-[7rem]  sm:px-[1.8rem] sm:py-[6rem]  md:py-0 sm:flex-col-reverse `}>
				<div className="sm:w-full md:w-fit">
					<p className={`font-serif md:text-8xl sm:text-[2.4rem] font-bold md:mb-7 sm:mb-0 ${project.colorBG === "projectBlack" ? "text-projectWhite" : " text-projectBlack"} `}>{project.title}</p>
					<p className="text-projectGrey md:mb-[4.8rem]  sm:mb-[2.4rem]  md:text-4xl sm:text-[1.8rem]">{project.subTitle}</p>

					<Link to={`/project/${project.linkTo}`} className={`px-6 py-7 md:w-[16.9rem] sm:w-full h-[6.1rem] flex items-center gap-4 justify-center ${project.colorBG === "projectBlack" ? "border-projectWhite text-projectWhite" : "border-projectBlack text-projectBlack"} border-[0.2rem] font-bold text-2xl`}>
						View project <img src={project.colorBG === "projectBlack" ? "/icons/leftArrowWhite.svg" : "/icons/leftArrowBlack.svg"} alt="left arrow" />
					</Link>
				</div>
				<LazyLoadImage src={project.img.url} alt={project.img.alt} effect="opacity" />
			</div>
		</div>
	);
};

export default Project;
