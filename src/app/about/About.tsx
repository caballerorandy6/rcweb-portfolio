"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AboutIcon from "../ui/Icons/AboutIcon";
import { useDialogState } from "@/store/dialogStore";

export default function Projects() {
  const { isOpenAboutDialog, setIsOpenAboutDialog } = useDialogState();

  return (
    <div className="w-4/12 border-2 rounded-lg border-gurkha/20 bg-dune/40 shadow-md group">
      <Card className="relative group">
        <CardHeader>
          <CardTitle>
            <Badge variant="default">About Me</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-4 mt-2 transition-all group-hover:blur-xl group-hover:duration-300 group-hover:ease-in-out">
          <AboutIcon />
        </CardContent>
        <Link
          href="/about"
          className="absolute text-gurkha/80 hover:text-gold/80 text-center opacity-0 group-hover:opacity-100 transition-all flex justify-center items-center inset-0 place-self-center text-lg font-roboto"
        >
          More details...
        </Link>
      </Card>
    </div>
  );
}
