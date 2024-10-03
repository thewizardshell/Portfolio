"use client";
import React from "react";
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

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => (
  <BlurFade inView={true} delay={0.6}>
    <section className="mb-28">
      <h2 className="text-3xl font-bold mb-8">Experiencia laboral</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {workExperience.map((job, index) => (
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
                  aria-label="Company logo"
                  width={44}
                  height={44}
                  className="rounded-full"
                  loading="lazy"
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
);

export default WorkExperience;
