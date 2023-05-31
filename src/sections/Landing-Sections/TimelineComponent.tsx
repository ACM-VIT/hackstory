import { Oswald, Manrope } from "next/font/google";
import React from "react";

const oswald = Oswald({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

const TimelineComponent = () => {
  return (
    <>
      <div className="m-auto flex h-max w-1/2 flex-col justify-center  text-white">
        <div
          className={`text-timelineheader h-12 text-center text-5xl font-extrabold text-[#FFF6E8] ${oswald.className}`}
        >
          TIMELINE FOR HACKATHON
        </div>
        <div className={`mt-4 text-center text-3xl font-bold text-[#FFCCDE] ${oswald.className}`}>
          SAVE YOUR DATES!
        </div>
      </div>
      <div
        id="timeline"
        className={`mx-auto mt-20 grid w-full max-w-7xl grid-cols-9 px-2 pt-10 ${manrope.className}`}
      >
        <div className="col-span-4 h-full w-full ">
          <div className="w-0 sm:w-full"></div>
        </div>
        <div className="relative col-span-1 mt-3 flex h-full w-full justify-center">
          <div className="h-full w-1 bg-[#FFCCDE]"></div>

          <div className="invisible absolute mt-[54px] h-1 bg-[#FFCCDE] md:visible md:ml-20 md:w-24 lg:ml-36 lg:w-16 "></div>
        </div>
        <div className="col-span-4 h-full w-full ">
          <div className="h-full w-full md:pl-16 md:pr-16">
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
              Workshop Name
            </h1>
            <p className="text-left text-xl text-[#E8E8EE] sm:text-base flex items-center">
              June 5th 2023 <span className="text-4xl mx-4">|</span> 4:00 pm - 7:00 pm
            </p>
            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="col-span-4 h-full w-full ">
          <div className="h-full w-full p-2 md:px-16">
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
              Workshop Name
            </h1>
            <p className="text-left text-xl text-[#E8E8EE] sm:text-base flex justify-start">
              June 5th 2023 <span className="4xl mx-4">|</span> 4:00 pm - 7:00 pm
            </p>
            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="relative col-span-1 flex h-full w-full justify-center">
          <div className="invisible absolute mt-16 h-1 bg-[#FFCCDE] md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16"></div>
          <div className="h-full w-1 bg-[#FFCCDE]"></div>
        </div>
        <div className="col-span-4 h-full w-full">
          <div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
        </div>

        <div className="col-span-4 w-full pt-20">
          <div className="w-0 sm:w-full"></div>
        </div>
        <div className="relative col-span-1 flex h-full w-full justify-center">
          <div className="h-full w-1 bg-[#FFCCDE]"></div>
          <div className="invisible absolute mt-16 h-1 bg-[#FFCCDE] md:visible md:ml-20 md:w-24 lg:ml-36 lg:w-16"></div>
        </div>
        <div className="col-span-4 h-full w-full pb-20">
          <div className="h-full w-full p-2 md:pl-16">
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#A7A9BE]">
              Workshop Name
            </h1>
            <p className="text-left text-xl text-[#E8E8EE] sm:text-base">
              June 5th 2023 | 4:00 pm - 7:00 pm
            </p>
            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineComponent;
