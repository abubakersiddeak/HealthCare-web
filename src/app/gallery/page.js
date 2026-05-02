import PageHeading from "@/components/common/PageHeading";
import {
  MdBiotech,
  MdChildCare,
  MdEmergency,
  MdHotel,
  MdLocalHospital,
  MdMedication,
  MdMonitorHeart,
  MdPregnantWoman,
} from "react-icons/md";

const galleryItems = [
  {
    id: 1,
    title: "Emergency Department",
    icon: MdEmergency,
    gradient: "from-red-500 to-blue-600",
  },
  {
    id: 2,
    title: "Operating Theater",
    icon: MdLocalHospital,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    title: "ICU Ward",
    icon: MdMonitorHeart,
    gradient: "from-emerald-500 to-blue-500",
  },
  {
    id: 4,
    title: "Patient Room",
    icon: MdHotel,
    gradient: "from-sky-500 to-emerald-400",
  },
  {
    id: 5,
    title: "Laboratory",
    icon: MdBiotech,
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    id: 6,
    title: "Pharmacy",
    icon: MdMedication,
    gradient: "from-emerald-600 to-teal-400",
  },
  {
    id: 7,
    title: "Maternity Ward",
    icon: MdPregnantWoman,
    gradient: "from-blue-500 to-emerald-500",
  },
  {
    id: 8,
    title: "Pediatric Unit",
    icon: MdChildCare,
    gradient: "from-cyan-500 to-blue-500",
  },
];

export default function Gallery() {
  return (
    <>
      <PageHeading
        title="Hospital Gallery"
        description="Explore our modern facilities and state-of-the-art equipment"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`group relative min-h-64 overflow-hidden rounded-lg bg-gradient-to-br ${item.gradient} p-6 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="relative flex h-full flex-col justify-between">
                  <Icon className="text-6xl transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
                      Facility
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
