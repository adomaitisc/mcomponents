"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export function Phone({
  children,
  theme = "light",
}: {
  children?: React.ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className="w-[310px] relative h-[674px]"
    >
      <div className="absolute inset-0 blur-lg">
        <div className="h-full w-full [mask-image:url(/frame.svg)] bg-black/10" />
      </div>
      <div
        className={cn(
          "absolute inset-0 overflow-hidden [mask-image:url(/frame.svg)]",
          theme === "light" ? "bg-neutral-100" : "bg-neutral-800"
        )}
      >
        <Image
          src={theme === "light" ? "/status-light.svg" : "/status-dark.svg"}
          alt="Frame"
          width={248.97}
          height={28}
          className="absolute top-[11px] left-[33px] pointer-events-none z-10"
        />
        <Image
          src={theme === "light" ? "/safari-light.svg" : "/safari-dark.svg"}
          alt="Frame"
          width={310}
          height={40}
          className="absolute bottom-0 left-0 pointer-events-none z-10"
        />
        {children}
      </div>
    </motion.div>
  );
}
