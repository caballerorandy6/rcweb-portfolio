"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ProjectsGridIcon from "@/app/ui/Icons/ProjectsGridIcon";
import { useDialogState } from "@/store/dialogStore";
import DialogMoreDetails from "../shadcn-components/DialogMoreDetails";

const typeOfProjects = [
  { name: "customersProjects", link: "/customers-projects" },
  { name: "personalProjects", link: "/personal-projects" },
  { name: "coursesProjects", link: "/courses-projects" },
];

export default function Projects() {
  const { isOpenProjectsDialog, setIsOpenProjectsDialog } = useDialogState();

  return (
    <div className="w-6/12 sm:w-4/12 border-2 rounded-lg border-gurkha/20 bg-dune/40 shadow-md group">
      <Card className="relative group">
        <CardHeader>
          <CardTitle>
            <Badge variant="custom">Projects</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-4 mt-2 transition-all group-hover:blur-xl group-hover:duration-300 group-hover:ease-in-out">
          <ProjectsGridIcon />
        </CardContent>
        <DialogMoreDetails
          title="My Projects"
          isOpenDialog={isOpenProjectsDialog}
          setIsOpenDialog={setIsOpenProjectsDialog}
        >
          <div>
            <li>
              <Link href="/projects">
                <a className="text-gurkha/80 font-concertOne text-lg hover:text-gold">
                  RCWeb
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="text-gurkha/80 font-concertOne text-lg hover:text-gold">
                  Revature
                </a>
              </Link>
            </li>
          </div>
        </DialogMoreDetails>
      </Card>
    </div>
  );
}
