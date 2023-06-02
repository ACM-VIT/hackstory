import React from "react";
import { Manrope,Oswald } from "next/font/google";

const manrope = Manrope({subsets:['latin']})
const oswald = Oswald({subsets:['latin']})

const RSVPTag = () => {
  return (
    <>
		<div className="flex flex-col gap-y-12">
			<div
				className={`ml-10 mr-10 mt-36 max-w-[20rem] rounded-[10px] bg-title py-4 pl-4 text-xl font-bold text-black sm:pl-16 lg:ml-20 xl:ml-36 ${manrope.className}`}
			>
				Hey! Participant,
			</div>
			<div className="ml-10 mr-[40rem] w-[80%] rounded-[20px] bg-title lg:ml-20 xl:ml-36">
				<div className="flex flex-col items-center justify-between gap-y-4 border-b border-yellow py-4 text-center text-[22px] font-bold md:flex-row md:px-12 md:text-left lg:px-20">
					<p className={`${oswald.className} py-1`}>
						RSVP FOR THE EVENT
					</p>
					<a
						onClick={() => {
							
						}}
						className={`${manrope.className} max-w-[8rem] cursor-pointer rounded-[30px] border border-yellow px-6 py-1`}
					>
						CANCEL
					</a>
				</div>
				<form
					onSubmit={(el) => {
						
					}}
				>
					<div
						className={`ml-4 sm:ml-16 ${manrope.className} pt-[2rem] text-xl font-bold flex justify-center`}
					>
					  {"Don't leave us hanging."}<br/>
              			Let us know beforehand.
					</div>
            		<div className="flex justify-center"> 
							<button className="my-8 ml-4 rounded-[30px] px-8 py-2 text-center focus:outline-none sm:ml-16 focus:shadow-outline w-[1/3] rounded bg-green-800 px-20 py-2 font-bold text-white shadow hover:bg-green-600 focus:outline-none">
								Hold my seat
							</button>
            				<button className="my-8 ml-4 rounded-[30px] bg-red-500 px-8 py-2 text-center focus:outline-none sm:ml-16 focus:shadow-outline w-[1/3] rounded px-20 py-2 font-bold text-white shadow hover:bg-red-400 focus:outline-none">
							  {"I'm out"}
							</button>
            		</div>
				</form>
			</div>
        </div>
    </>
  );
};

export default RSVPTag;
