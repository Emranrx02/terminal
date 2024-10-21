/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import FirstLoad from "@/components/firstload";
import NoWelcome from "@/components/nowelcome";
import Terminal from "@/components/Terminal";
import { useState } from "react";

export default function Home() {
  const [isTrump, setTrump] = useState<boolean | null>(null);
  return (
    <div className="w-full   h-full bg-black text-white">
      {isTrump == null && <FirstLoad handleTrum={setTrump} />}
      {isTrump == true && <Terminal />}
      {isTrump == false && <NoWelcome />}
    </div>
  );
}
