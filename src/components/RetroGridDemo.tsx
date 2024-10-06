"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { personalData } from "@/data/personal-data";

const RetroGrid = dynamic(() => import("./ui/retro-grid"), { ssr: false });

export function RetroGridDemo() {
  return (
    <div className="relative flex min-h-[300px] sm:min-h-[400px] md:h-[500px] w-full items-center justify-center overflow-hidden bg-background">
      <RetroGrid />
      <div className="z-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 px-4 sm:px-8">
        <Image
          src="/me-logo.webp"
          alt="Vicente Roa"
          loading="lazy"
          width={200}
          height={200}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white/10 bg-background/90 backdrop-blur-lg"
        />
        <div className="flex flex-col text-center sm:text-left">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black via-black to-[#8c1eff] bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold leading-none tracking-tighter text-transparent dark:from-white dark:via-white dark:to-[#8c1aff]">
            {personalData.name}
          </span>
          <span className="text-base sm:text-lg md:text-xl mt-2">
            {personalData.holder}
          </span>
        </div>
      </div>
    </div>
  );
}
