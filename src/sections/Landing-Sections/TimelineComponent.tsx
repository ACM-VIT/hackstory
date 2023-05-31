import { Oswald, Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";

const oswald = Oswald({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

const TimelineComponent = () => {
	return (
		<>
			<div className="m-auto flex h-max flex-col justify-center text-white  lg:w-1/2">
				<div
					className={`text-timelineheader text-center md:text-5xl text-3xl font-extrabold text-[#FFF6E8] lg:h-12 ${oswald.className}`}
				>
					TIMELINE FOR HACKATHON
				</div>
				<div
					className={`mt-4 text-center md:text-3xl text-2xl font-bold text-[#FFCCDE] ${oswald.className}`}
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
				<div className="relative col-span-1 mt-3 flex h-full w-full justify-center">
					<div className="flex h-full w-full justify-center bg-inherit">
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
					</div>
					<div className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-20 md:w-24 lg:ml-36 lg:w-16 ">
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
					</div>
				</div>
				<div className="col-span-4 h-full w-full ">
					<div className="h-full w-full p-2 md:pl-16">
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							Workshop Name
						</h1>
						<div className="flex sm:items-center sm:flex-row flex-col">
							<p className="text-left text-[#E8E8EE] text-base sm:mr-2">
								June 5th 2023
							</p>
							<span className="text-4xl hidden md:block text-[#E8E8EE]">|</span>
							<p className="sm:ml-2 text-left text-[#E8E8EE] text-base">
								 4:00 pm - 7:00 pm
							</p>
						</div>
						
						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className="col-span-4 h-full w-full ">
					<div className="h-full w-full p-2 md:px-16">
						<h1 className="text-bold py-2 text-right text-2xl font-bold text-[#A7A9BE]">
							Workshop Name
						</h1>
						<div className="flex sm:items-center sm:flex-row flex-col justify-end">
							<p className="text-right text-[#E8E8EE] text-base sm:mr-2">
								June 5th 2023
							</p>
							<span className="text-4xl hidden md:block text-[#E8E8EE]">|</span>
							<p className="sm:ml-2 text-right text-[#E8E8EE] text-base">
								 4:00 pm - 7:00 pm
							</p>
						</div>
						<p className="pt-5 text-right text-xs font-medium text-[#E8E8EE] sm:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className="relative col-span-1 flex h-full w-full justify-center">
					<div className="invisible absolute mt-[68px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16">
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
					</div>
					<div className="flex h-full w-full justify-center bg-inherit">
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
					</div>
				</div>
				<div className="col-span-4 h-full w-full">
					<div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
				</div>

				<div className="col-span-4 w-full pt-20">
					<div className="w-0 sm:w-full"></div>
				</div>
				<div className="relative col-span-1 flex h-full w-full justify-center">
					<div className="flex h-full w-full justify-center bg-inherit">
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
					</div>
					<div className="invisible absolute mt-[66px] h-1 bg-inherit md:visible md:ml-20 md:w-24 lg:ml-36 lg:w-16">
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
					</div>
				</div>
				<div className="col-span-4 h-full w-full">
					<div className="h-full w-full p-2 md:pl-16">
						<h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
							Workshop Name
						</h1>
						<div className="flex sm:items-center sm:flex-row flex-col">
							<p className="text-left text-[#E8E8EE] text-base sm:mr-2">
								June 5th 2023
							</p>
							<span className="text-4xl hidden md:block text-[#E8E8EE]">|</span>
							<p className="sm:ml-2 text-left text-[#E8E8EE] text-base">
								 4:00 pm - 7:00 pm
							</p>
						</div>
						<p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className="col-span-4 h-full w-full ">
					<div className="h-full w-full p-2 md:px-16">
						<h1 className="text-bold py-2 text-right text-2xl font-bold text-[#A7A9BE]">
							Workshop Name
						</h1>
						<div className="flex sm:items-center sm:flex-row flex-col justify-end">
							<p className="text-right text-[#E8E8EE] text-base sm:mr-2">
								June 5th 2023
							</p>
							<span className="text-4xl hidden md:block text-[#E8E8EE]">|</span>
							<p className="sm:ml-2 text-right text-[#E8E8EE] text-base">
								 4:00 pm - 7:00 pm
							</p>
						</div>
						<p className="pt-5 text-right text-xs font-medium text-[#E8E8EE] sm:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className="relative col-span-1 flex h-full w-full justify-center">
					<div className="invisible absolute mt-[66px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16">
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
					</div>
					<div className="flex h-full w-full justify-center bg-inherit">
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
					</div>
				</div>
				<div className="col-span-4 h-full w-full">
					<div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
				</div>
			</div>
		</>
	);
};

export default TimelineComponent;
