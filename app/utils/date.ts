/**
 * Formats a date string into a human-readable format.
 *
 * @param date - The date string to format (ISO format or any valid date string)
 * @returns A formatted date string in "MMM DD, YYYY" format (e.g., "Jan 15, 2026")
 */
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
