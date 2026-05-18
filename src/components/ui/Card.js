export default function Card({ children, className = "", hover = true }) {
  const hoverClass = hover ? "hover:shadow-2xl hover:scale-[1.02] cursor-pointer" : "";

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 transition-all duration-500
        ${hoverClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
