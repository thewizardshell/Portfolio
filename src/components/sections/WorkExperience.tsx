"use client";
import React from "react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Job {
  date: string;
  image?: string;
  title: string;
  company: string;
  description: string;
}

interface WorkExperienceProps {
  workExperience: Job[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => {
  return (
    <BlurFade inView={true} delay={0.6}>
      <section className="mb-20 md:mb-28">
        <h2 className="font-display italic text-3xl md:text-4xl font-bold text-foreground mb-8">
          Experiencia
        </h2>

        <div className="grid gap-4">
          {workExperience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  {job.image && (
                    <Image
                      src={job.image}
                      alt={`${job.company} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg object-cover border"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit text-xs">
                        {job.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-primary mt-1">
                      {job.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </BlurFade>
  );
};

export default WorkExperience;
