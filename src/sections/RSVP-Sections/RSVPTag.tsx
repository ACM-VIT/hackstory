import React from "react";

const RSVPTag = () => {
  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <div className="flex h-[20%] w-full items-center justify-around text-center text-3xl text-fontColor1">
          Will you be there or whatever text
        </div>
        <div className="flex h-[20%] w-full items-center justify-center gap-x-10">
          <button
            className="focus:shadow-outline w-[1/3] rounded bg-purple-500 px-20 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            type="button"
          >
            Yes i&apos;ll be there :{`)`}
          </button>
          <button
            className="focus:shadow-outline w-[1/3] rounded bg-purple-500 px-20 py-2 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            type="button"
          >
            Nope won&apos;t make it :{`(`}
          </button>
        </div>
      </div>
    </>
  );
};

export default RSVPTag;
