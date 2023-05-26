import About from "@/sections/Landing-Sections/About";
import Header from "@/components/Common/Header";
import HeroContent from "@/sections/Landing-Sections/HeroContent";
import Marquee from "@/sections/Landing-Sections/Marquee";
import Clubs from "@/sections/Landing-Sections/Clubs";
import TimelineComponent from "@/sections/Landing-Sections/TimelineComponent";
import React from "react";
import TrackContent from "@/sections/Landing-Sections/TrackContent";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-background">
      <Header />
      <HeroContent />
      <Marquee />
      <About />
      <Clubs />
      <TimelineComponent />
      <TrackContent />
    </div>
  );
};

export default Home;
