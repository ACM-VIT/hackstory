import postHandler from "@/handlers/postHandler";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";
import { Manrope } from "next/font/google";
import { Modal,Box,Button } from "@mui/material";

const manrope = Manrope({subsets:['latin']})

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
    <div className=" pt-40 px-8">
      <div className="flex flex-col items-center pb-20">
        <h1 className=" text-white text-5xl font-bold text-center pb-2"> <span className="pb-8 block"><span className="text-yellow">HACK YOUR WAY</span> THROUGH A WORLD,<br/></span>
          <span className="text-white">WHERE INNOVATION WRITES YOUR</span><span className="text-yellow"> NEXT CHAPTER</span></h1>
        </div>
        <div className='mx-20 px-80'>
          <div className='flex justify-center mt-8 border border-white rounded-3xl pl-20 pr-20 pt-10 pb-20 border-opacity-10 ' >
            <button 
              className={`mt-12 flex cursor-pointer flex-row rounded-[30px] px-8 pt-4 text-white text-[12px] font-bold md:text-[15px] lg:text-[20px] border border-yellow ${manrope.className}`}>
                JOIN A TEAM
            </button>
            <div className="w-20 "></div>
            <div className="h-30 w-1 bg-gray-400 mx-4 mt-10"></div>
            <div className="w-20"></div>
            <button 
              onClick={handleCreateTeamOpen}
              className={`mt-12 flex cursor-pointer flex-row rounded-[30px] bg-yellow px-8 py-4 text-[12px] font-bold md:text-[15px] lg:text-[20px] ${manrope.className}`}>
                CREATE A TEAM
            </button>
          </div>
        </div>
        <Modal
          open={createTeamOpen}
          onClose={handleCreateTeamClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200, display: 'flex' }}>
            <Button onClick={handleCreateTeamClose}>X</Button>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            
          </Box>
        </Modal>
    </div>
  );
};

export default Registration;
