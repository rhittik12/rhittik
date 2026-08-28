/**
 * Calculates the estimated reading time for a given text.
 *
 * @param words - The text content to calculate reading time for
 * @returns A formatted string representing the reading time in minutes (e.g., "5 min")
 *
 * @remarks
 * Uses an average reading speed of 185 words per minute
 */
export function readTime(words: string) {
  // Remove whitespaces
  const trimString = words.trim();

  // Split the string into an array of words using spaces as the delimiter
  const wordsArray = trimString.split(/\s+/);
  const wordCount = wordsArray.length;

  const avgReadTime: number = 185;
  return `${(wordCount / avgReadTime).toFixed(0)} min`;
}
