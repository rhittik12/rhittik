import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";

type props = {
  title: string;
  description: string;
};

/**
 * A 404/not found page component with a custom title and description.
 *
 * @param props - Component props
 * @param props.title - The heading text for the not found page
 * @param props.description - The description text explaining the error
 * @returns A styled not found page with an image, title, and description
 */
export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-4xl">
        <Image
          width={80}
          height={80}
          src={duckImage}
          alt="Yellow duck searching"
        />
        <h1 className="font-incognito font-black tracking-tight sm:text-6xl text-3xl lg:leading-[3.7rem] leading-tight mt-6 mb-3">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>
    </main>
  );
}
