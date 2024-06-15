"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ExperienceIcon from "@/app/ui/Icons/ExperienceIcon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RCWEBExperience from "@/app/ui/experience/RCWebExperience";
import RevatureExperience from "@/app/ui/experience/RevatureExperience";

export default function Experience() {
  return (
    <div className="w-4/12">
      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href="https://www.linkedin.com/in/caballerorandy/"
              target="_blank"
            >
              <Badge variant="gold" className="mb-2">
                <ExperienceIcon />
                Experience
              </Badge>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center mb-4">
            <RCWEBExperience />
            <RevatureExperience />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
