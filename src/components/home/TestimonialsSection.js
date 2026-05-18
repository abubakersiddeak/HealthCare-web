import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { MdStar, MdFormatQuote } from "react-icons/md";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden relative">
       {/* Background Decoration */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-50/50 -z-10 skew-y-2 origin-bottom-left"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Real experiences from people who trusted us with their health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="relative group">
              <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <MdStar 
                        key={i} 
                        className={`text-xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-200"}`} 
                      />
                    ))}
                  </div>
                  <MdFormatQuote className="text-4xl text-blue-100 group-hover:text-blue-200 transition-colors" />
                </div>
                
                <p className="text-gray-700 mb-8 italic leading-relaxed flex-grow">
                  &ldquo;{testimonial.message}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 leading-none mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Verified Patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
