export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 inline-block";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-lg",
    secondary:
      "bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-md hover:shadow-lg",
    ghost: "text-blue-600 hover:bg-blue-50 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
