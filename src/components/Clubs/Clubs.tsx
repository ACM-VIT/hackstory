import React from "react";
import { ClubDrop } from "@/components/Clubs/ClubDrop";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const Clubs = () => {
	return (
		<div className="min-h-[60vh] w-80% flex justify-center mt-[15vh] mb-[15vh]">
			<div className="container text-center flex flex-initial gap-[5vw]">
				<div
					className={`${oswald.className} self-start justify-self-center basis-1/2`}
				>
					<div className="flex justify-center pl-4 text-[#FFF6E8] text-center">
						<h1 className="text-4xl max-w-[25vw] text-left leading-[3.5rem] font-semibold">
							FOUR ELEMENTS? <br /> FOUR DIRECTIONS? <br /> AND
							THE FOUR OF US.
						</h1>
					</div>
				</div>
				<div className="basis-1/2 space-y-6">
					<ClubDrop title="COMPUTER SOCIETY OF INDIA" />
					<ClubDrop title="DEBATE SOCIETY" />
					<ClubDrop title="BULLS AND BEARS" />
					<ClubDrop title="ASSOCIATION OF COMPUTING MACHINERY" />
				</div>
			</div>
		</div>
	);
};

export default Clubs;
