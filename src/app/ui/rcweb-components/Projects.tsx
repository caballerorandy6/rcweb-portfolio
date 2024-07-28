"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ProjectsGridIcon from "@/app/ui/Icons/ProjectsGridIcon";
import { useDialogState } from "@/store/dialogStore";
import DialogMoreDetails from "@/app/ui/shadcn-components/DialogMoreDetails";

const typeOfProjects = [
  { name: "Real Projects", link: "/real-projects" },
  { name: "Personal Projects", link: "/personal-projects" },
  { name: "Courses Projects", link: "/courses-projects" },
];

export default function Projects() {
  const { isOpenProjectsDialog, setIsOpenProjectsDialog } = useDialogState();

  return (
    <div className="w-8/12 sm:w-5/12 border-2 rounded-lg border-gurkha/20 bg-dune/40 shadow-md group relative">
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
          <ul className="flex justify-start flex-col gap-4">
            {typeOfProjects.map((type) => (
              <Link
                key={type.name}
                href={type.link}
                className="text-gurkha hover:text-gold text-center text-xl font-concertOne transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                • {type.name}
              </Link>
            ))}
          </ul>
        </DialogMoreDetails>
      </Card>
    </div>
  );
}
