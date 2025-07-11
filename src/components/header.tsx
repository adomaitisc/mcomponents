"use client";

import { PanelLeft, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";

export function Header() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <>
      <div className="flex items-center justify-between w-full px-9 py-8 fixed top-0 left-0 z-50">
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
