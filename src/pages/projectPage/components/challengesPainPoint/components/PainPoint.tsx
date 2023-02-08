import { FunctionComponent } from "react";
import PainPointType from "../../../../../interfaces/PainPointType";

interface PainPointProps {
	painPoints: PainPointType[];
	color: string;
}

const PainPoint: FunctionComponent<PainPointProps> = ({ painPoints, color }) => {
	return (
		<div>
			<p className="text-[2.4rem] font-bold mb-[2.4rem] text-projectGrey">PAIN POINTS</p>
			<div className="grid grid-cols-2 gap-[12rem]">
				{painPoints.map((painPoint, index) => {
					return (
						<div>
							<div className="flex  gap-[1.9rem] items-end ">
								<p className={`text-[10rem]  font-bold ${color}`}>.{index + 1}</p>
								<p className="text-[2.4rem] text-projectBlack mb-12">{painPoint.title}</p>
							</div>
							<p className="text-[1.8rem]">{painPoint.text}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PainPoint;
