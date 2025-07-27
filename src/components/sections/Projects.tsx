"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import BlurFade from "../ui/blur-fade";

interface Project {
  image?: string;
  name: string;
  github?: string;
  link?: string;
  date: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <BlurFade inView={true} delay={1}>
      <section className="mb-28">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2">🚀</span>
          <span className="text-neutral-900 dark:text-neutral-100">Proyectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group ${
                activeProject === index ? "ring-2 ring-primary/50" : ""
              }`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg?height=200&width=400"}
                  alt={project.name}
                  aria-label={project.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <CardHeader className="relative">
                <CardTitle className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-all duration-300">
                    {project.name}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-8 w-8"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Link to GitHub"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {/* Mostrar link si está disponible y tiene logo */}
                    {project.link && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full h-8 w-8"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Link externo"
                        >
                          <LinkIcon className="h-5 w-5 text-primary" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-primary/70 mb-2">{project.date}</p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </p>

                {/* Etiquetas tecnológicas (simuladas) */}
                <div className="flex flex-wrap gap-2 mt-4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </BlurFade>
  );
};

export default Projects;
