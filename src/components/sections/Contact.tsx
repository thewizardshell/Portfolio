"use client";
import React, { useState } from "react";
import BlurFade from "../ui/blur-fade";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mvgqanww", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Hubo un error al enviar el formulario. Intenta nuevamente.");
      }
    } catch {
      setError("Hubo un error al enviar el formulario. Intenta nuevamente.");
    }
    setLoading(false);
  };

  return (
    <BlurFade inView={true} delay={1.2}>
      <section id="contact" className="py-12 md:py-16">
        <Card className="max-w-xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-display italic text-3xl">
              <span className="text-primary">Trabajemos</span> juntos
            </CardTitle>
            <CardDescription className="text-base">
              Si tienes un proyecto en mente o necesitas desarrollo web, escríbeme
              y conversemos.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {submitted ? (
              <div className="p-6 rounded-lg bg-primary/10 text-foreground text-center">
                Gracias por tu mensaje. Te responderé pronto.
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </Button>

                {error && (
                  <p className="text-destructive text-sm text-center">{error}</p>
                )}
              </form>
            )}
          </CardContent>
        </Card>
      </section>
    </BlurFade>
  );
};

export default Contact;
