import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DEV_BASE_URL } from "@/constants";
import getHandler from "@/handlers/getHandler";
import { useRouter } from "next/router";
import { Alfa_Slab_One, Manrope } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { lookup } from "dns";

const manrope = Manrope({ subsets: ["latin"] });
const alfaSlabOne = Alfa_Slab_One({
	subsets: ["latin"],
	weight: "400",
});

const HeroContent = () => {
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

	const handleRSVP = () => {
		if (isPartOfTeam) router.push("/team/rsvp");
	}

	return (
		<div className="flex flex-col items-center justify-center gap-y-6 px-16  pt-36 max-md:pt-16">
			<div className="flex flex-col gap-y-4">
				<div
					className={`text-timelineheading text-md relative z-10 font-bold md:text-xl lg:text-2xl ${manrope.className} text-tracks max-lg:text-center`}
				>
					JUNE 5TH-7TH 2023
				</div>

				<div
					className={`relative z-10 text-[40px] font-bold md:text-[86px] lg:text-[90px] ${alfaSlabOne.className} z-9 text-title max-lg:text-center`}
				>
					HACK STORY
				</div>
				<motion.div
					initial={{ opacity: 0.1, scale: 0.75 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 3,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="absolute left-[15vw] max-lg:mt-[5vh]"
				>
					<Image
						className="w-[150px] max-lg:w-[75px]"
						src="/idea-icon.svg"
						width={10000}
						height={10000}
						alt="idea-icon"
					/>
				</motion.div>
			</div>
			<div
				className={`text-timelineheading text-center text-sm font-semibold md:text-lg lg:text-xl ${manrope.className} text-[#E8E8EE]`}
			>
				Hack your way through the world, where innovation writes the
				next&nbsp;
				<br className="hidden sm:block" />
				chapter!
			</div>

			{session ? (
				isPartOfTeam ? (
					<div className="mt-12 flex sm:flex-row flex-col gap-x-8 gap-y-4">
						<div
							className={`flex cursor-pointer flex-row rounded-[30px] bg-yellow px-8 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px] ${manrope.className}`}
							onClick={handleClick}
						>
							VIEW TEAM
						</div>
						<div
							className={`flex cursor-pointer flex-row rounded-[30px] bg-[#FFCCDE] hidden px-12 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px] ${manrope.className}`}
							onClick={handleRSVP}
						>
							RSVP
						</div>
					</div>
					
				) : (
					<div
						className={`mt-12 flex cursor-pointer flex-row rounded-[30px] bg-yellow px-8 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px] ${manrope.className}`}
						onClick={handleClick}
					>
						JOIN TEAM
					</div>
				)
			) : (
				<div
					className={`mt-12 flex cursor-pointer flex-row rounded-[30px] bg-yellow px-8 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px] ${manrope.className}`}
					onClick={() => signIn()}
				>
					REGISTER NOW
				</div>
			)}
		</div>
	);
};

export default HeroContent;
