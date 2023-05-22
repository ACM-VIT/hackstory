import React from 'react';

const Marquee = () => {
  return (
    <>
      <div className="z-10 bg-neutral-300 relative flex overflow-x-hidden font-marquee mt-60 -rotate-3">
        <div className="text-zinc-600 py-5 animate-marquee whitespace-nowrap">
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
        </div>
        <div className="text-zinc-600 absolute top-0 py-5 animate-marquee2 whitespace-nowrap font-marquee">
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
          <span className="md:text-4xl font-bold text-l mr-16">FOR YOURS TO BUILD</span>
        </div>
      </div>
      <div className="z-1 mt-[-65px] rotate-2 w-full h-full py-8 bg-ribbon text-ribbon"></div>
    </>
  );
};

export default Marquee;
