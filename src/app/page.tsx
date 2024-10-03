"use client";

import { RetroGridDemo } from "@/components/RetroGridDemo";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { Link as LinkIcon } from "lucide-react"; // Cambié el nombre del import para evitar confusiones
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalData } from "@/data/personal-data";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <RetroGridDemo />

      <main className="container mx-auto px-4 py-12">
        <BlurFade inView={true} delay={0.2}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Sobre mi</h2>
            <p className="text-lg leading-relaxed">{personalData.about}</p>
          </section>
        </BlurFade>

        <BlurFade inView={true} delay={0.4}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
            <div className="flex flex-wrap gap-2">
              {personalData.skills.map((skill, index) => (
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

        <BlurFade inView={true} delay={0.6}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Experiencia laboral</h2>
            <div className="relative border-l border-gray-200 dark:border-gray-700">
              {personalData.workExperience.map((job, index) => (
                <div key={index} className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {job.date}
                  </time>
                  <div className="flex items-center space-x-2">
                    {job.image && (
                      <Image
                        src={job.image}
                        alt={`${job.company} logo`}
                        width={44}
                        height={44}
                        className="rounded-full"
                      />
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                  </div>
                  <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    {job.company}
                  </p>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </BlurFade>

        <BlurFade inView={true} delay={0.8}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Educación</h2>
            {personalData.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex items-center space-x-2">
                  {edu.image && (
                    <Image
                      src={edu.image}
                      alt={`${edu.school} logo`}
                      width={62}
                      height={62}
                      className="rounded-full"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <p className="text-muted-foreground">
                  {edu.school} | {edu.date}
                </p>
              </div>
            ))}
          </section>
        </BlurFade>

        <BlurFade inView={true} delay={1}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalData.projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={
                      project.image || "/placeholder.svg?height=200&width=400"
                    }
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {project.name}
                      {project.github && (
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
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
      </main>
    </div>
  );
}
