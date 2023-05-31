import React from "react";
import { useState } from 'react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Who can participate in the HackStory Hackathon?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa. Id donec ultrices tincidunt arcu non sodales neque sodales.',
    },
    {
      question: 'How will the  winners be selected? ',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.',
    },
    {
      question: 'What are the hackathon dates?',
      answer: 'tortor id aliquet',
    },
    {
      question: 'How are winners contacted and paid the prizes??',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa.',
    },
    {
      question: 'Can I submit a previously created project?',
      answer: 'egestas dui id ornare',
    },
    {
      question: 'Can I submit a previously created project?',
      answer: 'egestas dui id ornare',
    },
    {
        question: 'Are we allowed to form teams with our friends and colleagues?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
  ];

  const toggleAccordion = (index:any) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-20 pb-8 pl-8">
      <h1 className="text-5xl font-bold  mb-4 text-[#FFF6E8]">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="mt-20">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-b border-gray-300 border-opacity-10 rounded py-6 px-4">
            <button
              className="flex justify-between w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold text-white text-lg">{faq.question}</span>
              <span className="text-white text-lg">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
                <div className={`mt-2 pt-2`}>
                <p className="text-white mt-4 text-30px ">{faq.answer}</p>
                </div>)}
            </div>
        ))}
      </div>
    </div>
  );
};
  
  export default FAQPage;