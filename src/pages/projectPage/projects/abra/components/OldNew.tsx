import { FunctionComponent } from "react";

interface OldNewProps {}

const OldNew: FunctionComponent<OldNewProps> = () => {
	return (
		<div className="bg-projectLightGray relative w-full flex  items-center py-[8rem]   ">
			<div className="flex flex-col gap-[3.8rem] w-[20rem] h-[59.3rem]">
				<img src="/images/projects/abra/images/oldTop.png" alt="" />
				<img src="/images/projects/abra/images/oldMiddle.png" alt="" />
				<img src="/images/projects/abra/images/oldBottom.png" alt="" />
			</div>
			<p className="w-[30rem] text-[8.4rem]">OLD vs NEW</p>
			<div className="flex flex-col gap-[3.8rem]  w-[32.8rem] h-[59.3rem]">
				<img className="h-[14.6rem" src="/images/projects/abra/images/newTop.png" alt="" />
				<img className="h-[14.6rem" src="/images/projects/abra/images/newMiddle.png" alt="" />
				<img className="h-[14.6rem" src="/images/projects/abra/images/newBottom.png" alt="" />
			</div>
		</div>
	);
};

export default OldNew;
