import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import HeroContent from "@/components/HeroContent/HeroContent";
import Marquee from "@/components/Marquee/Marquee";
import Clubs from "@/components/Clubs/Clubs";
import TimelineComponent from "@/components/TimelineComponent/TimelineComponent";
import React from "react";

const Hero = () => {
	return (
		<div className="overflow-hidden">
			{/* Header, content for the Hero Section and Marquee added below */}
			<Header />
			<HeroContent />
			<Marquee />
			<About />
			<Clubs />
			<TimelineComponent />
		</div>
	);
};

export default Hero;
