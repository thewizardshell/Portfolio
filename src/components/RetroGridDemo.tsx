"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { personalData } from "@/data/personal-data";

const RetroGrid = dynamic(() => import("./ui/retro-grid"), { ssr: false });

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-background">
      <RetroGrid />
      <div className="z-10 flex items-center space-x-8 px-8">
        <Image
          src="/me-logo.webp"
          alt="Vicente Roa"
          loading="lazy"
          width={200}
          height={200}
          className="rounded-full border-4 border-white/10 bg-background/90 backdrop-blur-lg"
        />
        <div className="flex flex-col">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black via-black to-[#8c1eff] bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent dark:from-white dark:via-white dark:to-[#8c1aff]">
            {personalData.name}
          </span>
          <span className="text-lg">{personalData.holder}</span>
        </div>
      </div>
    </div>
  );
}
