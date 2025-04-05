"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";

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
  const [activeJob, setActiveJob] = useState<number | null>(null);

  return (
    <BlurFade inView={true} delay={0.6}>
      <section className="mb-28">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2">⚡</span>
          Experiencia laboral
        </h2>

        {/* Vista móvil - Timeline */}
        <div className="md:hidden relative border-l-2 border-primary/30">
          {workExperience.map((job, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 -left-2 border-2 border-background"></div>
              <time className="mb-1 text-sm font-normal leading-none text-primary/80">
                {job.date}
              </time>
              <div className="flex items-center space-x-2 mt-2">
                {job.image && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm -z-10"></div>
                    <Image
                      src={job.image}
                      alt={`${job.company} logo`}
                      aria-label="Company logo"
                      width={44}
                      height={44}
                      className="rounded-full bg-background p-1"
                      loading="lazy"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold">{job.title}</h3>
              </div>
              <p className="mb-2 text-base font-medium text-primary/70">
                {job.company}
              </p>
              <div className="p-4 bg-primary/5 rounded-lg mt-2 border border-primary/10 hover:border-primary/20 transition-colors">
                <p className="text-base">{job.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vista desktop - Tabs */}
        <div className="hidden md:grid md:grid-cols-12 gap-8">
          {/* Navegación de tabs */}
          <div className="col-span-4 space-y-2">
            {workExperience.map((job, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  activeJob === index
                    ? "border-primary/30 bg-primary/10 shadow-md"
                    : "border-gray-200 dark:border-gray-700 hover:bg-primary/5"
                }`}
                onClick={() => setActiveJob(index)}
              >
                <div className="flex items-center space-x-3">
                  {job.image && (
                    <Image
                      src={job.image}
                      alt={`${job.company} logo`}
                      width={32}
                      height={32}
                      className="rounded-full"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <h3
                      className={`font-medium ${activeJob === index ? "text-primary" : ""}`}
                    >
                      {job.company}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {job.date}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detalle del trabajo */}
          <div className="col-span-8">
            {activeJob !== null && (
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {workExperience[activeJob].title}
                </h3>
                <p className="text-lg mb-4">
                  {workExperience[activeJob].company}
                </p>
                <p className="text-base">
                  {workExperience[activeJob].description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </BlurFade>
  );
};

export default WorkExperience;
