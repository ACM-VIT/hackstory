import React from "react";

const Team = () => {
  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-around text-fontColor1 lg:flex-row">
        <div className="flex  h-full w-full flex-col items-center justify-center gap-y-3 max-lg:border-b-[1px] lg:w-1/2 lg:border-r-[1px]">
          <div className=" flex h-[6rem] items-center justify-start text-3xl lg:h-[3rem] lg:w-[60%] ">
            Create your own Team !
          </div>
          <div className=" w-[60%]">
            <input
              className="w-full rounded border-2 border-gray-200 bg-gray-200 px-3 py-3  text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="inline-password"
              type="password"
              placeholder="What should we call you ?"
            />
          </div>
          <button
            className="focus:shadow-outline w-[60%] rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            type="button"
          >
            Create !
          </button>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-3 max-lg:border-t-[1px] lg:w-1/2 ">
          <div className=" flex h-[6rem] items-center justify-start text-3xl lg:h-[3rem] lg:w-[60%] ">
            Join a team !
          </div>
          <div className=" w-[60%]">
            <input
              className="w-full rounded border-2 border-gray-200 bg-gray-200 px-3 py-3  text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
              id="inline-password"
              type="password"
              placeholder="Enter the team's code"
            />
          </div>
          <button
            className="focus:shadow-outline w-[60%] rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            type="button"
          >
            Join !
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;
