"use client";
import { GithubIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import BlurFade from "../ui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  return (
    <BlurFade inView={true} delay={0.1}>
      <section id="projects" className="mb-20 md:mb-28">
        <h2 className="font-display italic text-3xl md:text-4xl font-bold text-foreground mb-8">
          <span className="text-primary">Mis</span> Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              {/* Imagen */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?height=200&width=400"}
                  alt={project.name}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {project.date}
                      </Badge>
                    </CardDescription>
                  </div>
                  <CardAction>
                    <div className="flex gap-1">
                      {project.github && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver en GitHub"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.link && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver proyecto"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardAction>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </BlurFade>
  );
};

export default Projects;
