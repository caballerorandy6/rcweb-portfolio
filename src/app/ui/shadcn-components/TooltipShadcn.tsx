import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipShadcnProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export default function TooltipShadcn({ children, icon }: TooltipShadcnProps) {
  return (
    <div>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger>{icon}</TooltipTrigger>
          <TooltipContent>
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
