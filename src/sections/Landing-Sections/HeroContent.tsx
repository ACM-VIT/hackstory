import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HeroContent = () => {
  const { data: session } = useSession();

  return (
    <div className="pt-32 px-16 flex flex-col items-center justify-center max-md:pt-16">
      <div className="">
        <div
          className={`text-timelineheading text-md font-semibold md:text-xl lg:text-2xl`}
        >
          JUNE 5TH-7TH 2023
        </div>
        <div
          className={`text-yellow text-[40px] font-bold md:text-[86px] lg:text-[90px]`}
        >
          HACK STORY
        </div>
      </div>
        <div
          className={`text-timelineheading text-center text-sm font-semibold md:text-lg lg:text-xl`}
        >
          Hack your way through the world,where innovation writes the next
          chapter!
        </div>

      {session ? (
        <Link
          href={"/team"}
          className="mt-12 w-48 flex items-center justify-center bg-marquee cursor-pointer rounded-md px-3 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px]"
        >
          VIEW TEAM
        </Link>
      ) : (
        <div
          className="mt-12 flex flex-row bg-marquee cursor-pointer rounded-md px-3 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px]"
          onClick={() => signIn()}
        >
          REGISTER NOW
        </div>
      )}
    </div>
  );
};

export default HeroContent;
