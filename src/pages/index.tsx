import About from "@/sections/Landing-Sections/About";
import Header from "@/components/Common/Header";
import HeroContent from "@/sections/Landing-Sections/HeroContent";
import Marquee from "@/sections/Landing-Sections/Marquee";
import Clubs from "@/sections/Landing-Sections/Clubs";
import TimelineComponent from "@/sections/Landing-Sections/TimelineComponent";
import Prizes from "@/sections/Landing-Sections/Prizes";
import Partnership from "@/sections/Landing-Sections/Partnership";
import React from "react";
import TrackContent from "@/sections/Landing-Sections/TrackContent";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroContent />
      <Marquee />
      <About />
      <Clubs />
      <TimelineComponent />
      <TrackContent />
      <Prizes />
      <Partnership />
    </div>
  );
};

export default Home;
