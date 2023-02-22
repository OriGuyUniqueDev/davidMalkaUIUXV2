import { FunctionComponent } from "react";
import ImageType from "../../../../../interfaces/ImageType";
import PassionType from "../../../../../interfaces/PassionType";

interface PassionAreaProps {
	passion: PassionType;
}

const PassionArea: FunctionComponent<PassionAreaProps> = ({ passion }) => {
	return (
		<div className="flex flex-col gap-1 w-[22.3rem]">
			<p className="flex font-semibold w-full  text-[2.4rem] text-projectWhite mb-7 ">
				<img
					src={passion.icon.url}
					alt={passion.icon.alt}
					className="mr-5  "
				/>
				{passion.title}
			</p>
			<ul className="mx-[4.3rem]">
				{passion.data.map((item, index) => {
					return (
						<li
							key={index}
							className="text-3xl font-light text-projectGrey mb-2 text-start  "
						>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PassionArea;
