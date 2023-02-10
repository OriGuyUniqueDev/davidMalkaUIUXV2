import { FunctionComponent } from "react";
import GraySubHeader from "../../../../components/GraySubHeader";
import ProjectWrapper from "../../../../components/ProjectWrapper";
import Title from "../../../../components/Title";

interface BeforeAfterProps {
	grayText1: string;
	grayText2: string;
	title: string;
	bgColor: string;
	textColor: string;
}

const BeforeAfter: FunctionComponent<BeforeAfterProps> = ({ bgColor, grayText1, grayText2, textColor, title }) => {
	return (
		<ProjectWrapper bgColor={bgColor} textColor={textColor}>
			<>
				<div className="block w-full text-center mx-auto mb-[4.4rem]">
					<Title isCenter={true} title={title} />
				</div>
				<div className="grid grid-cols-2 grid-flow-col justify-center">
					<div className="place-self-end">
						<div className="w-full text-center">
							<GraySubHeader text={grayText1} />
						</div>
						<img className="mt-[4.8rem]" src="/images/projects/redis/images/before.png" alt="before image" />
					</div>
					<div className="justify-end">
						<div className="w-full text-center">
							<GraySubHeader text={grayText2} />
						</div>
						<img src="/images/projects/redis/images/after.png" alt="after image" />
					</div>
				</div>
			</>
		</ProjectWrapper>
	);
};

export default BeforeAfter;
