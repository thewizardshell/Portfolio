import { RetroGridDemo } from "@/components/RetroGridDemo";
import { personalData } from "@/data/personal-data";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import WorkExperience from "@/components/sections/WorkExperience";
import Education from "@/components/sections/Eduaction";
import Projects from "@/components/sections/Projects";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <RetroGridDemo />
      <main className="container mx-auto px-4 py-12">
        {/* Pass down the data to each component */}
        <AboutMe about={personalData.about} />
        <Skills skills={personalData.skills} />
        <WorkExperience workExperience={personalData.workExperience} />
        <Education education={personalData.education} />
        <Projects projects={personalData.projects} />
      </main>
    </div>
  );
};

export default Home;
