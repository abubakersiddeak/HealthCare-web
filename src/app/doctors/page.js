import PageHeading from "@/components/common/PageHeading";
import DoctorCard from "@/components/doctors/DoctorCard";
import { DOCTORS } from "@/data/doctors";

export default function Doctors() {
  return (
    <>
      <PageHeading
        title="Our Doctors"
        description="Meet our team of experienced and dedicated medical professionals"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </>
  );
}
