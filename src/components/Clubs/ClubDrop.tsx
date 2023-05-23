import React from "react";
import { useState } from "react";

export const ClubDrop = ({ title, num }) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="text-left ">
				<div
					className={
						"flex font-semibold text-2xl justify-between pb-2 mr-20 border-b " +
						(open ? "" : "text-[#A7A9BE] border-[#A7A9BE]") +
						(num == 1 && open
							? "text-[#FFCCDE] border-[#FFCCDE]"
							: "") +
						(num == 2 && open
							? "text-[#007656] border-[#007656]"
							: "") +
						(num == 3 && open
							? "text-[#FABF29] border-[#FABF29]"
							: "") +
						(num == 4 && open
							? "text-[#F54E26] border-[#F54E26]"
							: "")
					}
					onClick={() => setOpen(!open)}
				>
					<h3>{title}</h3>
					<span className={"" + (open ? "hidden" : "")}>+</span>
					<span className={"" + (open ? "" : "hidden")}>-</span>
				</div>
				{open && (
					<p className="pt-8 mr-20 text-[#FFF6E8]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Atque ab odit distinctio. Nihil tempore molestias
						assumenda error eos illo repellendus!
					</p>
				)}
			</div>
		</div>
	);
};
