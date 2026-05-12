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
      <div>
        {" "}
        <img
          src={
            doctor.avatar ||
            "https://i.ibb.co.com/20yB5J5L/vecteezy-man-empty-avatar-vector-photo-placeholder-for-social-36594092.webp"
          }
          alt={doctor.name}
          className="h-50 w-full"
        />
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
