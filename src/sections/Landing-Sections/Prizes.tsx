import { Manrope } from "next/font/google";
import React from "react";
const manrope = Manrope({subsets:['latin']})

const Prizes = () => {
  return (
    <div className=" pb-10 md:pb-24 lg:pb-28 flex flex-col items-center gap-16">
      <div
        className={`pt-40 md:pt-52 text-center text-[1.5rem] font-bold text-white md:text-[2rem] lg:text-[2.5rem] leading-[2rem] md:leading-[2.75rem] lg:leading-[3.75rem]`}>
        <text className=" text-white">
        PRIZES
        </text>
      </div>
      <div className={`flex-wrap gap-20 grid grid-cols-6 max-lg:grid-cols-1 align-center justify-center ${manrope.className}`}>
        <div className="bg-[#2E2E2E] w-[18rem] h-[8rem] lg:col-start-1 lg:col-end-3 flex flex-col items-center justify-center rounded-[20px]">
          <p className="text-[#A7A9BE]">FIRST PRIZE</p>
          <p className="text-[#D0D5FF] font-bold text-[32px]">₹ 8,000</p>
        </div>
        <div className="bg-[#2E2E2E] w-[18rem] h-[8rem] lg:col-start-3 lg:col-end-5 flex flex-col items-center justify-center rounded-[20px]">
          <p className="text-[#A7A9BE]">SECOND PRIZE</p>
          <p className="text-[#D0D5FF] font-bold text-[32px]">₹ 5,000</p>
        </div>
        <div className="bg-[#2E2E2E] w-[18rem] h-[8rem] lg:col-start-5 lg:col-end-7 flex flex-col items-center justify-center rounded-[20px]">
          <p className="text-[#A7A9BE]">THIRD PRIZE</p>
          <p className="text-[#D0D5FF] font-bold text-[32px]">₹ 3,000</p>
        </div>
        <div className="bg-[#2E2E2E] w-[18rem] h-[8rem] lg:col-start-2 lg:col-end-4 flex flex-col  items-self-center items-center justify-center rounded-[20px]">
          <p className="text-[#A7A9BE]">BEST UI/UX</p>
          <p className="text-[#D0D5FF] font-bold text-[32px]">₹ 2,000</p>
        </div>
        <div className="bg-[#2E2E2E] w-[18rem] h-[8rem] lg:col-start-4 lg:col-end-6 flex flex-col items-center justify-center rounded-[20px]">
          <p className="text-[#A7A9BE]">BEST FRESHERS</p>
          <p className="text-[#D0D5FF] font-bold text-[32px]">₹ 2,000</p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
