"use client";

import { PanelLeft, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function Header() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <>
      <div className="flex items-center justify-between w-full lg:max-w-3xl lg:w-1/2 px-4 md:px-9 py-4 md:pt-8 fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-xl ">
        <Button variant="ghost" size="sm" onClick={toggleSidebar}>
          {open ? (
            <PanelLeftOpen strokeWidth={2.4} />
          ) : (
            <PanelLeft strokeWidth={2.4} />
          )}
          <span className="text-sm font-semibold">mcomponents</span>
        </Button>
      </div>
    </>
  );
}
