"use client";

import { MdEmergency, MdPhone } from "react-icons/md";
import { SITE_CONFIG } from "@/data/constants";

export default function EmergencyBar() {
  return (
    <div className="bg-red-600 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <MdEmergency className="text-2xl" />
          <span className="text-sm font-semibold">EMERGENCY HOTLINE</span>
        </div>
        <a
          href={`tel:${SITE_CONFIG.emergencyNumber}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <MdPhone className="text-lg" />
          <span className="font-bold text-lg">
            {SITE_CONFIG.emergencyNumber}
          </span>
        </a>
      </div>
    </div>
  );
}
