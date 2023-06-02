import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Track {
	name: string;
}

interface Props {
	title: string;
	answer: string;
}

export const TrackDrop = ({ title, answer }: Props) => {
	const router = useRouter();
	const [activeIndex, setActiveIndex] = useState(null);
	const [open, setOpen] = useState(false);

	console.log(open);

	const tracks: Track[] = [
		{
			name: "Problem 1",
		},
		{
			name: "Problem 2",
		},
		{
			name: "Problem 2",
		},
	];

	return (
		<div>
			<div className=" text-left">
				<motion.div
					initial={false}
					animate={open ? "open" : "closed"}
					className="rounded border-b border-t border-gray-300 border-opacity-10 px-4 py-6"
					onClick={() => setOpen(!open)}
				>
					<motion.button
						whileTap={{ scale: 0.97 }}
						className="flex w-full items-center justify-between focus:outline-none"
					>
						<span className="pr-4 text-left text-base font-semibold text-white sm:text-lg">
							{title}
						</span>
					</motion.button>
					{open && (
						<motion.p
							className={`mr-20 pt-4 text-[#FFF6E8]`}
							dangerouslySetInnerHTML={{ __html: answer }}
						></motion.p>
					)}
				</motion.div>
			</div>
		</div>
	);
};
