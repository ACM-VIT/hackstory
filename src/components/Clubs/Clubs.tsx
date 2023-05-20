import React from "react";
import { ClubDrop } from "@/components/Clubs/ClubDrop";

const Clubs = () => {
	return (
		<div className="min-h-[60vh] w-80% flex justify-center mt-[25vh]">
			<div className="container  text-center flex flex-initial gap-[5vw]">
				<div className="self-start justify-self-center basis-1/2">
					<h1 className="text-3xl pl-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ab, perferendis?
					</h1>
				</div>
				<div className="basis-1/2 space-y-6">
					<ClubDrop />
					<ClubDrop />
					<ClubDrop />
					<ClubDrop />
				</div>
			</div>
		</div>
	);
};

export default Clubs;
