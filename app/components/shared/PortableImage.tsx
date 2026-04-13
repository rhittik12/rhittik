import ImageComponent from "./ImageComponent";

type imageProp = {
  value: {
    image?: string;
    lqip?: string;
    alt: string;
    caption: string;
  };
};

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
