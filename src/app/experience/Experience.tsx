"use client";

import { Badge } from "@/components/ui/badge";
import ExperienceIcon from "@/app/ui/Icons/ExperienceIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DialogMoreDetails from "@/app/ui/shadcn-components/DialogMoreDetails";
import ExperienceComponent from "./ExperienceComponent";
import { useDialogState } from "@/store/dialogStore";

export default function Experience() {
  const { isOpenExperienceDialog, setIsOpenExperienceDialog } =
    useDialogState();

  return (
    <div className="w-4/12 border-2 rounded-lg border-gurkha/20 bg-dune/40 shadow-md group">
      <Card className="relative group">
        <CardHeader>
          <CardTitle>
            <Badge variant="default">Experience</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-4 mt-2 transition-all group-hover:blur-xl group-hover:duration-300 group-hover:ease-in-out">
          <ExperienceIcon />
        </CardContent>
        <DialogMoreDetails
          title="Experience"
          experienceName="Experience"
          isOpenDialog={isOpenExperienceDialog}
          setIsOpenDialog={setIsOpenExperienceDialog}
        >
          <ExperienceComponent />
        </DialogMoreDetails>
      </Card>
    </div>
  );
}
