import { Oswald } from "next/font/google";
import React from "react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });

const itemVariants: Variants = {
	open: {
		opacity: 1,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, transition: { duration: 0.2 } },
};

const FAQPage = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [open, setOpen] = useState(false);

	const faqs = [
		{
			question: "Who can participate in the HackStory Hackathon?",
			answer: "Anyone and everyone on campus (sorry, fourth years) is welcome to participate regardless of their experience level. There is no registration fee, the event is absolutely free.",
		},
		{
			question: "Is there a registration fee? ",
			answer: "No, the event is absolutely free.",
		},
		{
			question: "Do I need prior coding experience to participate",
			answer: "No, this is a fresher-friendly event and an opportunity for any tech, design and management enthusiast to learn and explore different domains.",
		},
		{
			question: "How do I form a team?",
			answer: "You can partner with your friends. If your friends ditch you like ours do, find teammates on our discord server and hack away.",
		},
		{
			question: "How long is the hackathon?",
			answer: " HackStory ’23 is a 56 hour hackathon. Enjoy the company of your laptop, your friends and of course, us. Don’t worry, we do have plenty planned to keep you entertained.",
		},
		{
			question: "What should I bring to the hackathon?",
			answer: "Your laptop, teammates and perhaps some coffee. Also, the narcissism of a winner.",
		},
		{
			question: "What is the event flow of the hackathon?",
			answer: "Head over to the timeline section for more details.",
		},
		{
			question: "Whom should I contact for doubts and queries?",
			answer: "Use the discord server to get in touch with our team for any queries.",
		},
		{
			question: "When and where is the hack?",
			answer: "HackStory’23 will be conducted from 4th June-6th June starting at 4 PM at Anna Auditorium.",
		},
	];

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
		<div className="flex w-[100vw] items-center justify-center lg:py-20 lg:pb-8 lg:pl-8 ">
			<div className="w-[80vw]">
				<div>
					{/* <div className="absolute  left-[25vw] mt-[-10vh] max-lg:mt-0">
						<Image
							className="w-[140px] max-lg:w-[80px]"
							src="/faq-doodle.svg"
							width={10000}
							height={10000}
							alt="faq-doodle"
						/>
					</div> */}
					<h1
						className={`relative z-10 mb-4 text-center text-5xl font-bold text-[#FFF6E8]  max-lg:text-4xl ${oswald.className}`}
					>
						FREQUENTLY ASKED QUESTIONS
					</h1>
				</div>
				<div className="mt-20 max-lg:mt-16">
					{faqs.map((faq, index) => (
						<motion.div
							initial={false}
							animate={open ? "open" : "closed"}
							key={index}
							onClick={() => toggleAccordion(index)}
							className="rounded border-b border-t border-gray-300 border-opacity-10 px-4 py-6"
						>
							<motion.button
								whileTap={{ scale: 0.97 }}
								className="flex w-full items-center justify-between focus:outline-none"
							>
								<span className="pr-4 text-left text-base font-semibold text-white sm:text-lg">
									{faq.question}
								</span>
								<motion.span
									variants={
										{
											// open: { rotate: 180 },
											// closed: { rotate: 0 },
										}
									}
									transition={{ duration: 0.2 }}
									style={{ originY: 0.55 }}
									className="text-lg text-white sm:text-2xl"
								>
									{activeIndex === index ? (
										<motion.div
											variants={{
												open: { rotate: 180 },
												closed: { rotate: 0 },
											}}
											transition={{ duration: 0.2 }}
											style={{ originY: 0.55 }}
											className="white"
										>
											<svg
												fill="#A7A9BE"
												width="15"
												height="15"
												viewBox="0 0 20 20"
											>
												<path d="M0 7 L 20 7 L 10 16" />
											</svg>
										</motion.div>
									) : (
										<motion.div
											variants={
												{
													// open: { rotate: 180 },
													// closed: { rotate: 0 },
												}
											}
											transition={{ duration: 0.2 }}
											style={{ originY: 0.55 }}
											className="white"
										>
											<svg
												fill="#A7A9BE"
												width="15"
												height="15"
												viewBox="0 0 20 20"
											>
												<path d="M0 7 L 20 7 L 10 16" />
											</svg>
										</motion.div>
									)}
								</motion.span>
							</motion.button>
							{activeIndex === index && (
								<div className={`mt-2 pt-2`}>
									<p className="text-30px mt-4 text-white ">
										{faq.answer}
									</p>
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQPage;
