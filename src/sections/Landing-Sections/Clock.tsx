import React from 'react'

import Countdown,{ CountdownRendererFn }  from 'react-countdown';

const renderer:CountdownRendererFn = ({ days, hours, minutes }) => {
  return (
    <p className='text-[#E8E8EE] text-xl mt-2'>{days} days : {hours} hrs : {minutes} minutes </p>
  );
};


function Clock() {
  const targetDate = new Date('2023-06-04 16:00:00'); 
  return (
    <div className='h-full mt-[10vh] mb-[10vh] flex justify-center items-center'>
      <div className='bg-[#2E2E2E] w-4/5 flex max-lg:flex-col h-full gap-y-6 justify-center items-center rounded-2xl p-[10vh]'>
          <div className='w-3/5 text-[#FFF6E8] font-bold text-2xl'>
              <p>Don't miss an opportunity to win big with <br></br>HackStory Hackathon</p>
              <div
            className={`mt-12 h-16 w-56  flex cursor-pointer flex-row rounded-[30px] bg-yellow px-8 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px] text-[#121212]`}
            onClick={() => console.log("test")}
          >
            REGISTER NOW
          </div>
          </div>
          <div className='lg:p-20 p-6 justify-center text-center items-center text-[#A7A9BE] font-bold border text-2xl border-[#A7A9BE] rounded-2xl '>
              <p>Hackathon ends in</p>
                <Countdown date={targetDate} renderer={renderer} />
          </div>
      </div>
    </div>

  )
}

export default Clock