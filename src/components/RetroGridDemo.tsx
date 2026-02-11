"use client";

import { useState } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, Star } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";

export function RetroGridDemo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col items-center text-center">

          {/* Foto de perfil animada en hover */}
          <BlurFade delay={0} duration={0.6} yOffset={20}>
            <div className="relative mb-8">
              {/* Glow sutil */}
              <div className="absolute -inset-6 bg-primary/15 rounded-full blur-3xl" />

              {/* Container circular */}
              <div
                className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-border shadow-lg cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Imagen estática */}
                <Image
                  src="/vctroa_icon.png"
                  alt="Vicente Roa"
                  priority
                  fill
                  className={`object-cover object-center scale-110 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                {/* GIF animado */}
                <Image
                  src="/vctroa_animation.gif"
                  alt="Vicente Roa animado"
                  fill
                  className={`object-cover object-[center_20%] scale-110 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  unoptimized
                />
              </div>
            </div>
          </BlurFade>

          {/* Badge destacado */}
          <BlurFade delay={0.15} duration={0.5}>
            <div className="mb-6">
              <Badge variant="outline" className="gap-2 px-3 py-1.5">
                <Star className="w-3 h-3 fill-primary text-primary" />
                <span>Creador de Froggit — 230+ estrellas en GitHub</span>
              </Badge>
            </div>
          </BlurFade>

          {/* Título principal */}
          <BlurFade delay={0.3} duration={0.5}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Hola, soy{" "}
              <span className="font-display italic text-primary">{personalData.name}</span>
            </h1>
          </BlurFade>

          {/* Subtítulo */}
          <BlurFade delay={0.45} duration={0.5}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {personalData.holder} enfocado en backend e integración de modelos de IA
              para automatización de procesos y soluciones escalables.
            </p>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={0.6} duration={0.5}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" asChild>
                <a href="#projects">Ver proyectos</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contactar</a>
              </Button>
            </div>
          </BlurFade>

          {/* Social links */}
          <BlurFade delay={0.75} duration={0.5}>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" asChild>
                <a
                  href={personalData.contact.social.Github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={personalData.contact.social.Linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

    </section>
  );
}