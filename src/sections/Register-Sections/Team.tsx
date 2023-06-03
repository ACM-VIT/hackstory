import postHandler from "@/handlers/postHandler";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";
import { Manrope, Oswald } from "next/font/google";
import Image from "next/image";
import Header from "@/components/Common/Header";
import { motion, Variants } from "framer-motion";

const manrope = Manrope({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

const Registration = () => {
	const [teamName, setTeamName] = useState("");
	const [teamCode, setTeamCode] = useState("");

	const [createTeamOpen, setCreateTeamOpen] = useState(false);
	const handleCreateTeamOpen = () => {
		setCreateTeamOpen(true);
	};
	const handleCreateTeamClose = () => {
		setCreateTeamOpen(false);
	};
	const [joinTeamOpen, setJoinTeamOpen] = useState(false);
	const handleJoinTeamOpen = () => {
		setCreateTeamOpen(true);
	};
	const handleJoinTeamClose = () => {
		setCreateTeamOpen(false);
	};

	const handleCreate = async () => {
		if (teamName.trim() === "") {
			Toaster.error("Team name cannot be empty");
			return;
		}

		const toaster = Toaster.startLoad();

		const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/team/create`;

		const res = await postHandler(URL, {
			name: teamName,
		});

		if (res.status === 1) {
			Toaster.stopLoad(toaster, "Team Joined", 1);
			router.push("/team");
		} else Toaster.stopLoad(toaster, res.data.message, 0);
	};

	const handleJoin = async () => {
		if (teamCode.trim() === "") {
			Toaster.error("Team code cannot be empty");
			return;
		}

		const toaster = Toaster.startLoad();

		const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/team/join`;

		const res = await postHandler(URL, {
			teamCode: teamCode,
		});

		if (res.status === 1) {
			Toaster.stopLoad(toaster, "Team Joined", 1);
			router.push("/team");
		} else Toaster.stopLoad(toaster, res.data.message, 0);
	};

	const router = useRouter();

	const rocketVariants: Variants = {
		offscreen: {
			y: 500,
			x: -500,
		},
		onscreen: {
			y: 0,
			x: 0,
			transition: {
				type: "spring",
				duration: 5,
			},
		},
	};

	return (
		<>
			<motion.div
				className=""
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
			>
				<div className="h-contain flex scale-75 flex-col gap-y-12 lg:h-[83vh] z-10">
					<div className="flex flex-col">
						<h1
							className={`px-12 pb-2 text-left text-3xl font-bold text-white sm:text-center lg:text-5xl ${oswald.className}`}
						>
							<span className="block pb-8">
								<span className="text-yellow">
									HACK YOUR WAY{" "}
								</span>
								THROUGH A WORLD,
							</span>
							<span className="text-white">
								WHERE INNOVATION WRITES YOUR
							</span>
							<span className="text-yellow"> NEXT CHAPTER</span>
						</h1>
					</div>
					<div className="xl:mx-[25%] md:mx-[15%] mx-[10%]">
						<div className="flex flex-col items-center justify-center gap-x-16 gap-y-8 rounded-3xl border border-white border-opacity-10 py-20 md:flex-row">
							<button
								onClick={() => {
									router.push("/team/registration/join")
								}}
								className={`flex cursor-pointer flex-row rounded-[30px] border border-yellow px-8 py-4 text-[15px] font-bold text-white lg:text-[20px] ${manrope.className}`}
							>
								JOIN A TEAM
							</button>
							<div className="hidden h-8 w-1 bg-gray-400 sm:h-12 md:block md:h-16"></div>
							<button
								onClick={()=>{
									router.push("/team/registration/create")
								}}
								className={`align-center flex cursor-pointer rounded-[30px] bg-yellow px-8 py-4 text-[15px] font-bold sm:text-[15px] lg:text-[20px] ${manrope.className}`}
							>
								<p>CREATE A TEAM</p>
							</button>
						</div>
					</div>
				</div>
				<motion.div
					variants={rocketVariants}
					className="absolute bottom-0 left-0 hidden sm:block"
				>
					<Image
						className="w-[340px]"
						src="/rocket-svg.svg"
						width={10000}
						height={10000}
						alt="rocket-svg"
					/>
				</motion.div>
			</motion.div>
		</>
	);
};

export default Registration;
