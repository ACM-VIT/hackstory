import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

const navVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const liVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="#fff"
		strokeLinecap="round"
		{...props}
	/>
);

const Header = () => {
	const router = useRouter();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<motion.div
			initial={false}
			animate={isMenuOpen ? "open" : "closed"}
			className="mx-auto border-[#2E2E2E] px-8 py-5 lg:border-b-[1px]"
		>
			<div className="flex flex-col justify-center lg:flex-row lg:items-center">
				<div className="">
					<svg
						onClick={handleMenuToggle}
						className="lg:hidden"
						width="24px"
						height="24px"
						viewBox="0 0 23 23"
					>
						<Path
							variants={{
								closed: { d: "M 2 2.5 L 20 2.5" },
								open: { d: "M 3 16.5 L 17 2.5" },
							}}
							transition={{ duration: 0.5 }}
						/>
						<Path
							d="M 2 9.423 L 20 9.423"
							variants={{
								closed: { opacity: 1 },
								open: { opacity: 0 },
							}}
							transition={{ duration: 0.1 }}
						/>
						<Path
							variants={{
								closed: { d: "M 2 16.346 L 20 16.346" },
								open: { d: "M 3 2.5 L 17 16.346" },
							}}
							transition={{ duration: 0.5 }}
						/>
					</svg>
				</div>
				<nav
					className={`transition-all duration-500 ease-in-out lg:block ${
						isMenuOpen ? "" : "hidden"
					}`}
				>
					<motion.ul
						variants={navVariants}
						className={`mt-4 flex flex-col items-center gap-y-4 lg:mt-0 lg:hidden lg:flex-row lg:space-x-0`}
					>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								HOME
							</Link>
						</motion.li>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/#about"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								ABOUT HACK
							</Link>
						</motion.li>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/#clubs"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								ABOUT CLUBS
							</Link>
						</motion.li>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/#timeline"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								TIMELINE
							</Link>
						</motion.li>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/#tracks"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								TRACKS
							</Link>
						</motion.li>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/#prizes"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								PRIZES
							</Link>
						</motion.li>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/#partnership"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								SPONSORS
							</Link>
						</motion.li>

						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/#faqs"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								FAQs
							</Link>
						</motion.li>
						<motion.li
							variants={liVariants}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/play"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								PLAY
							</Link>
						</motion.li>
					</motion.ul>
					<ul
						className={`mt-4 flex flex-col items-center gap-y-4 max-lg:hidden lg:mt-0 lg:flex-row lg:space-x-[3vw]`}
					>
						<Image
							className="cursor-pointer xl:mr-48"
							onClick={() => router.push("/")}
							src="/logo.svg"
							alt="HS"
							width={50}
							height={50}
						/>
						<li>
							<Link
								href="/#about"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								ABOUT HACK
							</Link>
						</li>
						<li>
							<Link
								href="/#clubs"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								ABOUT CLUBS
							</Link>
						</li>
						<li>
							<Link
								href="/#timeline"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								TIMELINE
							</Link>
						</li>
						<li>
							<Link
								href="/#tracks"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								TRACKS
							</Link>
						</li>
						<li>
							<Link
								href="/#prizes"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								PRIZES
							</Link>
						</li>
						<li>
							<Link
								href="/#partnership"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								SPONSORS
							</Link>
						</li>
						<li>
							<Link
								href="/#faqs"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								FAQs
							</Link>
						</li>
						<li>
							<Link
								href="/play"
								scroll={false}
								className="text-l font-extrabold text-headerbutton hover:text-[#FFCCDE]"
							>
								PLAY
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</motion.div>
	);
};

export default Header;
