import { FunctionComponent } from "react";
import ProjectType from "../../../../interfaces/ProjectType";

interface ProjectProps {
	project: ProjectType;
}

const Project: FunctionComponent<ProjectProps> = ({ project }) => {
	return (
		<div className={`w-full mx-auto  h-[81.2rem] pb-[11.8rem] ${`bg-${project.colorBG}`} px-28`}>
			<div className={`container mx-auto flex h-[81.2rem] items-center justify-between ${project.reverse ? "flex-row-reverse" : ""}  `}>
				<div>
					<p className={`font-serif text-8xl font-bold mb-7 ${project.colorBG === "projectBlack" ? "text-projectWhite" : " text-projectBlack"} `}>{project.title}</p>
					<p className="text-projectGrey mb-[4.8rem] text-4xl">{project.subTitle}</p>
					<button className={`px-6 py-7 w-[16.9rem] h-[6.1rem] flex items-center gap-4 justify-center ${project.colorBG === "projectBlack" ? "border-projectWhite text-projectWhite" : "border-projectBlack text-projectBlack"} border-[0.2rem] font-bold text-2xl`}>
						View project <img src={project.colorBG === "projectBlack" ? "/icons/leftArrowWhite.svg" : "/icons/leftArrowBlack.svg"} alt="left arrow" />
					</button>
				</div>
				<img src={project.img.url} alt={project.img.alt} />
			</div>
		</div>
	);
};

export default Project;
