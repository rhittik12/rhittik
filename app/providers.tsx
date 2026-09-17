"use client";

import { ThemeProvider } from "next-themes";
import PageTransition from "./components/global/PageTransition";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <PageTransition>{children}</PageTransition>
    </ThemeProvider>
  );
}
