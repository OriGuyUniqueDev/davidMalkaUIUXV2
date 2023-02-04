import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import Contact from "../home/components/contact/Contact";

interface ProjectPageProps {}

const ProjectPage: FunctionComponent<ProjectPageProps> = () => {
	let { projectName } = useParams();
	return (
		<>
			<p className="text-9xl">{projectName}</p>
			<Contact />
		</>
	);
};

export default ProjectPage;
