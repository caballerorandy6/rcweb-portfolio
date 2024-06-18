"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ProjectsIcon from "../Icons/ProjectsIcon";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projectsImg = [
  { id: "modolithllc", projectImage: "/modolithLLC.webp", alt: "Modolith LLC" },
  { id: "gsmac", projectImage: "/gsmac.webp", alt: "GSMAC" },
  {
    id: "photographyportfolio",
    projectImage: "/photographerportfolio.webp",
    alt: "Photography Portfolio",
  },
  {
    id: "insurancequotes",
    projectImage: "/insurancequotes.webp",
    alt: "Insurance Quotes",
  },
  { id: "minilibrary", projectImage: "/minilibrary.webp", alt: "Mini Library" },
  {
    id: "monthlyexpenses",
    projectImage: "/monthlyexpenses.webp",
    alt: "Monthly Expenses",
  },
  {
    id: "pitchfinder",
    projectImage: "/pitchfinder.webp",
    alt: "Pitch Finder",
  },
  {
    id: "searchdrinks",
    projectImage: "/searchdrinks.webp",
    alt: "Search Drinks",
  },
  {
    id: "weatherapp",
    projectImage: "/weatherapp.webp",
    alt: "Weather App",
  },
];

export default function Projects() {
  return (
    <div className="relative col-span-10 lg:col-span-6 border-2 rounded-lg border-gurkha/20 border-opacity-40 bg-dune/40 shadow-md">
      <Card>
        <CardHeader>
          <CardTitle>
            <Badge variant="gold" className="mb-4">
              <ProjectsIcon />
              Projects
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="sm:flex flex-wrap justify-center items-center gap-4 mt-2 hidden hover:blur-sm hover:opacity-60 transition-all">
          {projectsImg.map((img) => (
            <Image
              key={img.id}
              src={img.projectImage as string}
              alt={img.alt as string}
              width={500}
              height={500}
              priority
              quality={100}
              className="w-full h-full rounded opacity-80 sm:w-4/12 md:w-3/12 lg:w-5/12 xl:w-3/12"
            />
          ))}
        </CardContent>
      </Card>
      <Button className="absolute flex justify-center items-center text-lg font-roboto text-gurkha/80 border-2 rounded-lg border-gurkha/80 ">
        See Projects
      </Button>
    </div>
  );
}
