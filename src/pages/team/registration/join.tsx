import Header from "@/components/Common/Header";
import postHandler from "@/handlers/postHandler";
import { Manrope, Oswald } from "next/font/google";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";

const manrope = Manrope({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

const Join = () => {
	const [teamCode, setTeamCode] = useState("");

	const router = useRouter();

	const handleJoin = async () => {
		if (teamCode.trim() === "") {
			Toaster.error("Team code cannot be empty");
			return;
		}

		const toaster = Toaster.startLoad();

		const URL = `${DEV_BASE_URL}/api/team/join`;

		const res = await postHandler(URL, {
			teamCode: teamCode,
		});

		if (res.status === 1) {
			Toaster.stopLoad(toaster, "Team Joined", 1);
			router.push("/team");
		} else Toaster.stopLoad(toaster, res.data.message, 0);
	};
	return (
		<>
			<Header />
			<div className="flex flex-col gap-y-12">
				<div
					className={`ml-10 mr-10 mt-36 max-w-[20rem] rounded-[10px] bg-title py-4 pl-4 text-xl font-bold text-black sm:pl-16 lg:ml-20 xl:ml-36 ${manrope.className}`}
				>
					Hey, Participant
				</div>
				<div className="ml-10 mr-[40rem] w-[80%] rounded-[20px] bg-title lg:ml-20 xl:ml-36">
					<div className="flex flex-col items-center justify-between gap-y-4 border-b border-yellow py-4 text-center text-[20px] font-bold md:flex-row md:px-12 md:text-left lg:px-20">
						<p className={`${oswald.className} py-1`}>
							WELCOME TO HACKSTORY REGISTRATION
						</p>
						<a
							onClick={() => {
								router.push("/team/registration");
							}}
							className={`${manrope.className} max-w-[8rem] cursor-pointer rounded-[30px] border border-yellow px-6 py-1`}
						>
							CANCEL
						</a>
					</div>
					<form
						onSubmit={(el) => {
							el.preventDefault();
							handleJoin();
						}}
					>
						<div
							className={`ml-4 sm:ml-16 ${manrope.className} pt-[2rem] text-xl font-bold`}
						>
							Enter your team code
						</div>
						<input
							className={`ml-4 mt-4  flex w-3/5 rounded border-b-2 border-black bg-inherit px-3 py-3 text-2xl  text-gray-700 focus:bg-inherit focus:outline-none sm:ml-16 ${manrope.className}`}
							type="text"
							value={teamCode}
							onChange={(el) => setTeamCode(el.target.value)}
							autoComplete="new-password"
						/>
						<button className="my-8 ml-4 rounded-[30px] bg-yellow px-8 py-2 text-center focus:outline-none sm:ml-16">
							Register
						</button>
					</form>
				</div>
			</div>
			<div className="absolute ml-10 mt-10 flex-col rounded-[2rem] border-2 border-black bg-[#FFF6E8] px-5 py-2 font-bold text-black sm:px-10 sm:py-4 md:z-10 lg:left-[55%] lg:mt-[-5%] xl:left-[65%] xl:mt-[-5%] 2xl:left-[70%] 2xl:mt-[-5%]  ">
				<div className="flex flex-col text-left leading-[2rem]">
					TAGS
				</div>
				<div className=" flex flex-col">
					<div className="justify-around space-x-2 text-center leading-[4rem] md:space-x-4 ">
						<text className="rounded-xl bg-[#FFCCDE] p-2 ">
							Technology
						</text>
						<text className="rounded-xl bg-[#A7A9BE] p-2">
							Innovation
						</text>
						<text className="rounded-xl bg-[#D0D5FF] p-2">
							Programming
						</text>
					</div>
					<div className="justify-around space-x-2 pb-2 text-center md:space-x-4">
						<text className="rounded-xl bg-[#D0D5FF] p-2">
							Hackathon
						</text>
						<text className="rounded-xl bg-[#FFCCDE] p-2">
							Finance
						</text>
					</div>
				</div>
			</div>
		</>
	);
};

export default Join;
