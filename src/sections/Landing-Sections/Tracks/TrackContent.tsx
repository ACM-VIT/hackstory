import { Oswald } from "next/font/google";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import TrackButtons from "./TrackButtons";

const oswald = Oswald({ subsets: ["latin"] });

interface Data{
  a: string;
  b: string;
  c: string;
  d: string;
}

interface Track {
  name: string;
  data: Data;
}

const TrackContent = () => {
  const router = useRouter();
  const tracks: Track[] = [
    { name: "FINTECH", data:{a:"COMMERCE", b:"BIG DATA", c:"SANDBOX", d:"REGTECH"} },
    { name: "OPEN INNOVATION" , data:{a:"GAMIFICATION",b:"VISIONARY",c:"ENGAGING",d:"IMMERSIVE"}},
    { name: "HEALTH TECH", data:{a:"SOCIAL CAUSES",b:"UNREST",c:"BIAS",d:"DATASETS"} },
    { name: "MACHINE LEARNING" ,data:{a:"REVOLUTION",b:"INSPIRATION",c:"CREATION",d:"IMAGINATION"}},
  ];

  const handleClick = (track: Track) => {
    router.push({
      pathname: "/track",
      query: { track: track.name},
    });
  };

  return (
    <div className="max-lg:flex max-lg:items-center max-lg:justify-center">
      <div className="max-lg:w-[80vw]">
        <div
          className={`mt-25vh text-fontColor1 flex h-60 items-center justify-center  text-center text-3xl font-extrabold text-tracks  lg:text-4xl ${oswald.className}`}
        >
          <p>CHECK OUT THE TRACKS</p>
          <Image
            className="w-[72px]"
            src="/track-icon.svg"
            width={10000}
            height={10000}
            alt="track-icon"
          />
        </div>
        <div className="">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="mb-10 ml-[4rem] mr-[4rem] flex flex-col gap-y-8 border-b border-tracks pb-8 pt-d lg:ml-[20rem] lg:mr-[20rem]"
            >
              <p
                className={`text-2xl font-extrabold text-tracks max-lg:text-center lg:text-3xl ${oswald.className}`}
              >
                {track.name}
              </p>
              <TrackButtons track = {track.name} buttonA={track.data.a} buttonB={track.data.b} buttonC={track.data.c} buttonD={track.data.d}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackContent;
