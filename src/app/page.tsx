import dynamic from "next/dynamic";
import { RetroGridDemo } from "@/components/RetroGridDemo";
import { personalData } from "@/data/personal-data";

// Importaciones dinámicas
const AboutMe = dynamic(() => import("@/components/sections/AboutMe"), {
  loading: () => <p>Cargando About Me...</p>, // Componente de carga
});

const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <p>Cargando Habilidades...</p>, // Componente de carga
});

const WorkExperience = dynamic(
  () => import("@/components/sections/WorkExperience"),
  {
    loading: () => <p>Cargando Experiencia Laboral...</p>, // Componente de carga
  },
);

const Education = dynamic(() => import("@/components/sections/Eduaction"), {
  loading: () => <p>Cargando Educación...</p>, // Componente de carga
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <p>Cargando Proyectos...</p>, // Componente de carga
});

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <RetroGridDemo />
      <main className="container mx-auto px-4 py-12">
        {/* Pasar los datos a cada componente */}
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
