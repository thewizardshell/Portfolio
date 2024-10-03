"use client";

import React, { useEffect, useState } from "react";
import BlurFade from "../ui/blur-fade";
import Spinner from "@/components/Spinner";

const AboutMe = ({ about }: { about: string }) => {
  const [loading, setLoading] = useState(true);

  // Establece loading en false inmediatamente después de que el componente se monte.
  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <BlurFade inView={true} delay={0.2}>
      <section className="mb-28">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg leading-relaxed">{about}</p>
      </section>
    </BlurFade>
  );
};

export default AboutMe;
