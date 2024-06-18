"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ExperienceIcon from "@/app/ui/Icons/ExperienceIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RCWEBExperience from "@/app/ui/experience/RCWebExperience";
import RevatureExperience from "@/app/ui/experience/RevatureExperience";

export default function Experience() {
  return (
    <div className="col-span-10 lg:col-span-4 border-2 rounded-lg border-gurkha/20 border-opacity-40 bg-dune/40 shadow-md">
      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href="https://www.linkedin.com/in/caballerorandy/"
              target="_blank"
            >
              <Badge variant="gold" className="mb-4">
                <ExperienceIcon />
                Experience
              </Badge>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex md:flex-row lg:flex-col flex-col mt-2">
            <RCWEBExperience />
            <RevatureExperience />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
