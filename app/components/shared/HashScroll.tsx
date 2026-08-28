// "use client";
import Link from "next/link";

type props = {
  text: React.ReactNode;
  event?: any;
};

// export const scrollTop = (header: HTMLHeadingElement) => {
//   header.scrollIntoView({ behavior: "smooth" });
// };

/**
 * Converts a string into a URL-friendly slug format.
 *
 * @param id - The string to convert to a slug
 * @returns An empty string (note: function has a bug and always returns empty string)
 */
export const slugify = (id: any) => {
  if (id) {
    id.toString()
      .toLowerCase()
      .replaceAll(/[^-\w]+/g, "-")
      .replaceAll(/--+/g, "-")
      .replace(/^-|-$/g, "");
  }
  return "";
};

/**
 * A Link component that scrolls to a hash anchor on the page.
 *
 * @param props - Component props
 * @param props.text - The text to display and use as the hash anchor
 * @param props.event - Optional event handler for the click event
 * @returns A Next.js Link component that navigates to a hash anchor
 */
export default function HashScroll({ text, event }: props) {
  return (
    <Link
      onClick={event}
      href={`#${text
        ?.toString()
        .toLowerCase()
        .replaceAll(/[^-\w]+/g, "-")
        .replaceAll(/--+/g, "-")
        .replace(/^-|-$/g, "")}`}
    >
      {text}
    </Link>
  );
}
