import Image from "next/image";

type faviconType = {
  domain: string;
  alt: string;
};

/**
 * Displays a favicon image for a given domain using Google's favicon service.
 *
 * @param props - Component props
 * @param props.domain - The domain URL to fetch the favicon for
 * @returns A Next.js Image component displaying the domain's favicon
 */
export default function Favicon({ domain }: faviconType) {
  /**
   * Extracts the primary domain name from a URL.
   *
   * @param url - The URL to extract the domain from
   * @returns The primary domain name (e.g., "google" from "www.google.com") or undefined
   */
  function extractDomain(url: string) {
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/.\n]+\.[a-z]{2,})(?:\/|$)/i
    );
    if (match) {
      const fullDomain = match[1];
      const parts = fullDomain.split(".");
      if (parts.length >= 2) {
        return parts[0];
      }
    }
  }

  return (
    <Image
      className="mr-2"
      src={`http://www.google.com/s2/favicons?domain=${domain}`}
      width={17}
      height={17}
      alt={extractDomain(domain) || ""}
    />
  );
}
