"use client";
import React from "react";
import BlurFade from "../ui/blur-fade";

const AboutMe = ({ about }: { about: string }) => (
  <BlurFade inView={true} delay={0.2}>
    <section className="mb-28">
      <h2 className="text-3xl font-bold mb-4">Sobre mi</h2>
      <p className="text-lg leading-relaxed">{about}</p>
    </section>
  </BlurFade>
);

export default AboutMe;
