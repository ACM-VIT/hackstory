import React from "react";

const TimelineComponent = () => {
  return (
    <>
      <div className="m-auto flex h-max w-1/2 flex-col items-start justify-center  text-white">
        <div
          className={`text-timelineheader h-12 text-center text-4xl font-extrabold`}
        >
          TIMELINE FOR HACKATHON
        </div>
        <div className={`mt-2 text-center text-2xl text-marquee  lg:text-left`}>
          SAVE YOUR DATES!
        </div>
      </div>
      <div
        id="timeline"
        className="mx-auto mt-20 grid w-full max-w-7xl grid-cols-9 px-2 pt-10"
      >
        <div className="col-span-4 h-full w-full ">
          <div className="w-0 sm:w-full"></div>
        </div>
        <div className="relative col-span-1 mt-3 flex h-full w-full justify-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute z-10 h-5 w-5 rotate-45 transform bg-white"></div>
          <div className="bg-pink z-5 absolute -mt-[2px] h-6 w-6 rotate-45 transform blur-sm"></div>
          <div className="invisible absolute mt-2 h-1 bg-white md:visible md:ml-20 md:w-24 lg:ml-28 lg:w-32 "></div>
        </div>
        <div className="col-span-4 h-full w-full ">
          <div className="h-full w-full md:pl-16 md:pr-16">
            <h1 className="text-bold py-2 text-left text-2xl font-medium text-white">
              Discover.JS
            </h1>
            <p className="text-left text-xs text-white sm:text-base">
              Take the first steps of your Javascript journey. We&apos;ll teach
              you all about the basics of the language.
            </p>
            <p className="pt-5 text-left text-xs font-medium text-white sm:text-base">
              8th February 2023
            </p>
            <div className="flex flex-col lg:flex-row">
              <p className="pt-2 text-left text-xs text-white sm:text-base">
                Venue: SJT 621,
              </p>
              <p className="pt-2 text-left text-xs text-white sm:text-base">
                11:30 a.m. - 1:30 p.m.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4 h-full w-full ">
          <div className="h-full w-full p-2 md:px-16">
            <h1 className="text-bold py-2 text-right text-2xl font-medium text-white">
              What&apos;s Next?
            </h1>
            <p className="text-right text-xs text-white sm:text-base">
              Introduction to Next.js, a modern framework used to build web
              applications.
            </p>
            <p className="pt-5 text-right text-xs text-white sm:text-base">
              11th February 2023
            </p>
            <div className="flex flex-col items-end justify-end lg:flex-row">
              <p className="pt-2 text-xs text-white sm:text-base">
                Venue: SJT 307,
              </p>
              <p className="pt-2 text-xs text-white sm:text-base">
                {" "}
                10:00 a.m. - 4:00 p.m.
              </p>
            </div>
          </div>
        </div>
        <div className="relative col-span-1 flex h-full w-full justify-center">
          <div className="invisible absolute mt-7 h-1 bg-white md:visible md:mr-20 md:w-24 lg:mr-28 lg:w-32"></div>
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute z-10 mt-5 h-5 w-5 rotate-45 transform bg-white"></div>
          <div className="bg-blue z-5 absolute mt-[18px] h-6 w-6 rotate-45 transform blur-sm"></div>
        </div>
        <div className="col-span-4 h-full w-full">
          <div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
        </div>

        <div className="col-span-4 w-full pt-20">
          <div className="w-0 sm:w-full"></div>
        </div>
        <div className="relative col-span-1 flex h-full w-full justify-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute z-10 mt-5 h-5 w-5 rotate-45 transform bg-white"></div>
          <div className="invisible absolute mt-7 h-1 bg-white md:visible md:ml-20 md:w-24 lg:ml-28 lg:w-32"></div>
          <div className="bg-purple z-5 absolute mt-[18px] h-6 w-6 rotate-45 transform blur-sm"></div>
        </div>
        <div className="col-span-4 h-full w-full pb-20">
          <div className="h-full w-full p-2 md:pl-16">
            <h1 className="text-bold py-2 text-left text-2xl font-medium text-white">
              What&apos;s Next? 2.0
            </h1>
            <p className="text-left text-xs text-white sm:text-base">
              The workshop series concludes with a hands-on guided project.
            </p>
            <p className="pt-5 text-left text-xs text-white sm:text-base">
              15th February 2023
            </p>
            <div className="flex flex-col lg:flex-row">
              <p className="pt-2 text-left text-xs text-white sm:text-base">
                Venue: SJT 621,
              </p>
              <p className="pt-2 text-left text-xs text-white sm:text-base">
                {" "}
                11:30 a.m. - 1:30 p.m.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineComponent;
