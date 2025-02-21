"use client";
import { useState } from "react";

import { Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ReportButton = () => {
  const [reported, setReported] = useState(false);

  const handleReport = (event) => {
    event.stopPropagation();
    setReported((prev) => !prev);
    // TODO: Implement actual reporting logic
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReport}
            className={`rounded-full transition-colors duration-300 ${
              reported ? "text-red-500 hover:bg-red-100" : "hover:bg-slate-200"
            }`}
          >
            <Flag className={`h-5 w-5 ${reported ? "fill-current" : ""}`} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{reported ? "Undo Report" : "Report"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ReportButton;
