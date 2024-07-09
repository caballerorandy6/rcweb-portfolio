"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface DialogShadcnProps {
  children: React.ReactNode;
  title: string;
  experienceName?: string;
  isOpenDialog: boolean;
  setIsOpenDialog: (isOpen: boolean) => void;
  className?: string;
}

export default function DialogExperience({
  title,
  children,
  isOpenDialog,
  setIsOpenDialog,
}: DialogShadcnProps) {
  return (
    <div>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => setIsOpenDialog(true)}
            className="absolute text-gurkha/80 hover:text-gold/80 text-center opacity-0 group-hover:opacity-100 transition-all flex justify-center items-center inset-0 place-self-center"
          >
            More details...
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-gurkha/80 font-roboto">
              {title}
            </DialogTitle>
          </DialogHeader>
          <Separator
            orientation="horizontal"
            className="border border-gurkha/80"
          />
          <ul className="grid gap-4 py-4">{children}</ul>
          <DialogFooter>
            <Button
              type="button"
              onClick={() => setIsOpenDialog(false)}
              className="text-md font-roboto shadow-2xl border-gurkha/80 bg-gold/10 hover:bg-gold/15 transition-colors"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
