"use client";

import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

// PUBLIC_INTERFACE
export type Theme = "light" | "dark" | "system";
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

// Context for theme state and toggle method
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

// PUBLIC_INTERFACE
export function useTheme() {
  return useContext(ThemeContext);
}

// PUBLIC_INTERFACE
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // Determine system theme (light or dark)
  const getSystemTheme = () => {
    if (typeof window === "undefined") return defaultTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Toggle & persist theme
  const setTheme = (theme: Theme) => {
    setThemeState(theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, theme);
    }
  };

  // Apply class to <html> and read/persist on mount
  useLayoutEffect(() => {
    const root = window.document.documentElement;
    let applied = theme;
    if (theme === "system") applied = getSystemTheme();

    root.classList.remove("light", "dark");
    root.classList.add(applied);

    // Tailwind expects "dark" class, variables in globals.css are mode-specific
  }, [theme]);

  // Read theme on mount
  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    if (stored) setThemeState(stored);
    // Listen for system preference changes if "system" is selected
    if (theme === "system") {
      const listener = (e: MediaQueryListEvent) => {
        setThemeState(e.matches ? "dark" : "light");
      };
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
