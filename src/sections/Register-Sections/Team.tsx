import postHandler from "@/handlers/postHandler";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");

  const router = useRouter();

  const handleCreate = async () => {
    if (teamName.trim() === "") {
      Toaster.error("Team name cannot be empty");
      return;
    }

    const toaster = Toaster.startLoad();

    const URL = `${DEV_BASE_URL}/api/team/create`;

    const res = await postHandler(URL, {
      name: teamName,
    });

    if (res.status === 1) {
      Toaster.stopLoad(toaster, "Team Joined", 1);
      router.push("/team");
    } else Toaster.stopLoad(toaster, res.data.message, 0);
  };

  const handleJoin = async () => {
    const toaster = Toaster.startLoad();
    const URL = `${DEV_BASE_URL}/api/team/join`;

    const res = await postHandler(URL, {
      teamCode: teamCode,
    });

    if (res.status === 1) {
      Toaster.stopLoad(toaster, "Team Joined", 1);
      router.push("/team");
    } else Toaster.stopLoad(toaster, res.data.message, 0);
  };

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
              type="text"
              placeholder="What will be your team called?"
              value={teamName}
              onChange={(el) => setTeamName(el.target.value)}
              autoComplete="new-password"
            />
          </div>
          <button
            className="focus:shadow-outline w-[60%] rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            onClick={handleCreate}
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
              className="w-full rounded border-2 border-gray-200 bg-gray-200 px-3 py-3 uppercase  text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
              type="text"
              placeholder="Enter the team code"
              value={teamCode}
              onChange={(el) => setTeamCode(el.target.value)}
              autoComplete="new-password"
            />
          </div>
          <button
            className="focus:shadow-outline w-[60%] rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            onClick={handleJoin}
          >
            Join !
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;
