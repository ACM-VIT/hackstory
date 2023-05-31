import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

interface Props {
	title: string;
	num: number;
	text: string;
	temp: boolean;
}

const ClubDrop = ({ title, num, text, open }: Props) => {
	// const [open, setOpen] = useState(false);

	// if (!temp) {
	// 	setOpen(false);
	// }

	// console.log(num + " open " + open);
	// console.log(num + " temp " + temp);

	return (
		<div>
			<div className=" text-left">
				<div
					className={
						"flex  cursor-pointer items-center justify-between border-b pb-2 text-2xl font-semibold" +
						(open ? "" : "border-[#A7A9BE] text-[#A7A9BE]") +
						(num == 1 && open
							? "border-[#A7A9BE] text-[#FFCCDE]"
							: "") +
						(num == 2 && open
							? "border-[#A7A9BE] text-[#007656]"
							: "") +
						(num == 3 && open
							? "border-[#A7A9BE] text-[#FABF29]"
							: "") +
						(num == 4 && open
							? "border-[#A7A9BE] text-[#F54E26]"
							: "")
					}
					onClick={() => (open = !open)}
				>
					<h3>{title}</h3>
					<div className="">
						<Image
							width={10000}
							height={10000}
							src="/plus-icon.svg"
							alt="plus-icon"
							className={`h-8 w-8 ${open ? "hidden" : ""}`}
						/>

						<span className={"" + (open ? "" : "hidden")}>
							<Image
								width={10000}
								height={10000}
								src="/minus-icon.svg"
								alt="plus-icon"
								className={`h-8 w-8 ${!open ? "hidden" : ""}`}
							/>
						</span>
					</div>
				</div>
				{open && <p className={`mr-20 pt-4 text-[#FFF6E8]`}>{text}</p>}
			</div>
		</div>
	);
};

export default ClubDrop;
