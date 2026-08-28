"use client";

/**
 * A simple client-side wrapper component that renders its children.
 *
 * @param props - Component props
 * @param props.children - The child elements to render
 * @returns The children elements wrapped in a React fragment
 */
export default function RenderChildren({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
