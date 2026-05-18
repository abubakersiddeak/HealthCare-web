import Card from "@/components/ui/Card";
import { MdAccessTime, MdVerified, MdStar } from "react-icons/md";
import Image from "next/image";

export default function DoctorCard({ doctor }) {
  return (
    <Card className="p-0 overflow-hidden border-none group flex flex-col h-full shadow-md hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={
            doctor.avatar ||
            "https://i.ibb.co.com/20yB5J5L/vecteezy-man-empty-avatar-vector-photo-placeholder-for-social-36594092.webp"
          }
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Accent Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${doctor.accent || 'from-blue-600/20'} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
        
        {/* Specialty Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
            {doctor.specialty.split(" ")[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-1">
          <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
            {doctor.name}
          </h3>
          <MdVerified className="text-blue-500 text-lg flex-shrink-0" />
        </div>
        
        <p className="text-sm font-bold text-emerald-600 mb-3 tracking-tight">
          {doctor.specialty}
        </p>
        
        <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2 italic">
          &quot;{doctor.bio}&quot;
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-start gap-2.5 bg-gray-50 p-3 rounded-xl">
            <MdAccessTime className="text-lg text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Availability</p>
              <p className="text-xs font-bold text-gray-700">{doctor.visitingTime}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
