import About from "@/components/About";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import Marquee from "@/components/Marquee";
import Clubs from "@/components/Clubs";
import TimelineComponent from "@/components/TimelineComponent";
import React from "react";
import TrackContent from "@/components/TrackContent";

const Home = () => {
	return (
		<div className="bg-background overflow-x-hidden">
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
