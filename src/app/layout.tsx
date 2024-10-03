import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

const onest = Onest({ subsets: ["latin"] });

const author: Author = {
  name: "Vicente Roa",
  url: "https://vctroa.vercel.app/",
};

export const metadata: Metadata = {
  title: "Vicente Roa | Full Stack Developer",
  description: "Vicente Roa's personal website",
  keywords:
    "Vicente Roa, Full Stack Developer, Web Development, JavaScript, React, Next.js",
  authors: author,
  openGraph: {
    title: "Vicente Roa | Full Stack Developer",
    description:
      "Vicente Roa's personal website showcasing skills and projects.",
    url: "https://vctroa.vercel.app/",
    siteName: "Vicente Roa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vicente Roa - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicente Roa | Full Stack Developer",
    description:
      "Vicente Roa's personal website showcasing skills and projects.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
