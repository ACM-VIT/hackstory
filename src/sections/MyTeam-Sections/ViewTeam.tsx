import { DEV_BASE_URL } from "@/constants";
import getHandler from "@/handlers/getHandler";
import Toaster from "@/utils/toaster";
import { Manrope, Oswald } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const oswald = Oswald({subsets:['latin']})
const manrope = Manrope({subsets:['latin']})

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
    const URL = `${process.env.NEXTAUTH_URL}/api/team/leave`;
    const res = await getHandler(URL);
    if (res.statusCode === 200) {
      Toaster.stopLoad(toaster, "Successfully left the Team", 1);
      router.push("/team/registration");
    } else {
      Toaster.stopLoad(toaster, res.data.message, 0);
    }
  };
  

  return (
    <>
      <div className="flex flex-col h-contain mt-[10%] gap-y-12">
        <div className="flex flex-col">
          <h1 className={`text-white lg:text-5xl text-3xl font-bold sm:text-center text-left pb-2 px-12 ${oswald.className}`}>
            <span className="pb-8 block">
              <span className="text-yellow">HACK YOUR WAY{" "}</span>
              THROUGH A WORLD,
            </span>
            <span className="text-white">WHERE INNOVATION WRITES YOUR</span>
            <span className="text-yellow"> NEXT CHAPTER</span>
          </h1>
        </div>
      </div>
      <div className="bg-white mt-24 rounded-[5px] mx-[10%] py-8 flex md:flex-row flex-col justify-around">
        <div className={`px-10 py-4 ${oswald.className} text-3xl flex flex-col `}>
          <div className="flex gap-x-2">
            <p>Team -</p> 
            <span className="text-logo">{team.name}</span>
          </div>
          <div className={`py-4 ${oswald.className} sm:text-2xl text-xl flex-col gap-4`}>
            <p>Members :</p>
            {team.members.map((member) => {
                return (
                  <div
                    key={member.name}
                    className="h-[25%] w-full items-center justify-start"
                  >
                    {member.name}
                  </div>
                );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:py-6 gap-y-2 px-10 md:px-0">
          <div className={`pr-10  py-4 ${oswald.className} sm:text-2xl text-xl flex sm:flex-row flex-col gap-1`}>
            <p>{"Team Code :"}</p>
            <p>{team.code}</p>
          </div>
          <div>
            <a 
              className={`bg-yellow px-4 py-2 my-2 sm:text-xl text-lg rounded-[15px] cursor-pointer ${manrope.className}`}
              onClick={handleLeave}
            >
              {"Leave Team :("}
            </a>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default ViewTeam;
