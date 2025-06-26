const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        // Obsidian-inspired pitch black w/ neon blue, and light white & blue
        "nexus-black": "#08080A",
        "nexus-neon": "#3A7BFF",
        "nexus-accent": "#2563EB", // Deep blue for light mode & accent
        "nexus-bg-dark": "#08080A", // Pitch black
        "nexus-bg-light": "#F6F8FF", // Super-pale blue
        "nexus-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
