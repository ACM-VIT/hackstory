import { Oswald } from "next/font/google";
import React from "react";

const TrackContent = () => {
	const tracks = [
		"FINTECH",
		"OPEN INNOVATION",
		"HEALTH TECH",
		"MACHINE LEARNING",
	];
	return (
		<div className=" max-lg:flex max-lg:items-center max-lg:justify-center">
			<div className="max-lg:w-[80vw]">
				<div
					className={` mt-25vh text-fontColor1 flex h-60 items-center justify-around  text-center text-3xl font-extrabold text-tracks  lg:text-4xl`}
				>
					CHECK OUT THE TRACKS
				</div>
				<div className=" ">
					{tracks.map((track, index) => (
						<div
							key={index}
							className="mb-10 ml-[4rem] mr-[4rem] flex flex-col gap-y-8 border-b border-tracks pb-8 pt-4 lg:ml-[20rem] lg:mr-[20rem]"
						>
							<p
								className={`text-2xl font-extrabold text-tracks max-lg:text-center lg:text-3xl`}
							>
								{track}
							</p>
							<div className="flex flex-col gap-x-5 gap-y-2 max-md:items-center md:flex-row">
								<a className="max-w-[6rem] cursor-pointer rounded-md bg-tracks p-2">
									WordGame
								</a>
								<p className="p-2 text-trackstext">Word1</p>
								<p className="hidden p-2 text-trackstext lg:visible">
									|
								</p>
								<p className="p-2 text-trackstext">Word2</p>
								<p className="hidden p-2 text-trackstext lg:visible">
									|
								</p>
								<p className="p-2 text-trackstext">Word 3</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrackContent;
