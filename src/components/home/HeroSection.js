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
    <section className="relative overflow-hidden bg-[url('/herobg.webp')] bg-cover bg-center px-4 py-13 ">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="">
        <motion.div
          className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl"
            >
              Caring nursing home for your family&apos;s health.
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

          <motion.div variants={fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-lg border border-blue-100 bg-white p-4 shadow-2xl shadow-blue-200/60">
              <div className="relative min-h-[430px] overflow-hidden rounded-lg bg-gradient-to-b from-sky-100 via-white to-emerald-50">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-emerald-100 to-emerald-200" />

                <motion.div
                  className="absolute left-8 right-8 top-12 rounded-lg bg-white shadow-xl"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.7 }}
                >
                  <div className="rounded-t-lg bg-blue-600 px-6 py-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg bg-white p-2 text-blue-600">
                          <MdLocalHospital className="text-3xl" />
                        </span>
                        <div>
                          <p className="text-sm text-blue-100">Welcome to</p>
                          <h2 className="text-xl font-black">
                            HealthCare Plus
                          </h2>
                        </div>
                      </div>
                      <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold">
                        ER
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-3 p-6">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-10 rounded-md border border-blue-100 bg-blue-50"
                      />
                    ))}
                  </div>

                  <div className="mx-auto mb-6 flex h-20 w-28 items-center justify-center rounded-t-lg bg-slate-800 text-white">
                    <MdMedicalServices className="text-4xl" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-12 left-10 w-52 rounded-lg bg-white p-4 shadow-xl"
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                      <MdVerified className="text-xl" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">Nursing Care</p>
                      <p className="font-bold text-slate-900">
                        Always Available
                      </p>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-emerald-100">
                    <motion.div
                      className="h-2 w-4/5 rounded-full bg-emerald-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-12 right-8 rounded-lg bg-white p-4 shadow-xl"
                  animate={{ x: [0, -8, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-red-50 p-2 text-red-600">
                      <MdLocalShipping className="text-3xl" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">Ambulance</p>
                      <p className="font-bold text-slate-900">Ready 24/7</p>
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
