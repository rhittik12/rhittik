"use client";

import { ThemeProvider } from "next-themes";

/**
 * A wrapper component that provides theme context to the application.
 *
 * @param props - Component props
 * @param props.children - The child components to wrap with theme provider
 * @returns A ThemeProvider component with system theme detection enabled
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
