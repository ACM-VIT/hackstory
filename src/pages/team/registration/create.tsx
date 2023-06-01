import { Manrope,Oswald } from 'next/font/google'
import React from 'react'
const manrope = Manrope({subsets: ['latin']})
const oswald = Oswald({subsets:['latin']})

const create = () => {
  return (
    <div className='flex flex-col gap-y-12'>
        <div className={`bg-title text-black w-1/5 ml-36 mt-52 pl-16 py-4 rounded-[10px] font-bold text-xl ${manrope.className}`}>
            Hey, Participant
        </div>
        <div className='bg-title ml-36 mr-[40rem] rounded-[20px] h-[20rem]'>
            <div className="border-b border-yellow py-4 px-20 text-[20px] font-bold flex justify-between">
                <p className={`${oswald.className} py-1`}>WELCOME TO HACKSTORY REGISTRATION</p>
                <a className={`${manrope.className} border-yellow border px-8 py-1 rounded-[30px]`}>CANCEL</a>
            </div>
            <div className={`ml-16 ${manrope.className} font-bold pt-[2rem] text-xl`}>
                Enter your team name
            </div>
        </div>
    </div>
  )
}

export default create