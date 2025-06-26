"use client";

import React from "react";
import { useTheme } from "../providers/theme-provider";

// PUBLIC_INTERFACE
export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <aside className="sidebar flex flex-col justify-between py-6 px-2">
      <div className="flex flex-col gap-6 items-center">
        {/* Logo - theme based */}
        <div className="flex items-center gap-3 mb-8">
          {/* Neon blue logo circle for dark, blue circle for light */}
          <span
            className={`rounded-full w-10 h-10 shrink-0 flex items-center justify-center ${
              theme === "dark"
                ? "bg-[var(--color-accent)] glow-blue"
                : "bg-[var(--color-accent)]"
            }`}
            aria-label="Nexus logo"
          >
            <span className="text-lg font-bold text-white">N</span>
          </span>
        </div>
        {/* Navigation - demo entries */}
        <nav className="flex flex-col gap-4 w-full">
          <a
            href="#"
            className="block py-2 px-3 rounded text-[15px] font-[500] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-fg)] transition-colors"
          >
            Notes
          </a>
          <a
            href="#"
            className="block py-2 px-3 rounded text-[15px] font-[500] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-fg)] transition-colors"
          >
            Graph
          </a>
          <a
            href="#"
            className="block py-2 px-3 rounded text-[15px] font-[500] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-fg)] transition-colors"
          >
            AI (coming)
          </a>
        </nav>
      </div>

      {/* Bottom — Theme quick indicator */}
      <div className="text-xs text-[var(--color-fg)] opacity-60 px-2 text-center">
        Theme: <span className="font-bold">{theme}</span>
      </div>
    </aside>
  );
}
