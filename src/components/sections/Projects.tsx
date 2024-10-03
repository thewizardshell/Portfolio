"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
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

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <BlurFade inView={true} delay={1}>
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg?height=200&width=400"}
              alt={project.name}
              aria-label={project.name}
              width={400}
              height={400}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {project.name}
                {project.github && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      aria-label="Link to GitHub"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{project.date}</p>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </BlurFade>
);

export default Projects;
