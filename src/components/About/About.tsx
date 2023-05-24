import { Oswald, Manrope } from 'next/font/google'
import React from 'react'

const oswald = Oswald({ subsets:['latin']})
const manrope = Manrope({ subsets:['latin']})

type Props = {}

const About = () => {
  return (
    <div className="h-screen ">
        <div className="w-full flex mt-20 flex-col lg:gap-32 md:gap-28 gap-20 justify-center items-center">
          <div className={`flex flex-col lg:leading-[3.75rem] md:leading-[3rem] leading-[2.5rem] lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-bold text-center text-white ${oswald.className}`}>
            <text>FUELED BY <span className ="text-[#FABF29]">INNOVATION</span>,</text>
            <text>EMPOWERED BY <span className="text-[#007656]">DISCOURSE</span>,</text>
            <text>HOOKED BY <span className="text-[#FFCCDE]">SKILLS</span>,</text>
            <text>STIRRED BY <span className="text-[#F54E26]">PASSION</span> AND</text>
            <text>BROUGHT TOGETHER BY A <span className="text-[#D0D5FF]">COMMON CAUSE</span></text>
          </div>
          <p className={`lg:text-lg md:text-[1.25rem] text-[1rem] lg:max-w-[57rem] md:max-w-[47rem] max-w-[18rem] md:text-center text-left md:leading-[1.5rem] leading-[1.25rem] text-white ${manrope.className}`}>Join us at HackStory ‘23, where innovation takes center stage. Get ready to apply your talents to solve real-world problems and provide innovative solutions. Computer Society Of India (CSI), Association of Computing Machinery (ACM), Debate Society and Bulls and Bears (BnB) have come together, bringing their own niche to present to you the hackathon of the year. With tracks ranging from FinTech to ML in social causes, open innovation and more, get ready to create and revolutionize the world we live in.</p>
        </div>
    </div>
  )
}

export default About
