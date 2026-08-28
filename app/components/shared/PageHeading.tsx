import { Slide } from "@/app/animation/Slide";

type HeadingType = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

/**
 * A page heading component with title, description, and optional children with slide animation.
 *
 * @param props - Component props
 * @param props.title - The main heading text to display
 * @param props.description - Optional description text below the heading
 * @param props.children - Optional additional content to render below the description
 * @returns A header element with animated heading, description, and children
 */
export default function PageHeading({
  title,
  description,
  children,
}: HeadingType) {
  return (
    <header className="mb-10">
      <Slide>
        <h1 className="max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
        {children}
      </Slide>
    </header>
  );
}
