import { Manrope, Alfa_Slab_One } from 'next/font/google'
import React from 'react'
const manrope = Manrope({subsets: ['latin']})
const alfaSlabOne = Alfa_Slab_One({
    subsets: ['latin'],
    weight: '400',
})

const HeroContent = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='gap-x-2 mt-40'>
            <p className={`text-timelineheading text-2xl font-semibold ${manrope.className}`}>JUNE 5TH-7TH 2023</p>
            <h1 className={`text-yellow text-[86px] font-normal ${alfaSlabOne.className }`}>HACK STORY</h1>
        </div>
        <div className='mt-8'>
            <p className={`text-center text-timelineheading text-lg font-semibold ${manrope.className}`}>Hack your way through the world,where innovation writes the next<br></br>chapter!</p>
        </div>
        {/* Test components added for now. To be changed later */}
        <div className='flex flex-row mt-12'>
         <a className='bg-marquee px-3 py-4 rounded-md font-extrabold'>REGISTER NOW </a>
         
    </div>
    </div> 
  )
}

export default HeroContent