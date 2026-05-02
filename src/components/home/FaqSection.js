"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/data/faqs";

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
        />
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <MdExpandMore
                  className={`text-2xl text-blue-600 flex-shrink-0 transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
