import Header from '@/components/Common/Header'
import postHandler from "@/handlers/postHandler";
import { Manrope,Oswald } from 'next/font/google'
import { useRouter } from 'next/router'
import { React,useState } from 'react'
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";

const manrope = Manrope({subsets: ['latin']})
const oswald = Oswald({subsets:['latin']})


const create = () => {
    const [teamName, setTeamName] = useState("");

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
    return (
        <>
            <Header />
            <div className=' z-1 flex flex-col gap-y-12'>
                <div className={`bg-title text-black mr-10 max-w-[20rem] xl:ml-36 lg:ml-20 ml-10 mt-24 sm:pl-16 pl-4 py-4 rounded-[10px] font-bold text-xl ${manrope.className}`}>
                    Hey, Participant
                </div>
                <div className='bg-title z-1 xl:ml-36 lg:ml-20 ml-10 mr-[40rem] rounded-[20px] w-[80%]'>
                    <div className="border-b border-yellow py-4 lg:px-20 md:px-12 text-center md:text-left text-[20px] gap-y-4 font-bold flex md:flex-row flex-col justify-between items-center">
                        <p className={`${oswald.className} py-1`}>WELCOME TO HACKSTORY REGISTRATION</p>
                        <a onClick = {()=> {
                            router.push("/team/registration")
                        }}
                        className={`${manrope.className} border-yellow border px-6 py-1 rounded-[30px] cursor-pointer max-w-[8rem]`}>CANCEL</a>
                    </div>
                    <form
                    onSubmit={(el) => {
                        el.preventDefault();
                        handleCreate();
                      }}
                    >
                        <div className={`sm:ml-16 ml-4 ${manrope.className} font-bold pt-[2rem] text-xl`}>
                            Enter your team name
                        </div>
                        <input
                            className={`sm:ml-16 ml-4  flex mt-4 w-3/5 rounded border-b-2 border-black bg-inherit px-3 py-3  text-gray-700 text-2xl focus:bg-inherit focus:outline-none ${manrope.className}`}
                            type="text"
                            value={teamName}
                            onChange={(el) => setTeamName(el.target.value)}
                            autoComplete="new-password"
                        />
                        <button className="my-8 focus:outline-none sm:ml-16 ml-4 bg-yellow text-center py-2 px-8 rounded-[30px]">
                            Register
                        </button>
                    </form>
                </div>
            </div>
            <div className='z-10 font-bold flex-col py-4 px-14 border-solid border-black border-2 rounded-[2rem] text-black bg-[#FFF6E8] absolute top-[73%] left-[65%] '>
              <div className="text-left flex flex-col leading-[2rem]">
                TAGS
              </div>
              <div className=' flex flex-col'>
                <div className='justify-around space-x-4 leading-[4rem] '>
                <text className='bg-[#FFCCDE] rounded-xl p-2 '>Technology</text>
                <text className='bg-[#A7A9BE] rounded-xl p-2'>Innovation</text>
                <text className='bg-[#D0D5FF] rounded-xl p-2'>Programming</text>
                </div>
                <div className='space-x-4 text-center pb-2'>
                <text className='bg-[#D0D5FF] rounded-xl p-2'>Hackathon</text>
                <text className='bg-[#FFCCDE] rounded-xl p-2'>Finance</text>
                </div>
              </div>
            </div>
        </>
    
  )
}

export default create