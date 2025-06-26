"use client";

import React from "react";
import { useTheme } from "../providers/theme-provider";

// PUBLIC_INTERFACE
export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="navbar w-full flex justify-between items-center px-3">
      <div className="flex items-center gap-2 font-semibold text-lg tracking-tight select-none">
        <span className="text-[var(--color-accent)]">Nexus</span>
        <span className="ml-1 text-xs opacity-40 font-mono">alpha</span>
      </div>
      <nav className="flex gap-3 items-center">
        {/* Theme toggle */}
        <button
          className="h-9 px-4 rounded-lg font-semibold transition-colors"
          style={{
            background:
              theme === "dark"
                ? "var(--color-accent)"
                : "rgba(38, 99, 235, 0.09)",
            color:
              theme === "dark"
                ? "#fff"
                : "var(--color-accent)",
            border: "none",
          }}
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? "🌙 Dark" : "💡 Light"}
        </button>
        <a
          href="#"
          className="ml-2 px-4 py-2 rounded-lg border font-medium bg-transparent text-[var(--color-accent)] border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition"
        >
          Docs
        </a>
      </nav>
    </header>
  );
}
