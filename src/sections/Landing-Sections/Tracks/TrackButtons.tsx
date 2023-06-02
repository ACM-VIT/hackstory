import { Oswald } from 'next/font/google';
import { useRouter } from "next/router";
import React from 'react';

const oswald = Oswald({ subsets: ['latin'] });

interface Props {
  buttonA: string;
  buttonB: string;
  buttonC: string;
  buttonD: string;
  track: string;
}


const TrackButtons = ({ track, buttonA, buttonB, buttonC, buttonD }: Props) => {
    // const router = useRouter();
    // const handleClick = (track: Track) => {
    //     router.push({
    //       pathname: "/track",
    //       query: { track: track},
    //     });
    // };
    return (
        <div className="flex flex-col gap-x-5 gap-y-2 max-md:items-center md:flex-row">
            <a
                className="cursor-pointer rounded-[30px] bg-[#D0D5FF] px-4 py-2"
            >
            {buttonA}
            </a>
            <p className="p-2 text-trackstext">{buttonB}</p>
            <p className="p-2 text-trackstext">{buttonC}</p>
            <p className="p-2 text-trackstext">{buttonD}</p>
        </div>
    );
};

export default TrackButtons;
