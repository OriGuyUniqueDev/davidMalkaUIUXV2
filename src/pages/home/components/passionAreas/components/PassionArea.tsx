import { FunctionComponent } from "react";
import ImageType from "../../../../../interfaces/ImageType";
import PassionType from "../../../../../interfaces/PassionType";

interface PassionAreaProps {
	passion: PassionType;
}

const PassionArea: FunctionComponent<PassionAreaProps> = ({ passion }) => {
	return (
		<ul className="flex flex-col gap-1 w-[22.3rem]">
			<p className="flex font-bold w-full  text-[2.4rem] text-projectWhite mb-7 ">
				<img src={passion.icon.url} alt={passion.icon.alt} className="mr-5  " />
				{passion.title}
			</p>
			<div className="mx-[4.3rem]">
				{passion.data.map((item) => {
					return <li className="text-3xl text-projectGrey mb-2 text-start  ">{item}</li>;
				})}
			</div>
		</ul>
	);
};

export default PassionArea;
