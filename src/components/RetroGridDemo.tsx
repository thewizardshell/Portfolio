"use client";

import RetroGrid from "@/components/ui/retro-grid";
import BlurIn from "@/components/ui/blur-in";
import BlurFade from "./ui/blur-fade";
import Image from "next/image";
import { personalData } from "@/data/personal-data";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-background">
      <RetroGrid />
      <BlurFade>
        <div className="z-10 flex items-center space-x-8 px-8">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E03AQE4pn9Nr0FNJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727827425632?e=1733356800&v=beta&t=Kb3NYLtnJ-FSC-LYHAA61bzf1YFZl-frNDrsC_1gVaw"
            alt="Vicente Roa"
            width={200}
            height={200}
            className="rounded-full border-4 border-white/10 bg-background/90 backdrop-blur-lg"
          />
          <div className="flex flex-col">
            <BlurIn
              word={personalData.name}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black via-black to-[#8c1eff] bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent dark:from-white dark:via-white dark:to-[#8c1aff]"
            />
            <span className="text-lg">{personalData.holder}</span>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
