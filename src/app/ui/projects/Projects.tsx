"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectsIcon from "../Icons/ProjectsIcon";
import ProjectsGridIcon from "../Icons/ProjectsGridIcon";
import clsx from "clsx";

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
    <div className="w-4/12 border-2 rounded-lg border-gurkha/20 border-opacity-40 bg-dune/40 shadow-md">
      <Card>
        <CardHeader>
          <CardTitle>
            <Badge variant="gold" className="mb-4">
              Projects
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="relative flex flex-wrap justify-center items-center gap-4 mt-2 hover:blur-lg hover:opacity-80 transition-all hover:cursor-pointer">
          {/* {projectsImg.map((img) => (
            <Image
              key={img.id}
              src={img.projectImage as string}
              alt={img.alt as string}
              width={500}
              height={500}
              priority
              quality={100}
              className="rounded opacity-80 w-5/12 sm:w-4/12 md:w-3/12 lg:w-5/12 xl:w-4/12"
            />
          ))} */}
          <ProjectsGridIcon />
          <Button
            onClick={() => console.log("See Projects")}
            className={clsx(
              "absolute inset-0 m-auto justify-center items-center text-lg font-roboto text-gurkha/80 border-2 rounded-lg border-gurkha/80 z-40 hidden group-hover:flex w-3/12"
            )}
          >
            See Projects
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
