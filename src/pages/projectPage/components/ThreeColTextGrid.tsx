import { FunctionComponent } from "react";
import ThreeColTextGridType from "../../../interfaces/ThreeColTextGridType";

interface ThreeColTextGridProps {
	cards: ThreeColTextGridType[];
}

const ThreeColTextGrid: FunctionComponent<ThreeColTextGridProps> = ({ cards }) => {
	return (
		<div className="grid grid-flow-dense grid-cols-3 gap-[5rem]">
			{cards.map((card, index) => {
				return (
					<div key={index}>
						{card.image && (
							<div className={`${card.cardBgColor} rounded-[2rem] px-[10.5rem] py-[3.8rem]`}>
								<img className={`aspect-auto `} src={card.image.url} alt={card.image.alt} />
							</div>
						)}
						{card.icon ? (
							<>
								<p className="flex items-center text-[2.4rem] mb-[1.6rem]">
									{card.icon && <img className="pr-[1.5rem]  " src={card.icon.url} alt={card.icon.alt} />} {card.title}
								</p>
							</>
						) : (
							<>
								<p className="flex items-center text-[2.4rem] mb-[1.6rem] my-[1.6rem] font-bold">{card.title}</p>
							</>
						)}
						<p className="text-[1.8rem]">{card.text}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ThreeColTextGrid;
