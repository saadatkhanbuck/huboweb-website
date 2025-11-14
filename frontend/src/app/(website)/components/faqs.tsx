"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FAQ {
  question: string;
  answer: string;
}

export default function Faqs({ imageSrc }: { imageSrc: string }) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Load FAQs from JSON file
  useEffect(() => {
    fetch("/data/faqs.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Error loading faqs.json:", err));
  }, []);

  return (
    <section className="bg-transparent text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: FAQs */}
        <div data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p
            className="text-gray-400 mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Got questions? We’ve got answers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border bg-[#1F1F4B] border-gray-700 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-4 text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="w-full h-full flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Image
            src={imageSrc}
            alt="FAQs"
            width={500}
            height={500}
            className="rounded-xl object-contain max-w-full"
          />
        </div>

      </div>
    </section>
  );
}
