"use client";

/**
 * A simple wrapper component that renders its children without any modifications.
 *
 * @param props - Component props
 * @param props.children - The child elements to render
 * @returns The children elements wrapped in a React fragment
 */
export default function UnmountStudio({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
