import { DEV_BASE_URL } from "@/constants";
import getHandler from "@/handlers/getHandler";
import Toaster from "@/utils/toaster";
import { useRouter } from "next/router";
import React from "react";

interface Member {
  name: string;
}
interface Team {
  name: string;
  members: Member[];
  code: string;
}

interface Props {
  team: Team;
}

const ViewTeam = ({ team }: Props) => {
  const router = useRouter();

  const handleLeave = async () => {
    const toaster = Toaster.startLoad("Leaving the Team.");
    const URL = `${DEV_BASE_URL}/api/team/leave`;
    const res = await getHandler(URL);
    if (res.statusCode === 200) {
      Toaster.stopLoad(toaster, "Successfully left the Team", 1);
      router.push("/team/join");
    } else {
      Toaster.stopLoad(toaster, res.data.message, 0);
    }
  };

  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center text-fontColor1">
        <div className="flex h-full w-[90%] flex-col items-center justify-center lg:w-[50%]">
          <div className="flex h-[15%] items-center justify-around text-center text-5xl">
            {team.name}
          </div>
          <div className="flex h-[10%] w-full items-center justify-center border-b-2 text-center text-xl">
            Share this code to invite : {team.code}
          </div>
          <div className="flex h-[60%] w-full flex-col items-center justify-center">
            {team.members.map((member) => {
              return (
                <div
                  key={member.name}
                  className="flex h-[25%] w-full items-center justify-start"
                >
                  {member.name}
                </div>
              );
            })}
          </div>
          <div className="flex h-[15%] w-[50%] items-center justify-around">
            <button
              className="focus:shadow-outline w-full rounded bg-purple-500 px-4 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
              onClick={handleLeave}
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
