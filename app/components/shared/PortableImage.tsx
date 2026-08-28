import ImageComponent from "./ImageComponent";

type imageProp = {
  value: {
    image?: string;
    lqip?: string;
    alt: string;
    caption: string;
  };
};

/**
 * Displays an image with an optional caption in a figure element.
 *
 * @param props - Component props
 * @param props.value - Object containing image data
 * @param props.value.image - The image URL
 * @param props.value.lqip - Optional low-quality image placeholder for blur effect
 * @param props.value.alt - Alt text for the image
 * @param props.value.caption - Optional caption text to display below the image
 * @returns A figure element containing the image and optional caption, or null if no image
 */
export default function SampleImageComponent({ value }: imageProp) {
  if (!value?.image) return null;

  return (
    <figure className="my-10">
      <ImageComponent src={value} alt={value.alt} />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
