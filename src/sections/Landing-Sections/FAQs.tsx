import { Oswald } from "next/font/google";
import React from "react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

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
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa. Id donec ultrices tincidunt arcu non sodales neque sodales.",
		},
		{
			question: "How will the  winners be selected? ",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.",
		},
		{
			question: "What are the hackathon dates?",
			answer: "tortor id aliquet",
		},
		{
			question: "How are winners contacted and paid the prizes??",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa.",
		},
		{
			question: "Can I submit a previously created project?",
			answer: "egestas dui id ornare",
		},
		{
			question: "Can I submit a previously created project?",
			answer: "egestas dui id ornare",
		},
		{
			question:
				"Are we allowed to form teams with our friends and colleagues?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
				<h1
					className={`mb-4 text-center text-5xl font-bold text-[#FFF6E8]  max-lg:text-4xl ${oswald.className}`}
				>
					FREQUENTLY ASKED QUESTIONS
				</h1>
				<div className="mt-20 max-lg:mt-16">
					{faqs.map((faq, index) => (
						<motion.div
							initial={false}
							animate={open ? "open" : "closed"}
							key={index}
							className="rounded border-b border-t border-gray-300 border-opacity-10 px-4 py-6"
						>
							<motion.button
								whileTap={{ scale: 0.97 }}
								className="flex w-full items-center justify-between focus:outline-none"
								onClick={() => toggleAccordion(index)}
							>
								<span className="pr-4 text-left text-base font-semibold text-white sm:text-lg">
									{faq.question}
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
