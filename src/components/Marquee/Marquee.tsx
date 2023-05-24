import { Oswald } from 'next/font/google';
import React from 'react';

const oswald = Oswald({subsets:['latin']})


const Marquee = () => {
  return (
    <>
      <div className="-translate-x-10 w-[110%] z-10 bg-logo relative flex overflow-x-hidden font-marquee mt-[21rem] lg:mt-[23rem] -rotate-[4deg]">
        <div className="text-marquee lg:py-8 py-4 flex animate-marquee whitespace-nowrap">
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl lg:gap-x-3 gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
        </div>
        <div className="text-marquee absolute top-0 lg:py-8 py-4 flex animate-marquee2 whitespace-nowrap font-marquee">
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
          <span className={`lg:text-4xl font-bold text-2xl gap-x-6 ml-3 flex flex-row ${oswald.className}`}>
            <p className='lg:ml-3'>FOR YOURS TO BUILD</p>
            <img src='/marquee-icon.svg' className='lg:mx-6 mr-6'></img>
          </span>
        </div>
      </div>
      <div className="-translate-x-10 w-[110%] z-1 mt-[-65px] rotate-[6deg] w-contain h-full lg:py-12 py-6 bg-cross"></div>
    </>
  );
};

export default Marquee;
