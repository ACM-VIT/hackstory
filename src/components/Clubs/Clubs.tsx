import React from "react";
import { useState, useEffect } from "react";
import { ClubDrop } from "@/components/Clubs/ClubDrop";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

const Clubs = () => {
	const [key1, setKey1] = useState(false);
	const [key2, setKey2] = useState(false);
	const [key3, setKey3] = useState(false);
	const [key4, setKey4] = useState(false);
	// useEffect(() => {}, [key1, key2, key3, key4]);

	return (
		<div className="min-h-[60vh] w-80% flex justify-center mt-[15vh] mb-[15vh]">
			<div className="container text-center flex flex-initial gap-[5vw]">
				<div
					className={`${oswald.className} self-start justify-self-center basis-1/2`}
				>
					<div className="flex justify-center pl-4 text-[#FFF6E8] text-center">
						<h1 className="text-4xl max-w-[25vw] text-left leading-[3.5rem] font-semibold">
							<span
								className={"" + (key1 ? "text-[#FFCCDE]" : "")}
							>
								FOUR{" "}
								<span
									className={
										"" + (key4 ? "text-[#F54E26]" : "")
									}
								>
									ELEMENTS?
								</span>
							</span>
							<br />{" "}
							<span
								className={"" + (key2 ? "text-[#007656]" : "")}
							>
								FOUR{" "}
								<span
									className={
										"" + (key4 ? "text-[#F54E26]" : "")
									}
								>
									{" "}
									DIRECTIONS?
								</span>
							</span>
							<br /> AND THE{" "}
							<span
								className={"" + (key3 ? "text-[#FABF29]" : "")}
							>
								FOUR OF US.
							</span>
						</h1>
					</div>
				</div>
				<div className="basis-1/2 space-y-6">
					<div onClick={() => setKey1(!key1)}>
						<ClubDrop title="COMPUTER SOCIETY OF INDIA" num={1} />
					</div>
					<div onClick={() => setKey2(!key2)}>
						<ClubDrop title="DEBATE SOCIETY" num={2} />
					</div>
					<div onClick={() => setKey3(!key3)}>
						<ClubDrop title="BULLS AND BEARS" num={3} />
					</div>
					<div onClick={() => setKey4(!key4)}>
						<ClubDrop
							title="ASSOCIATION OF COMPUTING MACHINERY"
							num={4}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clubs;
