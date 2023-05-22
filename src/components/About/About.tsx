import React from 'react'
type Props = {}

const About = () => {
  return (
    <div className="h-screen ">
        <div className="w-full flex flex-col gap-32 h-5/6 justify-center items-center">
          <h1 className="max-w-xl leading-[3.75rem] text-white font-bold text-[2.5rem] text-center tracking-wide">FUELED BY <span className ="text-[#FABF29]">INNOVATION</span>,<br></br>
            EMPOWERED BY <span className="text-[#007656]">DISCOURSE</span>,<br></br>HOOKED BY <span className="text-[#FFCCDE]">SKILLS</span>,<br></br>STIRRED BY <span className="text-[#F54E26]">PASSION</span> AND<br></br>BROUGHT TOGETHER BY A <span className="text-[#D0D5FF]">COMMON CAUSE</span>
          </h1>
          <p className="max-w-[57rem] leading-[1.25rem] text-md text-lg text-white text-center">Join us at HackStory ‘23, where innovation takes center stage. Get ready to apply your talents to solve<br></br>real-world problems and provide innovative solutions. Computer Society Of India (CSI), Association of<br></br>Computing Machinery (ACM), Debate Society and Bulls and Bears (BnB) have come together, bringing<br></br>their own niche to present to you the hackathon of the year. With tracks ranging from FinTech to ML in<br></br>social causes, open innovation and more, get ready to create and revolutionize the world we live in.</p>
        </div>
    </div>
  )
}

export default About
