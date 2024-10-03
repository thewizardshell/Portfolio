"use client";
import React from "react";
import BlurFade from "../ui/blur-fade";
import { Badge } from "@/components/ui/badge";

const Skills = ({ skills }: { skills: string[] }) => (
  <BlurFade inView={true} delay={0.4}>
    <section className="mb-28">
      <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-base py-1 px-3"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  </BlurFade>
);
export default Skills;
