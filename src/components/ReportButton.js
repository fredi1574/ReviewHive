"use client";
import { useState } from "react";
import { Flag } from "lucide-react";

const ReportButton = () => {
  const [reported, setReported] = useState(false);

  const handleReport = (event) => {
    event.stopPropagation();
    setReported((reported) => !reported);
    console.log("Report clicked");
  };

  return (
    <Flag
      onClick={handleReport}
      className={`size-10 justify-self-end rounded-lg p-2 transition-colors duration-300 hover:bg-slate-400 ${
        reported ? "fill-red-500" : "fill-transparent"
      }`}
    />
  );
};

export default ReportButton;
