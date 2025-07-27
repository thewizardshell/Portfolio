"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { personalData } from "@/data/personal-data";
import { useEffect, useState } from "react";

const RetroGrid = dynamic(() => import("./ui/retro-grid"), { ssr: false });

export function RetroGridDemo() {
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex min-h-[400px] md:h-[600px] w-full items-center justify-center overflow-hidden bg-background">
      <RetroGrid />

      <div
        className={`z-10 flex flex-col items-center transition-all duration-700 ease-out ${
          scrolled ? "opacity-90 transform -translate-y-4" : "opacity-100"
        }`}
      >
        <div className="mb-6 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <Image
            src="/me-logo.webp"
            alt="Vicente Roa"
            priority
            width={240}
            height={240}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/20 bg-background/90 relative z-10"
          />
        </div>

        <div className="flex flex-col text-center max-w-xl px-4">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-neutral-900 dark:text-neutral-100 mb-4"
          >
            {personalData.name}
          </h1>

          <p
            className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300"
          >
            {personalData.holder}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-80"
        }`}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-gray-600 rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </div>
  );
}