/**
 * Utility function to merge Tailwind CSS classes conditionally
 * Useful for combining styles dynamically
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
