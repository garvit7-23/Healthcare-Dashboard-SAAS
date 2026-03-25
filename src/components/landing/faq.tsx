"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    question: "Is this platform secure?",
    answer:
      "Yes, we use modern security practices and authentication systems to ensure your data is protected.",
  },
  {
    question: "Can I manage multiple patients?",
    answer:
      "Absolutely. You can manage, track, and analyze multiple patient records efficiently.",
  },
  {
    question: "Does it support analytics?",
    answer:
      "Yes, the platform includes dashboards and analytics tools to provide insights into patient data.",
  },
  {
    question: "Is it suitable for small clinics?",
    answer:
      "Yes, the platform is designed to scale from small clinics to large healthcare organizations.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-surface border-y border-border">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-text">
          Frequently Asked Questions
        </h2>
        <p className="text-muted mt-2">
          Everything you need to know about the platform
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border border-border rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-4 py-3 text-left bg-background hover:bg-gray-50 transition"
              >
                <span className="font-medium text-text">
                  {faq.question}
                </span>

                <ChevronDown
                  className={clsx(
                    "transition-transform",
                    isOpen && "rotate-180"
                  )}
                  size={18}
                />
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-4 py-3 text-sm text-muted border-t border-border">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};