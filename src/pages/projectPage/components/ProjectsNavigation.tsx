import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface ProjectNavigationProps {
	previous: string;
	next: string;
}

const ProjectNavigation: FunctionComponent<ProjectNavigationProps> = ({ previous, next }) => {
	return (
		<div className="md:max-w-[1280px] sm:max-w-[375px] mx-auto h-[8.5rem]   flex ">
			<div className="flex w-full  text-[1.8rem]  mx-auto justify-between h-full  sm:px-[1.8rem] items-center md:px-[7rem]">
				<Link className=" flex items-center gap-4  text-projectWhite" to={`/project/${previous}`}>
					<img className="rotate-180" src="/icons/leftArrowWhite.svg" alt="left Arrow White" /> Previous project
				</Link>
				<Link className="flex items-center gap-4  text-projectWhite" to={`/project/${next}`}>
					Next project <img src="/icons/leftArrowWhite.svg" alt="left Arrow White" />
				</Link>
			</div>
		</div>
	);
};

export default ProjectNavigation;
