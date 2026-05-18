"use client";

import { useState } from "react";
import { MdExpandMore, MdHelpOutline } from "react-icons/md";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [openId, setOpenId] = useState(FAQS[0].id);

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <MdHelpOutline className="text-lg" /> Support Center
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Questions? We Have Answers</h2>
          <p className="text-gray-600">Everything you need to know about Talukder Clinic services and policies.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openId === faq.id 
                  ? "bg-white shadow-xl ring-1 ring-blue-100" 
                  : "bg-white/60 hover:bg-white shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between transition-colors"
              >
                <h3 className={`text-lg font-bold text-left pr-4 ${
                  openId === faq.id ? "text-blue-600" : "text-gray-900"
                }`}>
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openId === faq.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  <MdExpandMore
                    className={`text-2xl transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="p-4 bg-blue-50/50 rounded-xl border-l-4 border-blue-600">
                        <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
