import Image from "next/image";
import React from "react";
import { useState } from "react";

interface Props {
  title: string;
  num: number;
  text: string;
}

const ClubDrop = ({ title, num, text }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="text-left">
        <div
          className={
            "flex font-semibold text-2xl justify-between items-center pb-2 mr-20 border-b " +
            (open ? "" : "text-[#A7A9BE] border-[#A7A9BE]") +
            (num == 1 && open ? "text-[#FFCCDE] border-[#A7A9BE]" : "") +
            (num == 2 && open ? "text-[#007656] border-[#A7A9BE]" : "") +
            (num == 3 && open ? "text-[#FABF29] border-[#A7A9BE]" : "") +
            (num == 4 && open ? "text-[#F54E26] border-[#A7A9BE]" : "")
          }
          onClick={() => setOpen(!open)}
        >
          <h3>{title}</h3>
          <div className="">
            <span className={"" + (open ? "hidden" : "")}>
              <Image
                width={10000}
                height={10000}
                src="/plus-icon.svg"
                alt="plus-icon"
              />
            </span>
            <span className={"" + (open ? "" : "hidden")}>
              <Image
                width={10000}
                height={10000}
                src="/minus-icon.svg"
                alt="minus-icon"
              />
            </span>
          </div>
        </div>
        {open && <p className={`pt-4 mr-20 text-[#FFF6E8]`}>{text}</p>}
      </div>
    </div>
  );
};

export default ClubDrop;
