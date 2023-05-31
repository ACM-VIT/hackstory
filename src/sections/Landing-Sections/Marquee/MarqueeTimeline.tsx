import { Oswald } from 'next/font/google'
import React from 'react'

const oswald = Oswald({subsets:['latin']})

const Marquee = () => {
  return (
    <>
        <div className={`relative flex overflow-x-hidden font-marquee mt-[20vh] text-[#2E2E2E] font-extrabold ${oswald.className}`}>
            <div className="py-1 animate-marquee whitespace-nowrap">
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>    
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>   
            </div>
            <div className="absolute top-0 py-1 animate-marquee2 whitespace-nowrap font-marquee">
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>  
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>   
            </div>
        </div>
        <div className={`relative flex overflow-x-hidden font-marquee mt-[1vh] text-[#2E2E2E] font-extrabold ${oswald.className}`}>
            <div className="py-1 animate-marquee3 whitespace-nowrap">
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>    
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>   
            </div>
            <div className="absolute top-0 py-1 animate-marquee4 whitespace-nowrap font-marquee">
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>   
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>  
                <span className="md:text-[64px] text-l mx-8">BRACE YOURSELVES.</span>   
            </div>
        </div>

    </>
    
  )
}

export default Marquee