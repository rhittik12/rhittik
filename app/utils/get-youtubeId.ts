/**
 * Extracts the video ID from a YouTube URL.
 *
 * @param url - The YouTube URL to parse (supports youtube.com, youtu.be, watch, embed, shorts formats)
 * @returns The video ID string if found, or null if the URL format is invalid
 *
 * @example
 * ```typescript
 * getYoutubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // Returns "dQw4w9WgXcQ"
 * getYoutubeId("https://youtu.be/dQw4w9WgXcQ") // Returns "dQw4w9WgXcQ"
 * ```
 */
export default function getYoutubeId(url: any) {
  const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  const match = regex.exec(url);

  if (!match) {
    return null;
  }
  return match[3];
}
