"use client";
import React, { type ComponentType } from "react";
import BlurFade from "../ui/blur-fade";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiGo,
  SiPython,
} from "react-icons/si";
import { Cloud } from "lucide-react";

const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "Nest.js": SiNestjs,
  AWS: Cloud,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  TypeScript: SiTypescript,
  Go: SiGo,
  Python: SiPython,
};

const Skills = ({ skills }: { skills: string[] }) => (
  <BlurFade inView={true} delay={0.1}>
    <section className="mb-20 md:mb-28">
      <h2 className="font-display italic text-3xl md:text-4xl font-bold text-foreground mb-8">
        Tecnologías
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {skills.map((skill, index) => {
          const Icon = skillIcons[skill];
          return (
            <div
              key={index}
              className="group flex flex-col items-center gap-2.5 rounded-xl border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {Icon && (
                <Icon className="size-8 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
              )}
              <span className="text-sm font-medium text-card-foreground">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  </BlurFade>
);

export default Skills;
