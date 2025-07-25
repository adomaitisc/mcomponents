import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white dark:placeholder:text-neutral-500",
        "min-h-[44px]",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
