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
  holder: "Full Stack Developer | AI Application",
  about:
    "Soy Vicente Roa, un desarrollador Full Stack de 21 años, apasionado por la tecnología y el aprendizaje constante. Me he caracterizado por integrar soluciones innovadoras basadas en inteligencia artificial en los proyectos en los que trabajo, buscando siempre cómo mejorar la experiencia del usuario y optimizar procesos empresariales. Mi enfoque está en desarrollar aplicaciones que no solo resuelvan problemas, sino que lleven la eficiencia al siguiente nivel. Creo firmemente en la importancia de la colaboración y en el uso de metodologías ágiles como Scrum para transformar ideas en realidades de manera efectiva.",
  avatarUrl: "/images/avatar.png",
  skills: [
    "React.js",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Electron.js",
    "Firebase",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Python",
    "Framer Motion",
    "Git",
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
        href: "https://github.com/vicenteroa",
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
      title: "Practica Profesional",
      company: "Banco Ripley",
      date: "oct. 2024 - actualidad",
      location: "Las Condes, Región Metropolitana de Santiago, Chile",
      description: `
      Programación de procesos ETL y BI utilizando SQL Server, Power BI y Python.`,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHct7ieoxTNFAU0-rzE6XoMcLVVAy_hTYRg&s",
    },
    {
      title: "Desarrollador de software",
      company: "Underfire Services",
      date: "ene. 2024 - mar. 2024",
      location: "Pudahuel, Región Metropolitana de Santiago, Chile",
      description: `
        Lideré el desarrollo de una aplicación para automatizar procesos técnicos utilizando Electron.js y Firebase. Implementé la metodología Scrum dividiendo el proyecto en 5 sprints semanales. La aplicación permite extraer datos de PDF desde ERP SAP y transferirlos a una hoja de cálculo Excel.`,
      image:
        "https://www.underfire.com/wp-content/uploads/cropped-Underfire_Logo_RGB_WhiteBackground.png",
    },
    {
      title: "Practica Laboral",
      company: "COMULSA",
      date: "dic. 2023 - ene. 2024",
      location: "Pudahuel, Región Metropolitana de Santiago, Chile",
      description: `
        Soporte técnico, implementación de medidas de seguridad, gestión de inventario informático, monitoreo avanzado de impresoras y redes mediante UniFi.`,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHd6dMSNuqgfkanY59QDaqU2oywADEQBZTpQ&s",
    },
  ],
  education: [
    {
      degree: "Ingeniero en Computación e Informática",
      school: "Universidad Andrés Bello",
      date: "mar. 2021 - dic. 2024",
      location: "Chile",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZL3oepSCI9EaVKFcSIKZGlM574i8AvkdbWgnMXBM6bfwypjBVSQ-ejVTDM0VqQHeoqqw&usqp=CAU",
    },
  ],
  projects: [
    {
      name: "DoctorChat",
      date: "mar. 2024 - actualidad",
      description: `
        Proyecto de título enfocado en la gestión de citas médicas con IA. DoctorChat permite a los pacientes describir sus síntomas a través de un chatbot y recibir recomendaciones sobre el especialista médico adecuado.`,
      github: "https://github.com/vicenteroa/doctorchat",
      link: "https://doctor-chat-two.vercel.app/",
      image:
        "https://media.licdn.com/dms/image/v2/D4E2DAQEvfquzRiLylw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1720560049018?e=1728536400&v=beta&t=8oURuosw3mveWHd7E6yZJXnRDvl9osZEE831A5fRzu8",
    },
    {
      name: "CardioCare IA",
      date: "ago. 2023 - jun. 2024",
      description:
        "una página web diseñada para ofrecer una experiencia fácil de usar y accesible para todos los usuarios. La plataforma permitirá a las personas ingresar sus datos médicos y de estilo de vida, que serán analizados mediante algoritmos avanzados de análisis de datos y aprendizaje automático. Esta evaluación de riesgos personalizada no solo proporcionará recomendaciones médicas específicas para cada usuario, sino que también permitirá la comunicación directa con profesionales de la salud cuando sea necesario. ",
      github: "https://github.com/vicenteroa/CardioCare-IA",
      link: "https://cardio-care-ia.vercel.app/",
      image:
        "https://media.licdn.com/dms/image/sync/v2/D4E27AQGuh5vvoCMxyQ/articleshare-shrink_800/articleshare-shrink_800/0/1727830725917?e=1728536400&v=beta&t=iIXbuYOTDlxQwq_u29gJN-VPYA20InkBeEUkes9ySRc",
    },
  ],
};
