"use client";

import { useEffect, useState } from "react";
import { Phone } from "./iphone/phone";
import { useSidebar } from "./ui/sidebar";

export function Sandbox({
  children,
  theme = "light",
  component,
}: {
  children?: React.ReactNode;
  theme?: "light" | "dark";
  component?: React.ReactNode;
}) {
  const { open } = useSidebar();
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    setIsPhone(window.innerWidth < 768);
  }, []);

  return (
    <>
      <div className="flex-1 lg:absolute left-0 w-full sm:max-w-screen md:max-w-3xl lg:max-w-1/2 mx-auto space-y-3 lg:space-y-6 py-20 lg:py-32 px-4 lg:px-12">
        {children}
      </div>
      {isPhone ? (
        <div className="h-[100svh] overflow-y-hidden flex-1 p-1">
          {component}
        </div>
      ) : component ? (
        <div
          className={`h-screen z-50 lg:left-[50vw] lg:fixed top-0 sm:max-w-screen lg:max-w-1/2 w-full flex-1 p-1 duration-200 ease-in-out ${
            open ? "lg:translate-x-[var(--sidebar-width)]" : "translate-x-0"
          }`}
        >
          <div className="py-8 h-full w-full grid place-items-center bg-neutral-400 rounded-md">
            <Phone theme={theme}>{component}</Phone>
          </div>
        </div>
      ) : null}
    </>
  );
}
