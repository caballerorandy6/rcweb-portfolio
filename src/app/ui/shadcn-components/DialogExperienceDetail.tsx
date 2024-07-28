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

export default function DialogExperienceDetail({
  title,
  children,
  isOpenDialog,
  setIsOpenDialog,
}: DialogShadcnProps) {
  return (
    <div className="max-h-screen">
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => setIsOpenDialog(true)}
            className="duration-300 ease-in-out transform hover:scale-110 text-gurkha/80 hover:text-gold text-center transition-all text-lg font-concertOne mb-4"
          >
            More details...
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-gurkha font-roboto">
              {title}
            </DialogTitle>
          </DialogHeader>
          <Separator
            orientation="horizontal"
            className="border border-gurkha"
          />
          <ul className="grid gap-4 py-4">{children}</ul>
          <DialogFooter>
            <Button
              type="button"
              onClick={() => setIsOpenDialog(false)}
              className="text-md shadow-2xl border-none hover:text-gold bg-gold/10 hover:bg-gold/15 transition-colors font-concertOne text-lg"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
