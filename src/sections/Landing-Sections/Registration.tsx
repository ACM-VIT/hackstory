import React from 'react';

const Register = () => {
  return (
    <header className=" pt-40 px-8">
      <div className="flex flex-col items-center pb-40">
        <h1 className=" text-white text-5xl font-bold text-center pb-2"> <span className="pb-8 block"><span className="text-yellow">HACK YOUR WAY</span> THROUGH A WORLD,<br/></span>
          <span className="text-white">WHERE INNOVATION WRITES YOUR</span><span className="text-yellow"> NEXT CHAPTER</span></h1>
        </div>
        <div className='mx-20 px-80'>
          <div className='flex justify-center mt-8 border border-white rounded-3xl pl-20 pr-20 pt-30 pb-20 border-opacity-10 ' >
          <button className="mt-12 flex cursor-pointer flex-row rounded-[30px] px-8 pt-4 text-white text-[12px] font-bold md:text-[15px] lg:text-[20px] border border-yellow ${manrope.className}">JOIN A TEAM</button>
          <div className="w-20 "></div>
          <div className="h-30 w-1 bg-gray-400 mx-4 mt-10"></div>
          <div className="w-10"></div>
          <button className="mt-12 flex cursor-pointer flex-row rounded-[30px] bg-yellow px-8 py-4 text-[12px] font-bold md:text-[15px] lg:text-[20px] ${manrope.className}">CREATE A TEAM</button>
          </div>
        </div>
    </header>
  );
};

export default Register;
