export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "froggit-como-construi-una-tui-para-git",
    title: "Froggit: cómo construí una TUI para Git con más de 230 estrellas",
    date: "2025-06-15",
    description:
      "Cómo nació Froggit, qué decisiones técnicas tomé, y lo que aprendí construyendo una herramienta open source que la gente realmente usa.",
    tags: ["open source", "Go", "terminal", "git"],
    readingTime: 4,
  },
  {
    slug: "octohook-el-problema-de-dependencias-que-no-vi-venir",
    title: "El problema de dependencias que no vi venir construyendo Octohook",
    date: "2025-12-15",
    description:
      "Empecé asumiendo que la relación entre archivos y tests era simple. No lo era. El camino de N:1 a N:N y cómo resolverlo con un grafo de dependencias.",
    tags: ["Go", "open source", "algoritmos"],
    readingTime: 5,
  },
  {
    slug: "froggit-integracion-github-copilot",
    title: "Cómo integré GitHub Copilot en Froggit sin pedirle nada al usuario",
    date: "2026-01-21",
    description:
      "Froggit genera mensajes de commit con IA usando tu suscripción de Copilot existente. Sin tokens, sin configuración, sin fricción.",
    tags: ["open source", "Go", "AI", "GitHub Copilot"],
    readingTime: 3,
  },
];
