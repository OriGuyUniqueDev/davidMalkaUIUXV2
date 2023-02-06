import { FunctionComponent } from "react";

interface HistoryProps {}

const History: FunctionComponent<HistoryProps> = () => {
	return (
		<div className="bg-projectLightGray z-20 relative w-full h-[28.2rem]  overflow-hidden  ">
			<div className="w-full flex items-center h-full justify-between">
				<div className="py-[6rem] w-[60rem]  mx-auto">
					<p className="text-[6.4rem] font-bold font-serif mb-[1.4rem]">Website history</p>
					<p className="text-[1.8rem]">Our company's website was created 8 years ago with a superhero concept (branding ourselves as heroes). We want to refresh the design and bring a more modern twist to the same superhero idea.</p>
				</div>
				<img className="relative right-0 -bottom-[4.5rem] h-[38rem]" src="/images/projects/abra/images/history.png" alt="Website history image" />
			</div>
		</div>
	);
};

export default History;
