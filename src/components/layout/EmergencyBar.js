"use client";

import { MdEmergency, MdPhone } from "react-icons/md";
import { SITE_CONFIG } from "@/data/constants";

export default function EmergencyBar() {
  return (
    <div className="bg-red-600 text-white py-2 px-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <div className="flex items-center gap-2">
          <MdEmergency className="text-xl animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase">
            24/7 EMERGENCY HOTLINE
          </span>
        </div>
        <a
          href={`tel:${SITE_CONFIG.emergencyNumber}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-white/10 px-3 py-1 rounded-full border border-white/20"
        >
          <MdPhone className="text-sm" />
          <span className="font-black text-sm sm:text-base tracking-tight">
            {SITE_CONFIG.emergencyNumber}
          </span>
        </a>
      </div>
    </div>
  );
}
