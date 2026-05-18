"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu, MdClose, MdPhone } from "react-icons/md";
import { SITE_CONFIG } from "@/data/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Doctors", href: "/doctors" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110">
              <Image
                src={"/tcnh.png"}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-blue-600 leading-none">
                {SITE_CONFIG.siteName.split(" ")[0]}
                <span className="text-emerald-500">+</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase">
                Clinic & Nursing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-semibold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.generalPhone}`}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-bold transition-colors"
            >
              <MdPhone className="text-xl text-emerald-500" />
              <span className="hidden lg:inline">{SITE_CONFIG.generalPhone}</span>
            </a>
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 font-bold hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-2xl text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4 border-t mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 text-lg font-bold text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 flex flex-col gap-4"
                >
                  <Link
                    href="/appointment"
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 transition-colors font-bold text-center shadow-lg shadow-blue-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.emergencyNumber}`}
                    className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-bold text-center border border-red-100 flex items-center justify-center gap-2"
                  >
                    <MdPhone /> Emergency: {SITE_CONFIG.emergencyNumber}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
