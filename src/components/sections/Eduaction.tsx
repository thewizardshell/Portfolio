"use client";
import React, { useState } from "react";
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

const Education: React.FC<EducationProps> = ({ education }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <BlurFade inView={true} delay={0.8}>
      <section className="mb-28">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2">🎓</span>
          Educación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Efecto de resplandor al hacer hover */}
              <div
                className={`absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm opacity-0 transition-opacity duration-500 ${
                  hovered === index ? "opacity-100" : ""
                }`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-3">
                  {edu.image ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm -z-10"></div>
                      <Image
                        src={edu.image}
                        alt={`${edu.school} logo`}
                        aria-label="School logo"
                        width={62}
                        height={62}
                        className="rounded-full bg-background p-1"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                      🎓
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary/70 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </BlurFade>
  );
};

export default Education;
