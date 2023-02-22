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
		<div className={`w-full mx-auto md:px-[7rem]   md:py-[12rem]  ${`bg-${project.colorBG}`} `}>
			<div className={`md:max-w-[1280px] sm:max-w-[375px] mx-auto md:grid  sm:flex  sm:flex-col-reverse md:grid-cols-2   items-center       ${project.reverse ? " md:justify-items-end" : ""}`}>
				<div className={`sm:w-full  md:w-fit ${project.reverse ? "md:order-2 md:justify-items-end" : "md:order-0"}`}>
					<p className={`font-serif md:text-8xl sm:text-[2.4rem] font-bold md:mb-7 sm:mb-0 ${project.colorBG === "projectBlack" ? "text-projectWhite" : " text-projectBlack"} `}>{project.title}</p>
					<p className={`text-projectGrey font-normal md:mb-[4.8rem] sm:mb-[2.4rem]  md:text-4xl sm:text-[1.8rem]`}>{project.subTitle}</p>

					<Link
						to={`/project/${project.linkTo}`}
						className={`px-6 py-7 md:w-[16.9rem] sm:w-full h-[6.1rem] flex items-center gap-4 justify-center ${project.colorBG === "projectBlack" ? "border-projectWhite text-projectWhite" : "border-projectBlack text-projectBlack"}  border-[0.2rem] font-medium text-2xl hover:text-projectGrey hover:border-projectGrey transition duration-500 `}
					>
						View project
						<img
							src={project.colorBG === "projectBlack" ? "/icons/leftArrowWhite.svg" : "/icons/leftArrowBlack.svg"}
							alt="left arrow"
							className="hover:fill-projectGrey transition duration-500"
						/>
					</Link>
				</div>
				<img
					src={project.img.url}
					alt={project.img.alt}
					className="    "
				/>
			</div>
		</div>
	);
};

export default Project;
