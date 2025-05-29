"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";

export default function Share() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
<Button
  onClick={handleCopy}
  className="flex items-center gap-2 px-4 py-2 bg-transparent"
>
  {copied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
</Button>

  );
}
