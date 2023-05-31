import { Oswald } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const oswald = Oswald({ subsets: ["latin"] });

interface Props {
	title: string;
	num: number;
	text: string;
	open: boolean;
}

const itemVariants: Variants = {
	open: {
		opacity: 1,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, transition: { duration: 0.2 } },
};

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
				<motion.div
					initial={false}
					animate={open ? "open" : "closed"}
					whileTap={{ scale: 0.97 }}
					className={
						"flex  cursor-pointer items-center justify-between border-b pb-2 font-semibold" +
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
					<h3
						className={`max-w-[80%] text-xl sm:text-2xl ${oswald.className} font-bold`}
					>
						{title}
					</h3>
					<motion.div
						variants={{
							open: { rotate: 180 },
							closed: { rotate: 0 },
						}}
						transition={{ duration: 0.2 }}
						style={{ originY: 0.55 }}
						className="white"
					>
						<svg
							fill="#A7A9BE"
							width="15"
							height="15"
							viewBox="0 0 20 20"
						>
							<path d="M0 7 L 20 7 L 10 16" />
						</svg>
					</motion.div>
					{/* <div>
						<span className={"" + (open ? "hidden" : "")}>
							<Image
								width={10000}
								height={10000}
								src="/plus-icon.svg"
								alt="plus-icon"
								className={`w-[28px]`}
							/>
						</span>

						<span className={"" + (open ? "" : "hidden")}>
							<Image
								width={10000}
								height={10000}
								src="/minus-icon.svg"
								alt="plus-icon"
								className={`w-[28px]`}
							/>
						</span>
					</div> */}
				</motion.div>
				<motion.div
					variants={{
						open: {
							transition: {
								type: "spring",
								bounce: 0,
								duration: 0.7,
								delayChildren: 0.3,
								staggerChildren: 0.05,
							},
						},
						closed: {
							transition: {
								type: "spring",
								bounce: 0,
								duration: 0.3,
							},
						},
					}}
				>
					{open && (
						<motion.p
							variants={itemVariants}
							className={`mr-20 pt-4 text-[#FFF6E8]`}
						>
							{text}
						</motion.p>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default ClubDrop;
