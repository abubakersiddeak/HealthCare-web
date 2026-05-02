import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { MdStar } from "react-icons/md";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Patient Testimonials"
          subtitle="Hear what our patients have to say about their experience"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} hover={false}>
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <MdStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.message}&rdquo;
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
