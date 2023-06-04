import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { DEV_BASE_URL } from "@/constants";
import getHandler from "@/handlers/getHandler";
import React from "react";
import { useState, useEffect } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

const renderer: CountdownRendererFn = ({ days, hours, minutes }) => {
	return (
		<p className="mt-2 text-xl text-[#E8E8EE]">
			{days} days : {hours} hrs : {minutes} minutes{" "}
		</p>
	);
};

const Clock = () => {
	const { data: session } = useSession();
	const [isPartOfTeam, setIsPartOfTeam] = useState(false);

	const router = useRouter();

	useEffect(() => {
		// just check if the isn't getting overloaded with the request of team check.
		if (session) {
			const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/team/getTeamDetails`;
			getHandler(URL).then((res) => {
				if (res.statusCode == 200) {
					setIsPartOfTeam(true);
				}
			});
		}
	}, [session]);

	const handleClick = () => {
		if (isPartOfTeam) router.push("/team");
		else router.push("/team/registration");
	};

	const targetDate = new Date("2023-06-04 16:00:00");
	return (
		<div className="mb-[10vh] mt-[10vh] flex h-full items-center justify-center">
			<div className="flex h-full w-4/5 items-center justify-center gap-y-6 rounded-2xl bg-[#2E2E2E] p-[4vh] max-lg:flex-col max-lg:py-[5vh] sm:p-[10vh]">
				<div className="text-xl font-bold text-[#FFF6E8] max-lg:text-center sm:text-2xl lg:mr-16 lg:w-3/5">
					<p>
						Don&apos;t miss an opportunity to win big with HackStory
					</p>
					<div className="flex max-lg:justify-center">
						{/* <div
							className={`mt-12 flex lg:h-16 lg:w-56 max-w-[15rem] cursor-pointer flex-row justify-center rounded-[30px] bg-yellow sm:px-8 sm:py-4 px-4 py-2 text-[18px] font-extrabold text-[#121212] max-lg:mt-6 lg:text-[20px]`}
							onClick={() => console.log("test")}
						>
							REGISTER NOW
						</div> */}
						{session ? (
							isPartOfTeam ? (
								<div
									className={`mt-12 flex max-w-[15rem] cursor-pointer flex-row justify-center rounded-[30px] bg-yellow px-4 py-2 text-[18px] font-bold text-[#121212] max-lg:mt-6 sm:px-8 sm:py-4 lg:h-16 lg:w-56 lg:text-[20px] ${manrope.className}`}
									onClick={handleClick}
								>
									VIEW TEAM
								</div>
							) : (
								<div
									className={`mt-12 flex max-w-[15rem] cursor-pointer flex-row justify-center rounded-[30px] bg-yellow px-4 py-2 text-[18px] font-bold text-[#121212] max-lg:mt-6 sm:px-8 sm:py-4 lg:h-16 lg:w-56 lg:text-[20px] ${manrope.className}`}
									onClick={handleClick}
								>
									JOIN TEAM
								</div>
							)
						) : (
							<div
								className={`mt-12 flex max-w-[15rem] cursor-pointer flex-row justify-center rounded-[30px] bg-yellow px-4 py-2 text-[18px] font-bold text-[#121212] max-lg:mt-6 sm:px-8 sm:py-4 lg:h-16 lg:w-56 lg:text-[20px] ${manrope.className}`}
								onClick={() => signIn("google")}
							>
								REGISTER NOW
							</div>
						)}
					</div>
				</div>
				<div className="items-center justify-center rounded-2xl border border-[#A7A9BE] p-6 text-center text-xl font-bold text-[#A7A9BE] sm:text-2xl  lg:p-12">
					<p>HackStory starts in</p>
					<Countdown date={targetDate} renderer={renderer} />
				</div>
			</div>
		</div>
	);
};

export default Clock;
