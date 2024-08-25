"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "./Sidebar"
import { useState } from "react";

const SHEET_SIDES = ["left"] as const;

type SheetSideType = (typeof SHEET_SIDES)[number];

interface SheetSideProps {
  onLabelClick: (label: string) => void;
}

export function SheetSide({ onLabelClick }: SheetSideProps) {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null); // State for selected label


  const handleLabelClick = (label: string) => {
    setSelectedLabel(label);
  };

 
  return (
    <div className="grid grid-cols-1 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <Sidebar onLabelClick={handleLabelClick} />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}