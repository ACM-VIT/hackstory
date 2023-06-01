import { Oswald,Manrope } from "next/font/google";
import React from "react";
const oswald = Oswald({subsets: ['latin']});
const manrope = Manrope({subsets: ['latin']})

const Footer = () => {
  return (
      <div className="gap-y-8 mt-12 justify-around flex flex-col sm:flex-row border-t-[1px] border-gray-700 pt-12 mb-12 lg:items-stretch items-stretch">
        <div className="ml-8">
            <text className={`text-white font-bold text-[1.5rem] lg:text-[2rem] gap-6  ${oswald.className}`}>
              VISIT
            </text>
            <div className={`text-[#A7A9BE] flex flex-col pt-8 text-left text-[1rem] font-semibold gap-1 ${manrope.className}`}>
              <a href="#prizes">PRIZES</a>
              <a href="#tracks">TRACKS</a>
              <a href="#timeline">TIMELINE</a>
              <a href="#about">ABOUT HACK</a>
              <a href="#partnership">SPONSORS</a>
              <a href="#clubs">ABOUT CLUBS</a>
              <a href="#faqs">FAQs</a>
            </div >
        </div>

          <div className="flex sm:items-center flex-col ml-8">
            <text className={`text-white font-bold text-[1.5rem] lg:text-[2rem] gap-6 ${oswald.className}`}>
            STAY UPDATED!
            </text>
            <div className="text-[#A7A9BE] flex md:text-xl text-base pt-8">
              <a href="#" className={`text-black bg-[#FABF29] font-bold rounded-full text-center sm:px-6 sm:py-5 py-2 px-3 ${manrope.className}`}>JOIN DISCORD</a>
            </div >
          </div>

          <div className="ml-8">
            <text className={`text-white font-bold text-[1.5rem] lg:text-[2rem] gap-6 ${oswald.className}`}>
            FOLLOW US ON
            </text>
            <div className={`flex flex-col text-left sm:text-right text-[1.rem] font-normal gap-1 pt-8 text-[#A7A9BE] hover:underline ${manrope.className}`}>
            <a href="https://csivit.com/">csivit.com</a>
            <a href="#">csivit.com</a>
            <a href="#">csivit.com</a>
            <a href="#">csivit.com</a>
            </div >
          </div>
      </div> 
  );
};

export default Footer;

