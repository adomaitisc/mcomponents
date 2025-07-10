"use client";

import { PanelLeft, PanelLeftOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";
import { createPortal } from "react-dom";

export function Header() {
  const { toggleSidebar, open } = useSidebar();
  return (
    <>
      {typeof window !== "undefined" &&
        createPortal(
          <div className="flex items-center justify-between w-full px-3 py-8 fixed top-0 left-0 z-50">
            <Button variant="ghost" size="sm" onClick={toggleSidebar}>
              {open ? (
                <PanelLeftOpen strokeWidth={2.4} />
              ) : (
                <PanelLeft strokeWidth={2.4} />
              )}
              <span className="text-sm font-semibold">mcomponents</span>
            </Button>
          </div>,
          document.body,
          "header"
        )}
    </>
  );
}
