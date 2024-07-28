"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AboutIcon from "../Icons/AboutIcon";
import { useDialogState } from "@/store/dialogStore";

export default function Projects() {
  const { isOpenAboutDialog, setIsOpenAboutDialog } = useDialogState();

  return (
    <div className="w-8/12 sm:w-5/12 border-2 rounded-lg border-gurkha/20 bg-dune/40 shadow-md group">
      <Card className="relative group">
        <CardHeader>
          <CardTitle>
            <Badge variant="custom">About Me</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-4 mt-2 transition-all group-hover:blur-xl group-hover:duration-300 group-hover:ease-in-out">
          <AboutIcon />
        </CardContent>
        <Link
          href="/about"
          className="absolute text-gurkha/80 hover:text-gold text-center opacity-0 group-hover:opacity-100 flex justify-center items-center inset-0 place-self-center text-base font-concertOne transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          More details...
        </Link>
      </Card>
    </div>
  );
}
