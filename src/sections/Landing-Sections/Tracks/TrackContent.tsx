import { Oswald } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import TrackButtons from "./TrackButtons";
import { motion } from "framer-motion";
import { TrackDrop } from "@/sections/Landing-Sections/Tracks/TrackDrop";

const oswald = Oswald({ subsets: ["latin"] });

interface Data {
	a: string;
	b: string;
	c: string;
	d: string;
}

interface Track {
	name: string;
	oneAns: string;
	twoAns: string;
	threeAns: string;
}
interface Answer {
	name: string;
	answer: string;
	data: Data;
}

const TrackContent = () => {
	const router = useRouter();
	const [activeIndex, setActiveIndex] = useState(null);
	const [open, setOpen] = useState(false);
	const [activeIndexIns, setActiveIndexIns] = useState("");
	const [openIns, setOpenIns] = useState(false);

	const tracks: Track[] = [
		{
			name: "FINTECH",
			oneAns: "Seamless Cross-Border Payments<br/>Design a fintech solution that simplifies and accelerates cross-border payments, reducing costs and transaction times for individuals and businesses in future times. The solution should leverage blockchain technology, smart contracts, or other innovative approaches to enable secure, efficient, and transparent international money transfers.",
			twoAns: "India is a country whose backbone is agriculture which contributes over 50% of India’s workforce and 18% of economy of the country. In a populous and developing country like ours agriculture is an important source of nations sustainability and takes major workforce, yet the state of agriculture is very pathetic and people doing agriculture and agriculture related businesses suffer heavy losses or having very less profit margin. The agriculture in modern and urbanized world is very difficult and in many states farmers are commiting suicides in masses. People don’t perceive agriculture as an opportunity for employment. The main and the foremost reason for this downfall is the lack of capital for the farmers, the banks do not sanction loans that easily to the farmers because of their uncertain nature of work. Our countries farmers are mostly micro farmers who have less than 5 acres of land. the small farmers don’t have collateral to provide the bank for the sanction of the loan, so there is a huge gap between the banks and the farmers in terms of sanctioning of loan even though government is taking several measures to solve this issue , because of this issue the farmers are taking loans from other informal sources like their relatives or local financiers who lend money on insane interest rates.develop a credit score calculation software. It should operate in real-time. This calculator should consider a farmer’s credit and financial history, rent, bill payments, subscriptions, loans, and utilities.",
			threeAns:
				"develop a platform that utilizes predictive analytics to accurately forecast market movements and provides traders with effective and efficient financing strategies. The platform should address the challenges faced by traders in the world of finance and trading, where accurate predictions and optimal financing approaches are crucial for maximizing profits and minimizing risks.",
		},
		{
			name: "GAME OF LIFE",

			oneAns: "Tourism is a major economic driver for many countries, but it can be difficult to attract and retain visitors. The goal is to create a gamification solution that enhances the tourism experience by integrating game elements, such as challenges, rewards, and social interaction, into the exploration of a specific city or region.",
			twoAns: "In today's fast-paced world, it can be difficult to stay on top of everything. There are always more tasks to do, and it can be hard to stay motivated. One will have to incorporate game-like elements into non-game contexts, and it has been shown to be an effective way to engage users and encourage them to take action.",
			threeAns:
				"Digital and mental health are significant concerns in today's society, with increasing reliance on technology and rising rates of stress, anxiety, and other mental health issues. The aim is to design and develop a gamification solution that promotes digital or mental health and encourages individuals to adopt and maintain healthy habits, improve their well-being, and seek support when needed.",
		},
		{
			name: "HEALTH TECH",

			oneAns: "Design an ML-based Income Range Predictor with Bias-Aware Integration: <br/>Develop a machine learning solution to predict job applicants' income range based on their demographic and professional information. The solution should include a user-friendly interface, either as a website or SDK. <br/> Address potential biases to ensure fair and unbiased predictions. Conduct Exploratory Data Analysis (EDA) to understand the dataset, identify biases, and analyze variable relationships. Mitigate bias during model training and evaluation.<br/> (Data set will be given)",
			twoAns: "Problem 2",
			threeAns: "Problem 3",
		},
		{
			name: "MACHINE LEARNING",

			oneAns: "Design an ML-based Income Range Predictor with Bias-Aware Integration: <br/>Develop a machine learning solution to predict job applicants' income range based on their demographic and professional information. The solution should include a user-friendly interface, either as a website or SDK. <br/> Address potential biases to ensure fair and unbiased predictions. Conduct Exploratory Data Analysis (EDA) to understand the dataset, identify biases, and analyze variable relationships. Mitigate bias during model training and evaluation.<br/> (Data set will be given)",
			twoAns: "Analyzing Bias in Criminal Recidivism Scores and Building a Performance Comparison Solution:<br/>Recidivism: Whether a convicted criminal reoffends.<br/>Currently, an algorithm is used to predict whether a criminal will reoffend. It makes criminals answer questions, and based on the answers- a decile score from 1-10 is given, rating them from low-high.<br/>Perform an in-depth EDA on the given dataset of criminal details and 'recidivism scores'. Identify biases and analyze their impact on predictions. Use a second dataset with true recidivism data- same criminal data, to develop a solution that predicts likelihood of reoffending. Integrate the solution into a website or SDK, considering ethical considerations for responsible use. Make a collective report(a pdf or other) explaining your findings and solution.<br/>(Both Data sets will be given)",
			threeAns:
				"Developing a Hate Speech Recognition Solution for Multi-Platform Detection<br/>The task is to create an effective hate speech recognition solution that can detect instances of hate speech on any platform of choice, utilizing any suitable method. The solution should be able to analyze text data and classify it as hate speech or non-hate speech based on the content. It must be novel in the scenario it is used in, and must have an impact on making the internet safer.",
		},
	];

	const handleClick = (track: Track) => {
		router.push({
			pathname: "/track",
			query: { track: track.name },
		});
	};

	const toggleAccordion = (index: any) => {
		if (activeIndex === index) {
			setActiveIndex(null);
			setOpen(false);
		} else {
			setActiveIndex(index);
			setOpen(true);
		}
	};

	return (
		<div className="flex w-[100vw] items-center justify-center">
			<div className="w-[80vw]">
				<div
					className={`mt-25vh text-fontColor1 flex h-60 items-center justify-center  text-center text-3xl font-extrabold text-tracks  lg:text-4xl ${oswald.className}`}
				>
					<p>CHECK OUT THE TRACKS</p>
					<Image
						className="w-[72px]"
						src="/track-icon.svg"
						width={10000}
						height={10000}
						alt="track-icon"
					/>
				</div>
				<div className="">
					{tracks.map((track, index) => (
						<motion.div
							initial={false}
							animate={open ? "open" : "closed"}
							key={index}
							className="rounded border-b border-t border-gray-300 border-opacity-10 px-4 py-6"
						>
							<motion.button
								whileTap={{ scale: 0.97 }}
								onClick={() => toggleAccordion(index)}
								className="flex w-full items-center justify-between  focus:outline-none"
							>
								<span className="pr-4 text-left text-2xl font-bold text-[#A7A9BE] sm:text-lg">
									{track.name}
								</span>
								{/* <motion.span
                                key={index}
                                variants={{
                                    open: { rotate: 180 },
                                    closed: { rotate: 0 },
                                }}
                                transition={{ duration: 0.2 }}
                                style={{ originY: 0.55 }}
                                className="text-lg text-white"
                            >
                                <svg
                                    fill="#A7A9BE"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M0 7 L 20 7 L 10 16" />
                                </svg>
                            </motion.span> */}
							</motion.button>

							{activeIndex === index && (
								<div className={`mt-2 pt-2`}>
									<TrackDrop
										title="Problem 1"
										answer={track.oneAns}
									/>
									<TrackDrop
										title="Problem 2"
										answer={track.twoAns}
									/>
									<TrackDrop
										title="Problem 3"
										answer={track.threeAns}
									/>
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrackContent;
