import { Oswald } from "next/font/google";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const oswald = Oswald({ subsets: ["latin"] });

interface Track {
  name: string;
}

const TrackContent = () => {
  const router = useRouter();
  const tracks: Track[] = [
    { name: "FINTECH" },
    { name: "OPEN INNOVATION" },
    { name: "HEALTH TECH" },
    { name: "MACHINE LEARNING" },
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
              className="mb-10 ml-[4rem] mr-[4rem] flex flex-col gap-y-8 border-b border-tracks pb-8 pt-4 lg:ml-[20rem] lg:mr-[20rem]"
            >
              <p
                className={`text-2xl font-extrabold text-tracks max-lg:text-center lg:text-3xl ${oswald.className}`}
              >
                {track.name}
              </p>
              <div className="flex flex-col gap-x-5 gap-y-2 max-md:items-center md:flex-row">
                <a
                  className="max-w-[8rem] cursor-pointer rounded-[30px] bg-[#FFCCDE] px-4 py-2"
                  onClick={() => handleClick(track)}
                >
                  WordGame
                </a>
                <p className="p-2 text-trackstext">Word1</p>
                <p className="hidden p-2 text-trackstext lg:visible">|</p>
                <p className="p-2 text-trackstext">Word2</p>
                <p className="hidden p-2 text-trackstext lg:visible">|</p>
                <p className="p-2 text-trackstext">Word 3</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackContent;
