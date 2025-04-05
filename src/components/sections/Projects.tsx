"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import BlurFade from "../ui/blur-fade";

interface Project {
  image?: string;
  name: string;
  github?: string;
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
          Proyectos
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
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="relative">
                <CardTitle className="flex justify-between items-center text-lg">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-500">
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
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-8 w-8 bg-primary/10 hover:bg-primary/20 border-primary/30"
                      asChild
                    ></Button>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-primary/70 mb-2">{project.date}</p>
                <p className="text-gray-600 dark:text-gray-300">
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
