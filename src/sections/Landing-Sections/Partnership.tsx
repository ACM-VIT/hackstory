import React from "react";
import Image from "next/image";

const Partnership = () => {
	return (
		<div className="mt-16 pb-40 md:mt-32 md:pb-48 lg:pb-48">
			<div className="ml-[10vw] flex justify-start">
				<Image
					className="w-[114px]"
					src="/cat-high.svg"
					width={10000}
					height={10000}
					alt="prize-doodle"
				/>
			</div>
			<div className="  ">
				<div className="z-9 relative flex flex-col items-center gap-8 bg-[#FFCCDE] text-black md:gap-12 lg:gap-16">
					<div
						className={` w-full pt-8 text-center text-[1.5rem] font-bold leading-[2rem] md:text-[2rem] md:leading-[2.75rem] lg:text-[2.5rem] lg:leading-[3.75rem]`}
					>
						<text>PARTNERSHIP WITH</text>
					</div>
					<p
						className={` w-full pb-12 text-center text-[1rem] font-semibold md:pb-16 md:text-[1.25rem] lg:pb-24 lg:text-[1.75rem] `}
					>
						Coming soon..
					</p>
				</div>
			</div>
			<div className="ml-[10vw] mt-[-20px] flex justify-start">
				<Image
					className="w-[100px]"
					src="/cat-low.svg"
					width={10000}
					height={10000}
					alt="prize-doodle"
				/>
			</div>
		</div>
	);
};

export default Partnership;
