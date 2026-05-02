"use client";

import Link from "next/link";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
} from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { COPYRIGHT_YEAR, SITE_CONFIG, SOCIAL_MEDIA } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              {SITE_CONFIG.siteName.split(" ")[0]}+
            </h3>
            <p className="text-gray-400">{SITE_CONFIG.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#emergency"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services#icu"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ICU Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services#maternity"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Maternity Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services#surgery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Surgery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MdPhone className="text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Emergency</p>
                  <a
                    href={`tel:${SITE_CONFIG.emergencyNumber}`}
                    className="text-white hover:text-emerald-500 transition-colors"
                  >
                    {SITE_CONFIG.emergencyNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MdEmail className="text-emerald-500 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">{SITE_CONFIG.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href={SOCIAL_MEDIA.facebook}
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href={SOCIAL_MEDIA.twitter}
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href={SOCIAL_MEDIA.instagram}
              className="text-gray-400 hover:pink-400 transition-colors text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIAL_MEDIA.linkedin}
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © {COPYRIGHT_YEAR} {SITE_CONFIG.siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
