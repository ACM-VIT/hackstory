import React from "react";
import { useState } from "react";

export const ClubDrop = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="text-left text-[#A7A9BE]">
				<div
					className="flex font-semibold text-2xl justify-between pb-2 mr-20 border-b border-[#A7A9BE] "
					onClick={() => setOpen(!open)}
				>
					<h3 className="">{props.title}</h3>
					<span className={"" + (open ? "hidden" : "")}>+</span>
					<span className={"" + (open ? "" : "hidden")}>-</span>
				</div>
				{open && (
					<p className="pt-8 mr-20">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Atque ab odit distinctio. Nihil tempore molestias
						assumenda error eos illo repellendus!
					</p>
				)}
			</div>
		</div>
	);
};
