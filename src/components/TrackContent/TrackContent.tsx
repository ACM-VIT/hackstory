import { Oswald } from 'next/font/google'
import React from 'react'

const oswald = Oswald({ subsets:['latin']})

const TrackContent = () => {
    const tracks = ['FINTECH','OPEN INNOVATION', 'HEALTH TECH', 'MACHINE LEARNING'];
    return (
        <>
            <div className={`text-timelineheading mb-10 mt-[20rem] lg:text-4xl text-3xl font-extrabold text-center ${oswald.className}`}>CHECK OUT THE TRACKS</div>
            <div className='mt-[5rem]'>
                {tracks.map((track,index)=>(
                    <div key={index} className='ml-[4rem] mr-[4rem] lg:ml-[20rem] lg:mr-[20rem] border-b border-tracks flex flex-col pb-8 pt-4 gap-y-8 mb-10'>
                        <p className={`text-tracks lg:text-3xl text-2xl font-extrabold ${oswald.className}`}>{track}</p>
                        <div className='flex flex-col lg:flex-row gap-x-5 gap-y-2'>
                            <a className='cursor-pointer bg-tracks p-2 rounded-md max-w-[6rem]'>WordGame</a>
                            <p className='p-2 text-trackstext'>Word1</p>
                            <p className='p-2 text-trackstext hidden lg:visible'>|</p>
                            <p className='p-2 text-trackstext'>Word2</p>
                            <p className='p-2 text-trackstext hidden lg:visible'>|</p>
                            <p className='p-2 text-trackstext'>Word 3</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default TrackContent