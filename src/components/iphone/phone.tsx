"use client";

import { cn } from "@/lib/utils";
import { Status } from "./status";
import { Safari } from "./safari";
import { motion } from "framer-motion";

export function Phone({
  children,
  theme = "light",
}: {
  children?: React.ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <motion.div
      className="w-[310px] relative h-[674px]"
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden [mask-image:url(/frame.svg)]",
          theme === "light" ? "bg-neutral-100" : "bg-neutral-800"
        )}
      >
        <Status theme={theme} />
        <Safari theme={theme} />
        <div className="absolute inset-0 pt-12 pb-10">{children}</div>
      </div>
    </motion.div>
  );
}
