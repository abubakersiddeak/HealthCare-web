export default function SectionHeading({ title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="h-1 w-24 bg-blue-600 rounded-full mt-6 mx-auto"></div>
    </div>
  );
}
