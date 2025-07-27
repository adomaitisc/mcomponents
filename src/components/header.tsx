"use client";

import { PanelLeft, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function Header() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <>
      <div className="flex items-center justify-between w-full px-4 md:px-9 py-4 md:pt-8 fixed top-0 left-0 z-50 bg-gradient-to-b from-white/90 to-transparent">
        <Button variant="ghost" size="sm" onClick={toggleSidebar}>
          {open ? (
            <PanelLeftOpen strokeWidth={2.4} />
          ) : (
            <PanelLeft strokeWidth={2.4} />
          )}
          <span className="text-sm font-semibold">
            Mobile-First UI Component Library
          </span>
        </Button>
      </div>
    </>
  );
}
