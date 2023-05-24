import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import HeroContent from "@/components/HeroContent/HeroContent";
import Marquee from "@/components/Marquee/Marquee";
import Clubs from "@/components/Clubs/Clubs";
import TimelineComponent from "@/components/TimelineComponent/TimelineComponent";
import React from "react";
import TrackContent from "@/components/TrackContent/TrackContent";

const Hero = () => {
	return (
		<div className="overflow-x-hidden">
			{/* Header, content for the Hero Section and Marquee added below */}
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

export default Hero;
