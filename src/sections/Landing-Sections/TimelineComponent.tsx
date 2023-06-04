import { Oswald, Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const oswald = Oswald({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

const cardVariants: Variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 2,
		},
	},
};

const TimelineComponent = () => {
	return (
		<>
			<div className="m-auto flex h-max flex-col justify-center text-white  lg:w-1/2">
				<div
					className={`text-timelineheader text-center text-3xl font-extrabold text-[#FFF6E8] md:text-5xl lg:h-12 ${oswald.className}`}
				>
					TIMELINE FOR HACKATHON
				</div>
				<div
					className={`mt-4 text-center text-2xl font-bold text-[#FFCCDE] md:text-3xl ${oswald.className}`}
				>
					SAVE YOUR DATES!
				</div>
			</div>
			<div
				id="timeline"
				className={`mx-auto mt-20 grid w-full max-w-7xl grid-cols-9 px-2 pt-10 ${manrope.className}`}
			>
				<div className="col-span-4 h-full w-full ">
					<div className="w-0 sm:w-full"></div>
				</div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 mt-3 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-36 md:w-24 lg:w-16 "
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pl-16"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							OPENING CEREMONY
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 4th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								4:00 pm onwards
							</p>
						</div>

						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
						Welcome to HackStory. Meet your competitors, roll up your sleeves and get ready to come up with revolutionising ideas.
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pr-16 md:pl-4"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							REVIEW-1
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 5th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								5:00 am onwards
							</p>
						</div>
						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
						Choose a track and start ideating, we’ll come by to take a look at your innovative ideas.
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[68px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16"
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<div className="col-span-4 h-full w-full">
					<div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
				</div>
				<div className="col-span-4 h-full w-full ">
					<div className="w-0 sm:w-full"></div>
				</div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 mt-3 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-36 md:w-24 lg:w-16 "
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pl-16"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							UNLOCKING FINANCIAL SUCCESS
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 5th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								12:00 pm onwards
							</p>
						</div>

						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
						Financial schemes seems daunting? Having monetary troubles? Bulls and Bears will make it easier for you.
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pr-16 md:pl-4"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							REVIEW-2
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 6th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								12:00 pm onwards
							</p>
						</div>
						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
						Is your coding game on? In this review we’ll check the uniqueness, individuality and progress of your project.
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[68px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16"
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<div className="col-span-4 h-full w-full">
					<div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
				</div>
				<div className="col-span-4 h-full w-full ">
					<div className="w-0 sm:w-full"></div>
				</div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 mt-3 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-36 md:w-24 lg:w-16 "
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pl-16"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							FROM IDEAS TO INFLUENCE
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 6th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								11:00 am onwards
							</p>
						</div>

						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
						Have a groundbreaking product or a startup idea but don’t know how to go ahead with it? Learn it from our experienced speakers.
						</p>
					</motion.div>
				</motion.div>
				{/* <motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pr-16 md:pl-4"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							REVIEW-3
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 6th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								12:00 pm onwards
							</p>
						</div>
						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
						Only the top 10 teams will advance to the final showdown.
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[68px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16"
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<div className="col-span-4 h-full w-full">
					<div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
				</div> */}
				
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pr-16 md:pl-4"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							FINAL PITCHES 
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 6th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								4:30 pm onwards
							</p>
						</div>
						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
						Tech and design skills will only get you this far. Polish your pitching skills to win exciting prizes.
						</p>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[68px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16"
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<div className="col-span-4 h-full w-full">
					<div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
				</div>
				<div className="col-span-4 h-full w-full ">
					<div className="w-0 sm:w-full"></div>
				</div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="relative col-span-1 mt-3 flex h-full w-full justify-center"
				>
					<motion.div
						variants={cardVariants}
						className="flex h-full w-full justify-center bg-inherit"
					>
						<svg
							width="4"
							height="108"
							viewBox="0 0 4 108"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 106.005L2 2"
								stroke="url(#paint0_radial_244_2348)"
								stroke-width="3"
								stroke-linecap="round"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2348"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
					<motion.div
						variants={cardVariants}
						className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-36 md:w-24 lg:w-16 "
					>
						<svg
							width="64"
							height="18"
							viewBox="0 0 64 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
								fill="url(#paint0_radial_244_2349)"
							/>
							<defs>
								<radialGradient
									id="paint0_radial_244_2349"
									cx="0"
									cy="0"
									r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
								>
									<stop stop-color="#FFCCDE" />
									<stop
										offset="1"
										stop-color="#FFCCDE"
										stop-opacity="0"
									/>
								</radialGradient>
							</defs>
						</svg>
					</motion.div>
				</motion.div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true }}
					className="col-span-4 h-full w-full "
				>
					<motion.div
						variants={cardVariants}
						className="h-full w-full p-2 md:pl-16"
					>
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							CLOSING CEREMONY
						</h1>
						<div className="flex flex-col sm:flex-row sm:items-center">
							<p className="text-left text-base text-[#E8E8EE] sm:mr-2">
								June 6th 2023
							</p>
							<span className="hidden text-4xl text-[#E8E8EE] md:block">
								|
							</span>
							<p className="text-left text-base text-[#E8E8EE] sm:ml-2">
								7:00 pm onwards
							</p>
						</div>

						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
							
							Nothing less than a roll coaster ride, 
						HackStory {"'23"} comes to an end. Take a well-deserved rest while awaiting the results.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default TimelineComponent;
