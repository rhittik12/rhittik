/**
 * An embedded YouTube video player component.
 *
 * @param props - Component props
 * @param props.videoId - The YouTube video ID to embed (returns null if not provided)
 * @returns An iframe element with the embedded YouTube video, or null if no videoId
 */
export default function YoutubeIframe({ videoId }: { videoId: string | null }) {
  if (!videoId) {
    return null;
  }
  return (
    <iframe
      className="aspect-video"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
