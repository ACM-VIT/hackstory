import React from 'react'

const HeroContent = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='gap-x-2 mt-40'>
            <p className='text-white text-2xl font-semibold'>JUNE 5th-7th 2023</p>
            <h1 className='text-white text-[86px] font-extrabold'>HACK STORY</h1>
        </div>
        <div className='mt-8'>
            <p className='text-center text-white text-2xl font-semibold'>Hack your way through the world,<br></br>where innovation writes the next chapter!</p>
        </div>
        {/* Test components added for now. To be changed later */}
        <div className='flex flex-row mt-12'>
            <div>
                <div className="mx-8 bg-neutral-300 w-16 h-16 text-neutral-300">hello</div>
            </div>
            <div>
                <div className="mx-8 bg-neutral-300 w-16 h-16 text-neutral-300">hello</div>
            </div>
            <div>
                <div className="mx-8 bg-neutral-300 w-16 h-16 text-neutral-300">hello</div>
            </div>
            <div>
                <div className="mx-8 bg-neutral-300 w-16 h-16 text-neutral-300">hello</div>
            </div>
        </div>
    </div>
  )
}

export default HeroContent