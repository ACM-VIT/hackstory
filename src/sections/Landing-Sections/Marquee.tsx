import React from "react";
import Image from "next/image";

const Marquee = () => {
  return (
    <>
      <div className="font-marquee relative z-10 mt-[10rem] flex w-[110%] -translate-x-10 -rotate-[4deg] overflow-x-hidden bg-logo max-lg:mt-[5rem]">
        <div className="flex animate-marquee whitespace-nowrap py-4 text-marquee lg:py-8">
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base`}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base`}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base`}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base`}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:gap-x-3 lg:text-base `}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
        </div>
        <div className="font-marquee absolute top-0 flex animate-marquee2 whitespace-nowrap py-4 text-marquee lg:py-8">
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base `}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base `}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base `}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base `}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
          <span
            className={`ml-3 flex flex h-full flex-row items-center justify-around gap-x-6 text-center text-2xl font-bold lg:text-base `}
          >
            <p className="lg:ml-3">FOR YOURS TO BUILD</p>
            <Image
              width={10000}
              height={10000}
              alt="/"
              src="/marquee-icon.svg"
              className="mr-6 h-10 w-10 lg:mx-6"
            />
          </span>
        </div>
      </div>
      <div className="z-1 w-contain mt-[-65px] h-full w-[110%] -translate-x-10 rotate-[6deg] bg-cross py-6 lg:py-12"></div>
    </>
  );
};

export default Marquee;
