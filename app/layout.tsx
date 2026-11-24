import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AosInit } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Facundo D'Addese | Frontend Developer",
  description:
    "Portfolio de Facundo D'Addese, estudiante avanzado de Sistemas y desarrollador frontend especializado en React, Next.js, TypeScript y Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/devicon.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")!=="light")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-zinc-950 dark:text-gray-100 transition-colors">
        <AosInit />
        <div className="w-full max-w-7xl mx-auto px-15 min-h-screen border bg-gray-200/10 border-gray-500/10 dark:bg-gray-500/10 dark:border-gray-100/15">
          {children}
        </div>
      </body>
    </html>
  );
}
