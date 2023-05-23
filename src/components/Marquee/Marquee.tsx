import { Oswald } from 'next/font/google';
import React from 'react';

const oswald = Oswald({subsets:['latin']})


const Marquee = () => {
  return (
    <>
      <div className="-translate-x-10 w-[110%] z-10 bg-logo relative flex overflow-x-hidden font-marquee mt-[23rem] -rotate-[4deg]">
        <div className="text-marquee py-8 animate-marquee whitespace-nowrap">
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
        </div>
        <div className="text-marquee absolute top-0 py-8 animate-marquee2 whitespace-nowrap font-marquee">
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
        </div>
      </div>
      <div className="-translate-x-10 w-[110%] z-1 mt-[-65px] rotate-[6deg] w-contain h-full py-12 bg-cross"></div>
    </>
  );
};

export default Marquee;
