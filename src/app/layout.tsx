import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vicente Roa | Desarrollador de Software",
    template: "%s | Vicente Roa Portfolio",
  },
  description:
    "Portafolio de Vicente Roa, desarrollador de software especializado en desarrollo web moderno, con proyectos en React, Next.js, JavaScript y TypeScript.",
  keywords: [
    "Vicente Roa Carreño",
    "Vicente Roa Chile",
    "desarrollador Full Stack",
    "desarrollador de software",
    "Vicente Roa Desarrollo Web",
    "Vicente Roa Desarrollador Web",
    "Vicente Roa Desarrollador de Software",
    "desarrollo web",
    "ingeniero de software",
    "portafolio",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "desarrollo frontend",
    "desarrollo backend",
  ],
  authors: [{ name: "Vicente Roa Carreño", url: "https://vctroa.cl" }],
  creator: "Vicente Roa Carreño",
  publisher: "Vicente Roa Carreño",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://vctroa.cl",
    title: "Vicente Roa | Desarrollador de Software",
    description:
      "Portafolio de Vicente Roa, desarrollador de software especializado en desarrollo web moderno, con proyectos en React, Next.js, JavaScript y TypeScript.",
    images: [
      {
        url: "https://vctroa.cl/vctroa_wp.jpg",
        width: 1200,
        height: 630,
        alt: "Vicente Roa | Desarrollador de Software",
        type: "image/jpeg",
      },
    ],
    siteName: "Vicente Roa Portfolio",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Reemplaza con tu handle de Twitter/X
    creator: "@yourTwitterHandle",
    title: "Vicente Roa | Desarrollador de Software",
    description:
      "Descubre el portafolio de Vicente Roa, con proyectos en desarrollo web Full Stack.",
    images: [
      {
        url: "https://vctroa.cl/vctroa_wp.jpg",
        alt: "Portafolio de Vicente Roa",
      },
    ],
  },
  alternates: {
    canonical: "https://vctroa.cl",
    languages: {
      "es-CL": "https://vctroa.cl",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "cT9ZON0cv33ocvfwfHPzyhgVNXR2UtwAYGBfeRHEXwg",
  },
  category: "portfolio",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head />
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