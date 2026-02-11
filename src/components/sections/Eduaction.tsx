"use client";
import React from "react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EducationEntry {
  image?: string;
  degree: string;
  school: string;
  date: string;
}

interface EducationProps {
  education: EducationEntry[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <BlurFade inView={true} delay={0.8}>
      <section className="mb-20 md:mb-28">
        <h2 className="font-display italic text-3xl md:text-4xl font-bold text-foreground mb-8">
          Educación
        </h2>

        <div className="grid gap-4">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  {edu.image && (
                    <Image
                      src={edu.image}
                      alt={`${edu.school} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg object-cover border"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <Badge variant="secondary" className="w-fit text-xs">
                        {edu.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-primary mt-1">
                      {edu.school}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </BlurFade>
  );
};

export default Education;
