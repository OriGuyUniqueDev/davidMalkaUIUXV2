import { FunctionComponent } from "react";

interface SubTitleProps {
	subTitleText: string;
}

const SubTitle: FunctionComponent<SubTitleProps> = ({ subTitleText }) => {
	return <p className="text-[1.8rem] font-light w-[67.1rem] leading-[2.87rem]">{subTitleText}</p>;
};

export default SubTitle;
