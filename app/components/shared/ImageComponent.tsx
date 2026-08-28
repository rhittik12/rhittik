import Image from "next/image";

type imageProp = {
  src: {
    image?: string;
    lqip?: string;
  };
  alt: string;
};

/**
 * A responsive image component with lazy loading and optional blur placeholder.
 *
 * @param props - Component props
 * @param props.src - Object containing image source data
 * @param props.src.image - The image URL
 * @param props.src.lqip - Optional low-quality image placeholder for progressive loading
 * @param props.alt - Alt text for accessibility
 * @returns A Next.js Image component with optimized loading, or null if no image URL
 */
export default function ImageComponent({ src, alt }: imageProp) {
  if (!src?.image) return null;

  return (
    <Image
      className="rounded-sm object-contain object-left-top aspect-auto duration-300"
      src={src.image}
      alt={alt}
      loading="lazy"
      width={1920}
      height={1080}
      quality={100}
      sizes="100vw"
      placeholder={src?.lqip ? "blur" : "empty"}
      blurDataURL={src?.lqip}
    />
  );
}
