import React from "react";
import { useState } from "react";
import { Oswald, Barlow } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
const barlow = Barlow({ subsets: ["latin"], weight: "400" });

export const ClubDrop = ({ title, num, text }) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="text-left">
				<div
					className={
						"flex font-semibold text-2xl justify-between items-center pb-2 mr-20 border-b " +
						(open ? "" : "text-[#A7A9BE] border-[#A7A9BE]") +
						(num == 1 && open
							? "text-[#FFCCDE] border-[#A7A9BE]"
							: "") +
						(num == 2 && open
							? "text-[#007656] border-[#A7A9BE]"
							: "") +
						(num == 3 && open
							? "text-[#FABF29] border-[#A7A9BE]"
							: "") +
						(num == 4 && open
							? "text-[#F54E26] border-[#A7A9BE]"
							: "")
					}
					onClick={() => setOpen(!open)}
				>
					<h3 className={`${oswald.className}`}>{title}</h3>
					<div className="">
						<span className={"" + (open ? "hidden" : "")}>
							<img src="/plus-icon.svg" alt="plus-icon" />
						</span>
						<span className={"" + (open ? "" : "hidden")}>
							<img src="/minus-icon.svg" alt="minus-icon" />
						</span>
					</div>
				</div>
				{open && (
					<p
						className={`${barlow.className} pt-4 mr-20 text-[#FFF6E8]`}
					>
						{text}
					</p>
				)}
			</div>
		</div>
	);
};
