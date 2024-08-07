"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface Technologies {
  technologies: React.ReactNode[];
}

export default function TechnologiesMarquee({ technologies }: Technologies) {
  return (
    <Marquee
      fade={true}
      reverse={true}
      pauseOnHover={true}
      className="gap-8 [--duration:5s]"
    >
      {technologies}
    </Marquee>
  );
}
