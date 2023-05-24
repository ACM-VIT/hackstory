import { Oswald } from 'next/font/google';
import React from 'react';

const oswald = Oswald({subsets:['latin']})


const Marquee = () => {
  return (
    <>
      <div className="-translate-x-10 w-[110%] z-10 bg-logo relative flex overflow-x-hidden font-marquee mt-[23rem] -rotate-[4deg]">
        <div className="text-marquee lg:py-8 py-4 flex animate-marquee whitespace-nowrap">
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
        </div>
        <div className="text-marquee absolute top-0 lg:py-8 py-4 flex animate-marquee2 whitespace-nowrap font-marquee">
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
          <img src='/marquee-icon.svg' className='mx-6'></img>
          <span className={`md:text-4xl font-bold text-2xl mx-6 ${oswald.className}`}>FOR YOURS TO BUILD</span>
        </div>
      </div>
      <div className="-translate-x-10 w-[110%] z-1 mt-[-65px] rotate-[6deg] w-contain h-full lg:py-12 py-6 bg-cross"></div>
    </>
  );
};

export default Marquee;
