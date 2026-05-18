export default function PageHeading({ title, description }) {
  return (
    <div className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/20 skew-x-12 translate-x-1/4"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-500/30">
          Talukder Clinic
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
