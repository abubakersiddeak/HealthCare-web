import PageHeading from "@/components/common/PageHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <>
      <PageHeading
        title="Our Services"
        description="Comprehensive healthcare services tailored to your needs"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
}
