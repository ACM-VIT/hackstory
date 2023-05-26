import React from "react";

const ViewTeam = () => {
  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center text-fontColor1">
        <div className="flex h-full w-[90%] flex-col items-center justify-center lg:w-[50%]">
          <div className="flex h-[15%] items-center justify-around text-center text-5xl">
            TEAMNAME
          </div>
          <div className="flex h-[10%] w-full items-center justify-center border-b-2 text-center text-xl">
            Share this code to invite : AIOSDJASIODJ
          </div>
          <div className="flex h-[60%] w-full flex-col items-center justify-center">
            <div className="flex h-[25%] w-full items-center justify-start">
              Shreyas
            </div>
            <div className="flex h-[25%] w-full items-center justify-start">
              Shreyas
            </div>
            <div className="flex h-[25%] w-full items-center justify-start">
              Shreyas
            </div>
            <div className="flex h-[25%] w-full items-center justify-start">
              Invite a member !
            </div>
          </div>
          <div className="flex h-[15%] w-[50%] items-center justify-around">
            <button
              className="focus:shadow-outline w-full rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
              type="button"
            >
              Leave Team :{`(`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTeam;
