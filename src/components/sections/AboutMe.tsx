"use client";

import React from "react";
import BlurFade from "../ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { SiNeovim, SiLinux } from "react-icons/si";
import { Gamepad2, Swords, Lightbulb, Code2, Terminal } from "lucide-react";

const interests = [
  { icon: Terminal, label: "Entornos terminal" },
  { icon: SiNeovim, label: "Neovim" },
  { icon: SiLinux, label: "Linux" },
  { icon: Code2, label: "Open Source" },
  { icon: Lightbulb, label: "Side projects" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Swords, label: "MMA" },
];

const AboutMe = () => (
  <BlurFade inView={true} delay={0.1}>
    <section className="mb-20 md:mb-28">
      <h2 className="font-display italic text-3xl md:text-4xl font-bold text-foreground mb-8">
        <span className="text-primary">Un poco</span> sobre mí
      </h2>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Desarrollador de software con experiencia en integración de modelos
            de IA para automatización y optimización de procesos. Trabajo
            principalmente con NestJS, Next.js y servicios AWS. En mi día a día
            uso{" "}
            <span className="inline-flex items-center gap-1 text-foreground font-semibold">
              <SiNeovim className="size-4 text-primary" />
              Neovim
            </span>{" "}
            y entornos{" "}
            <span className="inline-flex items-center gap-1 text-foreground font-semibold">
              <SiLinux className="size-4 text-primary" />
              Linux
            </span>
            , y disfruto optimizando mis herramientas tanto como el código que
            escribo.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Soy de los que un fin de semana cualquiera termina construyendo algo
            nuevo{" "}
            <Highlighter
              action="underline"
              color="#8a9a4e"
              strokeWidth={3}
              animationDuration={800}
              iterations={1}
              padding={2}
              isView
            >
              la programación partió como carrera y se convirtió también en
              hobby
            </Highlighter>
            . Fuera del código me interesan los videojuegos y las MMA.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {interests.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-lg border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground"
              >
                <item.icon className="size-3.5" />
                {item.label}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  </BlurFade>
);

export default AboutMe;
