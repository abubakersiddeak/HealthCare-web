import { MdOutlineEmergency, MdOutlinePeople, MdOutlineLocalShipping, MdOutlineVerifiedUser, MdOutlineAccessTime, MdOutlineThumbUp } from "react-icons/md";

export default function HighlightsSection() {
  const highlights = [
    {
      icon: MdOutlineAccessTime,
      title: "24/7 Service",
      description: "Round-the-clock medical care for your peace of mind.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: MdOutlinePeople,
      title: "Expert Doctors",
      description: "Highly qualified specialists with years of experience.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: MdOutlineLocalShipping,
      title: "Ambulance",
      description: "Equipped ambulances ready for rapid response.",
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide high-quality medical services with a focus on patient care and advanced technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="relative group">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2">
                  <div className={`w-14 h-14 ${highlight.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}>
                    <Icon className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick stats or additional trust badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-100">
           <div className="text-center">
             <p className="text-4xl font-black text-blue-600 mb-1">25+</p>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Exp.</p>
           </div>
           <div className="text-center">
             <p className="text-4xl font-black text-emerald-500 mb-1">45+</p>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Specialists</p>
           </div>
           <div className="text-center">
             <p className="text-4xl font-black text-blue-600 mb-1">50k+</p>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Patients</p>
           </div>
           <div className="text-center">
             <p className="text-4xl font-black text-emerald-500 mb-1">24/7</p>
             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Emergency</p>
           </div>
        </div>
      </div>
    </section>
  );
}
