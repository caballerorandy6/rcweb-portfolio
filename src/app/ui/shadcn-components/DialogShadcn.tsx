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
import { useDialogState } from "@/store/dialogStore";

interface DialogShadcnProps {
  children: React.ReactNode;
  title: string;
  experienceName?: string;
}

export default function DialogShadcn({
  title,
  children,
  experienceName,
}: DialogShadcnProps) {
  const { isOpenDialog, setIsOpenDialog } = useDialogState();
  return (
    <div>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => setIsOpenDialog(true)}
            className="p-0 text-gurkha/80 hover:text-gold/80 transition-colors"
          >
            See more...
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <ul className="grid gap-4 py-4">{children}</ul>
          <DialogFooter>
            <Button type="button" onClick={() => setIsOpenDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
