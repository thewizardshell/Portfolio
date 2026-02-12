import dynamic from "next/dynamic";
import { RetroGridDemo } from "@/components/RetroGridDemo";
import { personalData } from "@/data/personal-data";
import Contact from "@/components/sections/Contact";
import { WaveDivider } from "@/components/ui/wave-divider";

const Skills = dynamic(() => import("@/components/sections/Skills"));
const AboutMe = dynamic(() => import("@/components/sections/AboutMe"));
const WorkExperience = dynamic(() => import("@/components/sections/WorkExperience"));
const Education = dynamic(() => import("@/components/sections/Eduaction"));
const Projects = dynamic(() => import("@/components/sections/Projects"));

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header chocolate wave */}
      <WaveDivider />

      <RetroGridDemo />

      <main className="container mx-auto px-4 md:px-6 py-16">
        <Skills skills={personalData.skills} />
        <AboutMe />
        <WorkExperience workExperience={personalData.workExperience} />
        <Education education={personalData.education} />
        <Projects projects={personalData.projects} />
        <Contact />
      </main>

      {/* Footer chocolate wave */}
      <WaveDivider flip />
    </div>
  );
};

export default Home;
