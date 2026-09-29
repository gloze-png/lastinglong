
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Intellinx?",
    answer:
      "Intellinx is an AI customer support assistant that learns from your business knowledge and helps answer customer questions, resolve common issues, and provide support around the clock.",
  },
  {
    question: "How does Intellinx learn about my business?",
    answer:
      "You provide your business information, documentation, FAQs, policies, products, and other knowledge sources. Intellinx uses this information to understand your business and ground its responses in your content.",
  },
  {
    question: "Can I control what Intellinx says?",
    answer:
      "Yes. Intellinx includes strict guardrails that allow you to define what the AI can discuss, what it should avoid, and when a conversation should be handed over to a human.",
  },
  {
    question: "Can I control the AI's tone and personality?",
    answer:
      "Yes. You can configure Intellinx's message tone and communication style so its responses match your brand and the way you want to communicate with customers.",
  },
  {
    question: "How do I add Intellinx to my website?",
    answer:
      "Intellinx is designed for a simple integration. Once your assistant is configured, you can add the support widget to your website using a small embed script.",
  },
  {
    question: "Can Intellinx handle phone calls?",
    answer:
      "Inbound call support is part of the Intellinx product roadmap. It is designed to allow businesses to handle customer conversations through phone calls in addition to online support.",
  },
  {
    question: "Does Intellinx support lead generation?",
    answer:
      "Lead generation is coming soon. The planned functionality will allow Intellinx to identify potential customers during conversations, collect relevant information, and help businesses follow up on opportunities.",
  },
  {
    question: "Is the Social Media Scheduler available?",
    answer:
      "Not yet. Social Media Scheduler is currently in development and will be introduced as a future Intellinx feature.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Intellinx offers a free Starter plan with limited monthly conversations and knowledge sources. You can upgrade as your support needs grow.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can start with the Starter plan and upgrade when you need more conversations, knowledge sources, or advanced capabilities.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium text-zinc-500">
            Frequently asked questions
          </p>

          <h2
            id="faq-heading"
            className="mb-5 text-3xl font-medium tracking-tight text-white md:text-5xl"
          >
            Questions, answered.
          </h2>

          <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-zinc-500">
            Everything you need to know about using Intellinx for your
            customer support.
          </p>
        </div>

        {/* FAQ list */}
        <div className="divide-y divide-white/8 border-y border-white/8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-sm font-medium text-zinc-200 md:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  hidden={!isOpen}
                  className="pb-6 pr-10"
                >
                  <p className="text-sm font-light leading-7 text-zinc-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
