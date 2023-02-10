import { FunctionComponent } from "react";

interface TitleProps {
	title: string;
	isCenter?: boolean;
	isFitWidth?: boolean;
}

const Title: FunctionComponent<TitleProps> = ({ title, isCenter, isFitWidth }) => {
	return <p className={`text-[8.4rem] font-bold font-serif ${isFitWidth ? "h-fit" : "w-[80rem]"}  mb-[2.4rem] ${isCenter && "mx-auto"} `}>{title}</p>;
};

export default Title;
