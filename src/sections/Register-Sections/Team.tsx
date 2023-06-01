import postHandler from "@/handlers/postHandler";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";
import { Manrope,Oswald } from "next/font/google";
import Header from "@/components/Common/Header";

const manrope = Manrope({subsets:['latin']})
const oswald = Oswald({subsets:['latin']})

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Registration = () => {
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");

  const [createTeamOpen, setCreateTeamOpen] = useState(false);
  const handleCreateTeamOpen = () => {
    setCreateTeamOpen(true);
  };
  const handleCreateTeamClose = () => {
    setCreateTeamOpen(false);
  };
  const [joinTeamOpen, setJoinTeamOpen] = useState(false);
  const handleJoinTeamOpen = () => {
    setCreateTeamOpen(true);
  };
  const handleJoinTeamClose = () => {
    setCreateTeamOpen(false);
  };

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
    if (teamCode.trim() === "") {
      Toaster.error("Team code cannot be empty");
      return;
    }

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
        <div className="mx-[25%]">
          <div className="flex md:flex-row flex-col items-center justify-center border border-white rounded-3xl gap-x-16 gap-y-8 py-20 border-opacity-10">
            <button
              onClick={() => {
                router.push("/team/registration/join");
              }}
              className={`flex cursor-pointer flex-row px-8 py-4 rounded-[30px] text-white text-[15px] lg:text-[20px] border border-yellow font-bold ${manrope.className}`}>
              JOIN A TEAM
            </button>
            <div className="hidden md:block h-8 sm:h-12 md:h-16 w-1 bg-gray-400"></div>
            <button
              onClick={() => {
                router.push("/team/registration/create");
              }}
              className={`flex align-center cursor-pointer px-8 py-4 rounded-[30px] bg-yellow text-[12px] sm:text-[15px] lg:text-[20px] font-bold ${manrope.className}`}>
              <p>CREATE A TEAM</p>
            </button>
          </div>
        </div>
      </div>
    </>
    

  );
};

export default Registration;
