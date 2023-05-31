import React from "react";
import { useState, useEffect } from "react";
import ClubDrop from "./ClubDrop";

const Clubs = () => {
  const [key1, setKey1] = useState(false);
  const [key2, setKey2] = useState(false);
  const [key3, setKey3] = useState(false);
  const [key4, setKey4] = useState(false);
  // useEffect(() => {}, [key1, key2, key3, key4]);

   const handleToggleKey1 = () => {
    setKey1(!key1);
    setKey2(false);
    setKey3(false);
    setKey4(false);
  };

  const handleToggleKey2 = () => {
    setKey1(false);
    setKey2(!key2);
    setKey3(false);
    setKey4(false);
  };

  const handleToggleKey3 = () => {
    setKey1(false);
    setKey2(false);
    setKey3(!key3);
    setKey4(false);
  };

  const handleToggleKey4 = () => {
    setKey1(false);
    setKey2(false);
    setKey3(false);
    setKey4(!key4);
  };

  return (
    <div className=" w-80% mb-[25vh] mt-[25vh] flex justify-center">
      <div className="container flex gap-[5vw] text-center ">
        <div className={`basis-1/2 self-start justify-self-center`}>
          <div className="flex justify-center pl-4 text-center text-[#FFF6E8]">
            <h1 className="max-w-[25vw] text-left text-4xl font-semibold leading-[3.5rem]">
              <span className={"" + (key1 ? "text-[#FFCCDE]" : "")}>
                FOUR{" "}
                <span className={"" + (key4 ? "text-[#F54E26]" : "")}>
                  ELEMENTS?
                </span>
              </span>
              <br />{" "}
              <span className={"" + (key2 ? "text-[#007656]" : "")}>
                FOUR{" "}
                <span className={"" + (key4 ? "text-[#F54E26]" : "")}>
                  {" "}
                  DIRECTIONS?
                </span>
              </span>
              <br /> AND THE{" "}
              <span className={"" + (key3 ? "text-[#FABF29]" : "")}>
                FOUR OF US.
              </span>
            </h1>
          </div>
        </div>
        <div className="basis-1/2 space-y-6">
          <div onClick={handleToggleKey1}>
            <ClubDrop
              title="COMPUTER SOCIETY OF INDIA"
              num={1}
              text="Computer Society of India (CSI) is a non-profit, student-led organization which aims to foster a culture of innovation and creation. It is a close-knit community which has some of the best designers, developers, and tech enthusiasts who work together to organize a variety of events, workshops, hackathons, and competitions to push technology forward. When we build, it matters."
            />
          </div>
          <div onClick={handleToggleKey2}>
            <ClubDrop
              title="DEBATE SOCIETY"
              num={2}
              text="The Debate Society, VIT is an organisation involved in parliamentary debating at the national and international level. We aim to promote a culture of social awareness, open minded thinking, and curiosity within the student community. VIT Debate Society holds debate tournaments which have both national and international participation."
            />
          </div>
          <div onClick={handleToggleKey3}>
            <ClubDrop
              title="BULLS AND BEARS"
              num={3}
              text="Bulls and Bears VIT is the finance club of VIT with the sole aim of enhancing the financial knowledge of its members and, furthermore, the students in all spheres of finance, ranging from personal finances to stock trading. We aim to advocate financial freedom and provide the knowledge necessary to attain it."
            />
          </div>
          <div onClick={handleToggleKey4}>
            <ClubDrop
              title="ASSOCIATION OF COMPUTING MACHINERY"
              num={4}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium nulla ea accusamus atque voluptatem necessitatibus magni modi ducimus? Dolore."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;

