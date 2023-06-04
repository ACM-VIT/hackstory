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
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/team/leave`;
    const res = await getHandler(URL);
    if (res.statusCode === 200) {
      Toaster.stopLoad(toaster, "Successfully left the Team", 1);
      router.push("/team/registration");
    } else {
      Toaster.stopLoad(toaster, res.data.message, 0);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(team.code);
    Toaster.success("Code copied to clipboard!");
  };
  

  return (
    <>
      <div className="flex flex-col h-contain mt-[10%]  gap-y-12">
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
      <div className="bg-white mt-24 rounded-[5px] sm:mx-[10%] mx-[4%] py-8 flex md:flex-row flex-col justify-around">
        <div className={`px-10 py-4 ${oswald.className} text-3xl flex flex-col `}>
          <div className="flex gap-x-2">
            <p className="whitespace-nowrap">Team -</p> 
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
            <p className="whitespace-nowrap">{"Team Code :"}</p>
            <p>{team.code}</p>
            <button className={`sm:ml-8  max-w-[2.5rem] py-1 flex justify-center rounded-[30px]`} onClick={copyToClipboard}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M3 16V4C3 2.89543 3.89543 2 5 2H15M9 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H9C7.89543 6 7 6.89543 7 8V20C7 21.1046 7.89543 22 9 22Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </svg>
            </button>

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
