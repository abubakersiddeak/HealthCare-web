import Card from "@/components/ui/Card";
import { MdAccessTime, MdPerson } from "react-icons/md";

export default function DoctorCard({ doctor }) {
  const initials = doctor.name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Card>
      <div
        className={`mb-4 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br ${
          doctor.accent || "from-blue-500 to-emerald-400"
        }`}
        aria-label={doctor.name}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-2xl font-black text-blue-700 shadow-lg">
          {initials || <MdPerson />}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
      <p className="text-blue-600 font-semibold mb-3">{doctor.specialty}</p>
      <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
      <div className="flex items-start gap-2 text-gray-700 text-sm">
        <MdAccessTime className="text-lg flex-shrink-0 text-emerald-500 mt-1" />
        <span>{doctor.visitingTime}</span>
      </div>
    </Card>
  );
}
