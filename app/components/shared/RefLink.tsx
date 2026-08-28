import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

/**
 * A Next.js Link component that appends a referral parameter to external URLs.
 *
 * @param props - Component props
 * @param props.href - The destination URL
 * @param props.children - The content to display inside the link
 * @param props.className - Optional CSS classes to apply to the link
 * @param props.target - The target attribute for the link (defaults to "_blank")
 * @returns A Link component with a referral parameter appended to the URL
 */
export default function RefLink({
  href,
  children,
  className,
  target = "_blank",
}: {
  href: Url;
  children?: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <Link
      href={href + "?ref=rhittik.vercel.app"}
      rel="noopener"
      target={target}
      className={className}
    >
      {children}
    </Link>
  );
}
