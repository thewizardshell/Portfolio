"use client";
import React from "react";
import BlurFade from "../ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = ({ skills }: { skills: string[] }) => (
  <BlurFade inView={true} delay={0.1}>
    <section className="mb-20 md:mb-28">
      <Card>
        <CardHeader>
          <CardTitle className="font-display italic text-2xl">Tecnologías</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1.5 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  </BlurFade>
);

export default Skills;
