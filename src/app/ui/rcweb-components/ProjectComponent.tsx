import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import TechnologiesMarquee from "./TechnologiesMarquee";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export interface Project {
  name: string;
  image: React.ReactNode;
  customer?: string;
  description: string;
  technologies: React.ReactNode[];
  websiteLink: string;
}

export function ProjectComponent({
  name,
  image,
  description,
  technologies,
  websiteLink,
}: Project) {
  return (
    <Card className="w-8/12 sm:w-5/12 border-2 rounded-lg border-gurkha/20 bg-dune/40 shadow-md group">
      <CardHeader>
        <CardTitle>
          <Badge variant="projects">{name}</Badge>
        </CardTitle>
        <CardDescription className="text-white/70 font-roboto text-base">
          {image} {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex items-center gap-4">
          {technologies.map((tech) => (
            <li key={(tech as React.ReactElement).key}>{tech}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={websiteLink} target="_blank">
          {image}
        </Link>
      </CardFooter>
    </Card>
  );
}
