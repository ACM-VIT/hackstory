import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DEV_BASE_URL } from "@/constants";
import getHandler from "@/handlers/getHandler";
import { useRouter } from "next/router";

const HeroContent = () => {
  const { data: session } = useSession();
  const [isPartOfTeam, setIsPartOfTeam] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // just check if the isn't getting overloaded with the request of team check.
    if (session) {
      const URL = `${DEV_BASE_URL}/api/team/getTeamDetails`;
      getHandler(URL).then((res) => {
        if (res.statusCode == 200) {
          setIsPartOfTeam(true);
        }
      });
    }
  }, [session]);

  const handleClick = () => {
    if (isPartOfTeam) router.push("/team");
    else router.push("/team/join");
  };

  return (
    <div className="flex flex-col items-center justify-center  px-16 pt-32 max-md:pt-16">
      <div className="">
        <div
          className={`text-timelineheading text-md font-semibold md:text-xl lg:text-2xl`}
        >
          JUNE 5TH-7TH 2023
        </div>
        <div
          className={`text-[40px] font-bold text-yellow md:text-[86px] lg:text-[90px]`}
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
        <div
          className="mt-12 flex w-48 cursor-pointer items-center justify-center rounded-md bg-marquee px-3 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px]"
          onClick={handleClick}
        >
          JOIN TEAM
        </div>
      ) : (
        <div
          className="mt-12 flex cursor-pointer flex-row rounded-md bg-marquee px-3 py-4 text-[12px] font-extrabold md:text-[15px] lg:text-[20px]"
          onClick={() => signIn()}
        >
          REGISTER NOW
        </div>
      )}
    </div>
  );
};

export default HeroContent;
