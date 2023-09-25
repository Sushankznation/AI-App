"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "@/components/sidebar";
export default function MobileSidebar() {
  const [ismounted, setIsmounted] = useState(false);
  useEffect(() => {
    setIsmounted(true);
  }, []);
  if (!ismounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
//done