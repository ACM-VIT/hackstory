import React from "react";
import { useState } from "react";

const FAQPage = () => {
	const [activeIndex, setActiveIndex] = useState(null);

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
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<div className="flex w-[100vw] items-center justify-center lg:py-20 lg:pb-8 lg:pl-8 ">
			<div className="w-[80vw]">
				<h1 className="mb-4 text-center text-5xl font-bold text-[#FFF6E8]  max-lg:text-4xl">
					FREQUENTLY ASKED QUESTIONS
				</h1>
				<div className="mt-20 max-lg:mt-16">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="rounded border-b border-t border-gray-300 border-opacity-10 px-4 py-6"
						>
							<button
								className="flex w-full justify-between focus:outline-none"
								onClick={() => toggleAccordion(index)}
							>
								<span className="text-left text-lg font-semibold text-white">
									{faq.question}
								</span>
								<span className="text-lg text-white">
									{activeIndex === index ? "-" : "+"}
								</span>
							</button>
							{activeIndex === index && (
								<div className={`mt-2 pt-2`}>
									<p className="text-30px mt-4 text-white ">
										{faq.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FAQPage;
