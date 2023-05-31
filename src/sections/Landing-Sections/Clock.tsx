import React from "react";

import Countdown, { CountdownRendererFn } from "react-countdown";

const renderer: CountdownRendererFn = ({ days, hours, minutes }) => {
	return (
		<p className="mt-2 text-xl text-[#E8E8EE]">
			{days} days : {hours} hrs : {minutes} minutes{" "}
		</p>
	);
};

function Clock() {
	const targetDate = new Date("2023-06-04 16:00:00");
	return (
		<div className="mb-[10vh] mt-[10vh] flex h-full items-center justify-center">
			<div className="flex h-full w-4/5 items-center justify-center gap-y-6 rounded-2xl bg-[#2E2E2E] p-[10vh] max-lg:flex-col max-lg:py-[5vh]">
				<div className="text-2xl font-bold text-[#FFF6E8] max-lg:text-center lg:w-3/5">
					<p>
						Don't miss an opportunity to win big with <br></br>
						HackStory Hackathon
					</p>
					<div
						className={`mt-12 flex h-16 w-56  cursor-pointer flex-row justify-center rounded-[30px] bg-yellow px-8 py-4  text-[12px] font-extrabold text-[#121212] max-lg:mt-6 md:text-[15px] lg:text-[20px]`}
						onClick={() => console.log("test")}
					>
						REGISTER NOW
					</div>
				</div>
				<div className="items-center justify-center rounded-2xl border border-[#A7A9BE] p-6 text-center text-2xl font-bold text-[#A7A9BE]  lg:p-20">
					<p>Hackathon ends in</p>
					<Countdown date={targetDate} renderer={renderer} />
				</div>
			</div>
		</div>
	);
}

export default Clock;
