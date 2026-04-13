import Image from "next/image";

type imageProp = {
  src: {
    image?: string;
    lqip?: string;
  };
  alt: string;
};

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
