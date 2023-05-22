import { Oswald } from 'next/font/google';
import React from 'react';

const oswald = Oswald({subsets:['latin']})


const Marquee = () => {
  return (
    <>
      <div className="z-10 bg-logo relative flex overflow-x-hidden font-marquee mt-60 -rotate-3">
        <div className="text-marquee py-5 animate-marquee whitespace-nowrap">
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
        </div>
        <div className="text-marquee absolute top-0 py-5 animate-marquee2 whitespace-nowrap font-marquee">
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <span className={`md:text-4xl font-bold text-l mr-16 ${oswald.className}`}>FOR YOURS TO BUILD</span>
        </div>
      </div>
      <div className="z-1 mt-[-65px] rotate-2 w-contain h-full py-8 bg-cross"></div>
    </>
  );
};

export default Marquee;
