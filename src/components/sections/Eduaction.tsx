"use client";
// components/Education.tsx
import React from "react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";

interface EducationEntry {
  image?: string;
  degree: string;
  school: string;
  date: string;
}

interface EducationProps {
  education: EducationEntry[];
}

const Education: React.FC<EducationProps> = ({ education }) => (
  <BlurFade inView={true} delay={0.8}>
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Educación</h2>
      {education.map((edu, index) => (
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
);

export default Education;
