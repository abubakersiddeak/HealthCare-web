import { MdEmergency, MdLocalHospital, MdLocalShipping } from "react-icons/md";
import Card from "@/components/ui/Card";

export default function HighlightsSection() {
  const highlights = [
    {
      icon: MdEmergency,
      title: "24/7 Service",
      description: "Always available for emergencies and urgent care needs",
    },
    {
      icon: MdLocalHospital,
      title: "Expert Doctors",
      description: "Experienced medical professionals dedicated to your health",
    },
    {
      icon: MdLocalShipping,
      title: "Ambulance",
      description: "Fast ambulance support for emergency transfers and care",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((highlight) => {
          const Icon = highlight.icon;
          return (
            <Card key={highlight.title} hover={false}>
              <div className="text-center">
                <Icon className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
