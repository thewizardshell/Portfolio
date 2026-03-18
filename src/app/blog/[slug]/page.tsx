import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { WaveDivider } from "@/components/ui/wave-divider";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://vctroa.cl/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://vctroa.cl/blog/${slug}`,
      authors: ["Vicente Roa"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  let Content: React.ComponentType;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <WaveDivider />
      <main className="container mx-auto px-4 md:px-6 py-24 flex-1">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="size-3.5" />
            Volver al blog
          </Link>

          <header className="mb-10">
            <h1 className="font-display italic text-3xl md:text-4xl font-bold mb-4">
              {post!.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              {post!.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {post!.readingTime} min de lectura
              </span>
              <span>·</span>
              <span>
                {new Date(post!.date).toLocaleDateString("es-CL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              {post!.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-display prose-headings:italic prose-a:text-primary prose-code:text-primary">
            <Content />
          </article>

          <footer className="mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              Escrito por{" "}
              <span className="text-foreground font-medium">Vicente Roa</span> —
              Desarrollador de Software en Chile.{" "}
              <Link
                href="https://www.linkedin.com/in/vctroa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Conecta en LinkedIn
              </Link>
            </p>
          </footer>
        </div>
      </main>
      <WaveDivider flip />
    </div>
  );
}
