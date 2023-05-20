import React from "react";
import { useState } from "react";

export const ClubDrop = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="text-left text-white">
				<div
					className="flex text-2xl justify-between pb-2 mr-20 border-b border-white "
					onClick={() => setOpen(!open)}
				>
					<h3 className="">Computer Society of India</h3>
					<span className={"" + (open ? "hidden" : "")}>+</span>
					<span className={"" + (open ? "" : "hidden")}>-</span>
				</div>
				{open && (
					<p className="pt-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Atque ab odit distinctio. Nihil tempore molestias
						assumenda error eos illo repellendus!
					</p>
				)}
			</div>
		</div>
	);
};
