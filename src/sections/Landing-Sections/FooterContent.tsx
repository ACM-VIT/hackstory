import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className=" mt-12 justify-around flex">
        <div className="">
            <text className="text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] gap-6">
            VISIT
            </text>
            <div className="text-[#A7A9BE] flex flex-col pt-8 text-left text-[1.5rem] font-semibold gap-1">
            <a href="#">PRIZES</a>
            <a href="#">TRACKS</a>
            <a href="#">TIMELINE</a>
            <a href="#">ABOUT HACK</a>
            <a href="#">SPONSORS</a>
            <a href="#">ABOUT CLUBS</a>
            <a href="#">FAQs</a>
            </div >
          </div>

          <div className="">
            <text className="text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] gap-6">
            STAY UPDATED!
            </text>
            <div className="text-[#A7A9BE] flex flex-col text-left text-[1.5rem] pt-8">
            <a href="#" className="text-black bg-[#FABF29] font-semibold rounded-full text-center px-6 py-5 mr-5">JOIN DISCORD</a>
            </div >
          </div>

          <div className="">
            <text className="text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] gap-6">
            FOLLOW US ON
            </text>
            <div className="flex flex-col text-right text-[1.25rem] font-normal gap-1 pt-8 text-[#A7A9BE] hover:underline">
            <a href="#">csivit.com</a>
            <a href="#">csivit.com</a>
            <a href="#">csivit.com</a>
            <a href="#">csivit.com</a>
            </div >
          </div>
      </div> 
     </div>
  );
};

export default Footer;

