"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const defaultTheme = localStorage.getItem("theme") || "dark";
  return (
    <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem>
      {children}
    </ThemeProvider>
  );
}
