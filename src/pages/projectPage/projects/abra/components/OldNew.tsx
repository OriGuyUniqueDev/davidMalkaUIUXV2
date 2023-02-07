import { FunctionComponent } from "react";

interface OldNewProps {}

const OldNew: FunctionComponent<OldNewProps> = () => {
	return (
		<div className=" relative w-full   px-[11rem] bg-gradient-to-r from-projectLightGray to-projectWhite      ">
			<div className="grid grid-cols-2 justify-center h-fit  ">
				<div className="bg-projectLightGray w-full ">
					<div className="flex  flex-col items-end gap-[3.8rem] py-[8rem] w-[20rem] h-fit mx-auto">
						<img className="h-fit w-[20rem]" src="/images/projects/abra/images/oldTop.png" alt="" />
						<img className="h-fit w-[16rem]" src="/images/projects/abra/images/oldMiddle.png" alt="" />
						<img className="h-fit w-[17rem]" src="/images/projects/abra/images/oldBottom.png" alt="" />
					</div>
				</div>
				<p className="absolute w-[20rem] font-serif font-bold text-center text-[8.4rem] self-center justify-self-center ">OLD vs NEW</p>
				<div className=" w-full bg-projectWhite ">
					<div className="flex  flex-col gap-[3.8rem] py-[8rem]  h-full justify-between items-center  mx-auto">
						<img className="h-[14.6rem] w-[20rem]" src="/images/projects/abra/images/newTop.png" alt="" />
						<img className="h-[14.6rem] w-[18rem]" src="/images/projects/abra/images/newMiddle.png" alt="" />
						<img className="h-[14.6rem] w-[32.8rem]" src="/images/projects/abra/images/newBottom.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OldNew;
