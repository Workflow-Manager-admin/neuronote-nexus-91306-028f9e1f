import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Core layout shell dependencies
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/main/navbar";
import Sidebar from "@/components/main/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neuronote Nexus",
  description: "A Notion & Obsidian hybrid with a vibrant theme and AI.",
};

// PUBLIC_INTERFACE
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system">
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen" style={{ minHeight: "100vh" }}>
              <Navbar />
              <main className="flex-auto flex flex-col" style={{ minHeight: "0", minWidth: "0" }}>
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
