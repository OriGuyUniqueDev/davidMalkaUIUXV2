import { FunctionComponent } from "react";

interface AboutProjectProps {
	data: string;
}

const AboutProject: FunctionComponent<AboutProjectProps> = ({ data }) => {
	return (
		<div className="bg-projectWhite w-full md:py-[12rem] sm:py-[6rem] ">
			<div className="md:max-w-[1280px] mx-auto md:px-[7rem] sm:px-[1.8rem] ">
				<div className="w-full">
					<p className="text-[2.1rem] uppercase sm:hidden md:block   text-projectGrey">Introduction.</p>
					<h1 className="font-serif w-[41.9rem] md:text-[8.4rem] text-projectBlack  sm:text-[4.8rem] font-bold mb-[2.4rem]">About the project</h1>
					<p className="text-[1.8rem] md:w-[67.8rem] sm:w-[34.2rem]">{data}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutProject;
