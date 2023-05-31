import About from "@/sections/Landing-Sections/About";
import Header from "@/components/Common/Header";
import HeroContent from "@/sections/Landing-Sections/HeroContent";
import Marquee from "@/sections/Landing-Sections/Marquee";
import Clubs from "@/sections/Landing-Sections/Clubs";
import TimelineComponent from "@/sections/Landing-Sections/TimelineComponent";
import Prizes from "@/sections/Landing-Sections/Prizes";
import Partnership from "@/sections/Landing-Sections/Partnership";
import FAQs from "@/sections/Landing-Sections/FAQs";
import React from "react";
import TrackContent from "@/sections/Landing-Sections/TrackContent";
import Footer from "@/sections/Landing-Sections/FooterContent";


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
      <Footer />
      <FAQs />
    </div>
  );
};

export default Home;
