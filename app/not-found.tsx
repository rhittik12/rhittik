import { Metadata } from "next";
import NotFoundComponent from "./components/shared/NotFound";

export const metadata: Metadata = {
  title: "Error 404",
};

/**
 * The custom 404 not found page component.
 *
 * @returns A 404 error page with a friendly message
 */
export default function NotFound() {
  return (
    <NotFoundComponent
      title="Error 404!"
      description="Oopsies! This page does not exist on rhittik.vercel.app. While you're here, you can read some featured post below."
    />
  );
}
