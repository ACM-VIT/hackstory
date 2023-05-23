import { Oswald } from 'next/font/google'
import React from 'react'

const oswald = Oswald({ subsets:['latin']})

const TrackContent = () => {
    const tracks = ['FINTECH','OPEN INNOVATION', 'HEALTH TECH', 'MACHINE LEARNING'];
    return (
        <>
            <div className={`text-timelineheading mb-10 mt-[20rem] text-4xl font-extrabold text-center ${oswald.className}`}>CHECK OUT THE TRACKS</div>
            <div className='mt-[5rem]'>
                {tracks.map((track,index)=>(
                    <div className='ml-[20rem] mr-[20rem] border-b border-tracks flex flex-col pb-8 pt-4 gap-y-8 mb-10'>
                        <p key={index} className={`text-tracks text-3xl font-extrabold ${oswald.className}`}>{track}</p>
                        <div className='flex flex-row gap-x-5'>
                            <a className='cursor-pointer bg-tracks p-2 rounded-md'>WordGame</a>
                            <p className='p-2 text-trackstext'>Word1</p>
                            <p className='p-2 text-trackstext'>|</p>
                            <p className='p-2 text-trackstext'>Word2</p>
                            <p className='p-2 text-trackstext'>|</p>
                            <p className='p-2 text-trackstext'>Word 3</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default TrackContent