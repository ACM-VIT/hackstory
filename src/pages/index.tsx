import About from "@/sections/Landing-Sections/About";
import Header from "@/components/Common/Header";
import HeroContent from "@/sections/Landing-Sections/HeroContent";
import Marquee from "@/sections/Landing-Sections/Marquee/MarqueeHero";
import Clubs from "@/sections/Landing-Sections/Clubs/Clubs";
import TimelineComponent from "@/sections/Landing-Sections/TimelineComponent";
import Prizes from "@/sections/Landing-Sections/Prizes";
import Partnership from "@/sections/Landing-Sections/Partnership";
import FAQs from "@/sections/Landing-Sections/FAQs";
import React from "react";
import TrackContent from "@/sections/Landing-Sections/Tracks/TrackContent";
import Footer from "@/components/Common/Footer";
import Marquee2 from "@/sections/Landing-Sections/Marquee/MarqueeTimeline";
import Clock from "@/sections/Landing-Sections/Clock";


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div>
        <HeroContent />
      </div>
      <Marquee />
      <div id="about">
        <About />
      </div>
      <div id="clubs">
        <Clubs />
      </div>
      <div id="timeline">
        <TimelineComponent />
      </div>
        <Marquee2 />
      <div id="tracks">
        <TrackContent />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
      <div  id="partnership"> 
      <Partnership />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <Clock/>
      <Footer />
    </div>
  );
};

export default Home;
