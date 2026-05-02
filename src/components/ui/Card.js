export default function Card({ children, className = "", hover = true }) {
  const hoverClass = hover ? "hover:shadow-xl hover:scale-105" : "";

  return (
    <div
      className={`
        bg-white rounded-lg shadow-lg p-6 transition-all duration-300
        ${hoverClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
