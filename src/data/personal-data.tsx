import {
  HomeIcon,
  FileText,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export const Xicon = () => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    role="img"
    aria-label="X"
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export const personalData = {
  name: "Vicente Roa",
  initals: "VR",
  location: "Chile",
  holder: "Desarrollador de Software",
  about:
    "Soy Vicente Roa, un desarrollador de software de 22 años, con experiencia en la construcción de aplicaciones web eficientes y escalables. Mi enfoque principal se centra en la creación de interfaces de usuario dinámicas con React y NextJS, y el desarrollo de APIs robustas utilizando NestJS. Además de mi experiencia en el ciclo completo del desarrollo, esto me ha permitido generar propuestas de mejoras e identificar oportunidades de optimización en los proyectos. Mi paso por la ingeniería de datos me ha proporcionado una perspectiva analítica valiosa para abordar los desafíos técnicos y optimizar el rendimiento de las soluciones que desarrollo",
  avatarUrl: "/images/avatar.png",
  skills: [
    "React.js",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Electron.js",
    "Firebase",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://drive.google.com/uc?export=download&id=1eIix-bahGsPuJm3LJsakzdGo10tBd6bd",
      icon: FileText,
      label: "Descarga mi CV",
    },
  ],
  contact: {
    email: "vicenteroa03@gmail.com",
    phone: "+569 77272779",
    social: {
      Github: {
        href: "https://github.com/thewizardshell",
        icon: GithubIcon,
        navbar: true,
      },
      Linkedin: {
        href: "https://www.linkedin.com/in/vctroa/",
        icon: LinkedinIcon,
        navbar: true,
      },
      Twitter: {
        href: "https://x.com/VicenteRoa6",
        icon: Xicon,
        navbar: true,
      },
      Youtube: {
        href: "https://www.youtube.com/@vctroa",
        icon: YoutubeIcon,
        navbar: true,
      },
    },
  },
  workExperience: [
    {
      title: "Desarrollador de Software",
      company: "Romero & Asociados",
      date: "abr. 2025 - actualidad",
      location: "Las Condes, Región Metropolitana de Santiago, Chile",
      description:
        "Participación en el desarrollo de soluciones empresariales utilizando NestJS para construir APIs REST robustas y React para interfaces web modernas. Implementación de pruebas unitarias e integración para garantizar la calidad del software. Colaboración activa en todo el ciclo de vida del desarrollo (desde requerimientos hasta pruebas), siguiendo metodologías ágiles Scrum en Jira. También he participado en la migración de tecnologías legadas hacia stacks modernos y en la gestión de dependencias y seguridad en entornos Node.js.",
      image: "/romero.jpg",
    },
    {
      title: "Practica Profesional",
      company: "Banco Ripley",
      date: "oct. 2024 - mar. 2025",
      location: "Las Condes, Región Metropolitana de Santiago, Chile",
      description:
        "Me desempeñé como ingeniero de datos en mi práctica profesional, donde utilicé DBeaver y AWS Redshift para migrar datos desde SQL Server a Redshift. También trabaje con Python y Pandas en un entorno Anaconda para procesar y analizar datos, asegurando una migración eficiente y precisa. Esta experiencia me ha permitido desarrollar habilidades en la gestión de datos y en la integración de diferentes tecnologías para optimizar procesos analíticos",
      image: "/banco-ripley.webp",
    },
    {
      title: "Freelance Software Engineer",
      company: "Azetheral Technology",
      date: "ene. 2024 - actualidad",
      location: "Santiago, Chile",
      description:
        "Un mini emprendimiento enfocado en el desarrollo web y soluciones digitales escalables. Trabajo junto a un desarrollador full stack en proyectos personalizados, utilizando tecnologías modernas como Next y NestJS, aplicando principios de arquitectura limpia y herramientas como Supabase. Nuestro enfoque se centra en brindar soluciones creativas y funcionales para nuestros clientes, asegurando calidad y eficiencia.",
      image: "/astral-sites.webp",
    },
    {
      title: "Desarrollador de software",
      company: "Underfire Services",
      date: "ene. 2024 - mar. 2024",
      location: "Pudahuel, Región Metropolitana de Santiago, Chile",
      description:
        "Lideré el desarrollo de una aplicación para la automatización de procesos técnicos, utilizando Electron.js y Firebase. Implementé la metodología Scrum, estructurando el proyecto en cinco sprints semanales que facilitaron una gestión ágil y eficiente. Esta aplicación permite la extracción de datos de archivos PDF desde el ERP SAP y su transferencia a hojas de cálculo de Excel, mejorando significativamente la productividad del equipo y reduciendo los tiempos de procesamiento manual de información.",
      image: "/underfire-logo.webp",
    },
    {
      title: "Practica Laboral",
      company: "COMULSA",
      date: "dic. 2023 - ene. 2024",
      location: "Pudahuel, Región Metropolitana de Santiago, Chile",
      description:
        "Proporcioné soporte técnico integral y gestioné la implementación de medidas de seguridad para salvaguardar la infraestructura tecnológica de la organización. Además, me ocupé de la gestión del inventario informático y realicé un monitoreo avanzado de impresoras y redes mediante la plataforma UniFi. Este enfoque proactivo ha asegurado un funcionamiento óptimo de los sistemas, minimizando interrupciones y mejorando la eficiencia operativa.",
      image: "/comulsa-logo.webp",
    },
  ],
  education: [
    {
      degree: "Ingeniero en Computación e Informática",
      school: "Universidad Andrés Bello",
      date: "mar. 2021 - dic. 2024",
      location: "Chile",
      image: "/unab-logo.webp",
    },
  ],
  projects: [
    {
      name: "DoctorChat",
      date: "mar. 2024 - dic.2024",
      description: `
        Proyecto de título enfocado en la gestión de citas médicas con IA. DoctorChat permite a los pacientes describir sus síntomas a través de un chatbot y recibir recomendaciones sobre el especialista médico adecuado.`,
      github: "https://github.com/vicenteroa/doctorchat",
      link: "https://github.com/vicenteroa/DoctorChat",
      image: "/doctorchat_port.webp",
    },
    {
      name: "CardioCare IA",
      date: "ago. 2023 - jun. 2024",
      description:
        "una página web diseñada para ofrecer una experiencia fácil de usar y accesible para todos los usuarios. La plataforma permitirá a las personas ingresar sus datos médicos y de estilo de vida, que serán analizados mediante algoritmos avanzados de análisis de datos y aprendizaje automático. Esta evaluación de riesgos personalizada no solo proporcionará recomendaciones médicas específicas para cada usuario, sino que también permitirá la comunicación directa con profesionales de la salud cuando sea necesario. ",
      github: "https://github.com/vicenteroa/CardioCare-IA",
      link: "https://github.com/vicenteroa/CardioCare-IA",
      image: "/cardiocare_port.webp",
    },
  ],
};
