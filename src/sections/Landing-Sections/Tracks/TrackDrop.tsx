import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Manrope, Oswald } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

interface Track {
  name: string;
}

interface Props {
  title: string;
  answer: string;
}

export const TrackDrop = ({ title, answer }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  const getIcon = () => {
    if (open) {
      return (
        <svg fill="#A7A9BE" width="15" height="15" viewBox="0 0 20 20" style={{ transform: 'rotate(180deg)' }}>
          <path d="M0 7 L 20 7 L 10 13" />
        </svg>
      );
    } else {
      return (
        <svg fill="#A7A9BE" width="15" height="15" viewBox="0 0 20 20">
          <path d="M0 7 L 20 7 L 10 13" />
        </svg>
      );
    }
  };
    return (
      <div>
        <div className="text-left">
          <div className="rounded border-b border-t border-gray-300 border-opacity-10 px-4 py-6">
            <button className={`flex w-full items-center justify-between focus:outline-none ${manrope.className}`}>
              <span className="pr-4 text-left text-lg font-semibold text-white sm:text-xl">{title}</span>
            </button>
            <p className={`md:mr-20 pt-4 text-[#FFF6E8] ${manrope.className}`} dangerouslySetInnerHTML={{ __html: answer }}></p>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="text-left">
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          className="rounded border-b border-t border-gray-300 border-opacity-10 px-4 py-6"
          onClick={toggleAccordion}
        >
          <button className={`flex w-full items-center justify-between focus:outline-none ${manrope.className}`}>
            <span className={`pr-4 text-left text-lg font-semibold text-white sm:text-xl`}>{title}</span>
            {getIcon()}
          </button>
          {open && (
            <motion.p
              className={`mr-20 pt-4 text-[#FFF6E8] ${manrope.className}`}
              dangerouslySetInnerHTML={{ __html: answer }}
            ></motion.p>
          )}
        </motion.div>
      </div>
	  
    </div>	
  );
};
