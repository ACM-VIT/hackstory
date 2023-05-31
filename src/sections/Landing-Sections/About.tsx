import React from "react";

const About = () => {
  return (
    <div className=" mt-9 flex w-full flex-col items-center justify-center gap-20  md:gap-28 lg:gap-20">
      <div
        className={`flex flex-col text-center text-[1.5rem] font-bold leading-[2.5rem] text-white md:text-[2rem] md:leading-[3rem] lg:text-[2.5rem] lg:leading-[3.75rem]`}
      >
        <text>
          FUELED BY <span className="text-[#FABF29]">INNOVATION</span>,
        </text>
        <text>
          EMPOWERED BY <span className="text-[#007656]">DISCOURSE</span>,
        </text>
        <text>
          HOOKED BY <span className="text-[#FFCCDE]">SKILLS</span>,
        </text>
        <text>
          STIRRED BY <span className="text-[#F54E26]">PASSION</span> AND
        </text>
        <text>
          BROUGHT TOGETHER BY A{" "}
          <span className="text-[#D0D5FF]">COMMON CAUSE</span>
        </text>
      </div>
      <p
        className={`max-w-[18rem] text-left text-[1rem] leading-[1.25rem] text-white md:max-w-[47rem] md:text-center md:text-[1.25rem] md:leading-[1.5rem] lg:max-w-[57rem] lg:text-lg`}
      >
        Join us at HackStory ‘23, where innovation takes center stage. Get ready
        to apply your talents to solve real-world problems and provide
        innovative solutions. Computer Society Of India (CSI), Association of
        Computing Machinery (ACM), Debate Society and Bulls and Bears (BnB) have
        come together, bringing their own niche to present to you the hackathon
        of the year. With tracks ranging from FinTech to ML in social causes,
        open innovation and more, get ready to create and revolutionize the
        world we live in.
      </p>
    </div>
  );
};

export default About;
