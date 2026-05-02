"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MdAccessTime,
  MdArrowForward,
  MdEmergency,
  MdLocalHospital,
  MdLocalShipping,
  MdMedicalServices,
  MdPhone,
  MdVerified,
} from "react-icons/md";
import { SITE_CONFIG } from "@/data/constants";
import { Test } from "@/data/test";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlights = [
  { icon: MdAccessTime, label: "Open 24/7" },
  { icon: MdMedicalServices, label: "Doctor Visit" },
  { icon: MdLocalShipping, label: "Ambulance" },
];

export default function HeroSection() {
  return (
    <section className="relative  flex justify-center items-center min-h-[75vh] overflow-hidden bg-[url('/herobg.webp')] bg-cover bg-center px-4 py-13 ">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="my-auto">
        <motion.div
          className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl"
            >
              {SITE_CONFIG.siteName} for your family&apos;s health.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
            >
              Clean wards, experienced doctors, caring nurses, maternity
              support, emergency care, and diagnostics under one trusted roof.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Book Appointment
                <MdArrowForward className="text-xl" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.emergencyNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-100 bg-white px-7 py-4 text-base font-bold text-red-600 shadow-sm transition hover:bg-red-50"
              >
                <MdPhone className="text-xl" />
                Call Emergency
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-lg border border-blue-100 bg-white p-4 shadow-sm"
                  >
                    <span className="rounded-full bg-emerald-50 p-2 text-emerald-600">
                      <Icon className="text-xl" />
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="w-full max-w-5xl mx-auto md:px-0"
          >
            <div className="relative rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* 🔷 Glow Background */}
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl" />

              {/* 🔷 Header */}
              <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-white/40">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg">
                    <MdLocalHospital className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-2xl font-semibold text-slate-800">
                      Health Interface
                    </h2>
                    <p className="text-[10px] md:text-[15px] text-slate-700">
                      Smart Diagnostic System
                    </p>
                  </div>
                </div>

                <span className="text-[15px] bg-emerald-100/70 text-emerald-600 px-2 py-1 rounded-full backdrop-blur">
                  ● Live
                </span>
              </div>

              {/*  Services Grid */}
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 p-4 md:p-6">
                {Test.map((t, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="group relative rounded-xl h-20 md:h-28 2xl:h-38 overflow-hidden border border-white/40 bg-white/50 backdrop-blur shadow-sm"
                  >
                    <div className="relative w-full h-full ">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />

                      {/* overlay glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>

                    <div className="p-3">
                      <p className="text-xs md:text-sm font-extrabold text-white absolute bottom-2 left-3">
                        {t.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Info Cards */}
              <div className="relative z-10 grid md:grid-cols-2 gap-3 px-4 pb-5">
                {/* Nursing */}
                <motion.div
                  className="flex items-center justify-between rounded-xl bg-white/60 backdrop-blur border border-white/40 p-3 shadow-md"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-emerald-100/70 text-emerald-600 p-2 rounded-full">
                      <MdVerified />
                    </span>
                    <div>
                      <p className="text-[15px] text-slate-500">Nursing</p>
                      <p className="text-sm font-semibold text-slate-800">
                        Always Ready
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Ambulance */}
                <motion.div
                  className="flex items-center justify-between rounded-xl bg-white/60 backdrop-blur border border-white/40 p-3 shadow-md"
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-red-100/70 text-red-600 p-2 rounded-lg">
                      <MdLocalShipping />
                    </span>
                    <div>
                      <p className="text-[15px] text-slate-500">Ambulance</p>
                      <p className="text-sm font-semibold text-slate-800">
                        24/7 Active
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
