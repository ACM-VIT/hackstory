import React from "react";

const Prizes = () => {
  return (
    <div className=" pb-10 md:pb-24 lg:pb-28 flex flex-col items-center gap-16">
      <div
        className={`pt-40 md:pt-52 text-center text-[1.5rem] font-bold text-white md:text-[2rem] lg:text-[2.5rem] leading-[2rem] md:leading-[2.75rem] lg:leading-[3.75rem]`}>
        <text className=" text-white">
        PRIZES
        </text>
      </div>
      <p
        className={`pb-48 md:pb-60 lg:pb-64 text-center text-white text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] font-semibold`}
      >
        Will be informed soon..
      </p>
    </div>
  );
};

export default Prizes;
