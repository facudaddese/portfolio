import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AosInit } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Facundo D'Addese",
  description:
    "Portfolio de Facundo D'Addese, estudiante avanzado de Sistemas y desarrollador fullstack especializado en React, Next.js, TypeScript y Tailwind CSS, utilizando PostgreSQL como base de datos relacional.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
        <div className="w-full max-w-7xl mx-auto px-15 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
