import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";

export default function ServicesPreview() {
  const previewServices = SERVICES.slice(0, 6);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive healthcare services designed for your wellbeing"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
