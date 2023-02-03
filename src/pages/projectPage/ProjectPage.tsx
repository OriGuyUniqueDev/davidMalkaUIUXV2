import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface ProjectPageProps {}

const ProjectPage: FunctionComponent<ProjectPageProps> = () => {
	let { projectName } = useParams();
	return (
		<>
			<p className="text-9xl">{projectName}</p>
		</>
	);
};

export default ProjectPage;
