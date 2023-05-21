import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import HeroContent from "@/components/HeroContent/HeroContent";
import Marquee from "@/components/Marquee/Marquee";
import Clubs from "@/components/Clubs/Clubs";
import React from "react";
import TimelineComponent from "@/components/TimelineComponent/TimelineComponent";


const Hero = () => {
	return (
		<>
			{/* Header, content for the Hero Section and Marquee added below */}
			<Header />
			<HeroContent />
			<Marquee />
			<About />
			<Clubs />
			<TimelineComponent />
		</>
	);
};

export default Hero;
