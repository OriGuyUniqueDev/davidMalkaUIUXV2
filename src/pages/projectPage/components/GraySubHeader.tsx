import { FunctionComponent } from "react";

interface GraySubHeaderProps {
	text: string;
}

const GraySubHeader: FunctionComponent<GraySubHeaderProps> = ({ text }) => {
	return <p className="text-[2.1rem] tracking-[10%] text-projectGrey uppercase ">{text}</p>;
};

export default GraySubHeader;
