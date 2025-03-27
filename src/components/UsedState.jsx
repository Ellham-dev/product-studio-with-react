import React from 'react'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does SquareUp provide?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    question: "How can SquareUp help my business?",
    answer: "SquareUp provides tailored solutions to help businesses scale and optimize their operations.",
  },
  {
    question: "What industries does SquareUp work with?",
    answer: "We work with various industries including tech startups, healthcare, finance, and more.",
  },
  {
    question: "How long does it take to complete a project with SquareUp?",
    answer: "The timeline depends on the project's scope, typically ranging from a few weeks to several months.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-900 text-white rounded-xl">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-700">
          <button
            className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openIndex === index && (
            <p className="p-4 text-gray-300">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
  


