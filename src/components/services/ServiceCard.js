import Card from "@/components/ui/Card";
import {
  MdOutlineMedicalServices,
  MdOutlineEmergency,
  MdOutlineLocalHospital,
  MdOutlineAnalytics,
  MdOutlinePregnantWoman,
  MdOutlineFavoriteBorder,
  MdOutlineHealthAndSafety,
  MdOutlineSpa,
  MdArrowForward,
} from "react-icons/md";
import Link from "next/link";

const SERVICE_ICONS = {
  dental: MdOutlineHealthAndSafety, // No MdOutlineTooth in standard md icons, using alternative
  emergency: MdOutlineEmergency,
  hospital: MdOutlineLocalHospital,
  lab: MdOutlineAnalytics,
  maternity: MdOutlinePregnantWoman,
  pediatrics: MdOutlineFavoriteBorder,
  surgery: MdOutlineMedicalServices,
  wellness: MdOutlineSpa,
};

const SERVICE_COLORS = {
  emergency: "bg-red-50 text-red-600",
  hospital: "bg-blue-50 text-blue-600",
  maternity: "bg-pink-50 text-pink-600",
  surgery: "bg-emerald-50 text-emerald-600",
  lab: "bg-purple-50 text-purple-600",
  dental: "bg-cyan-50 text-cyan-600",
  pediatrics: "bg-orange-50 text-orange-600",
  wellness: "bg-teal-50 text-teal-600",
};

export default function ServiceCard({ service }) {
  const Icon = SERVICE_ICONS[service.icon] || MdOutlineLocalHospital;
  const colorClass = SERVICE_COLORS[service.icon] || "bg-blue-50 text-blue-600";

  return (
    <Card className="flex flex-col h-full group">
      <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500`}>
        <Icon className="text-3xl" />
      </div>
      <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>
      <Link 
        href={`/services#${service.slug}`}
        className="inline-flex items-center gap-2 text-blue-600 font-bold group/link"
      >
        Learn More 
        <MdArrowForward className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </Card>
  );
}
