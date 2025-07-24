"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ mobileOffset = { bottom: 80 }, ...props }: ToasterProps) => {
  return (
    <Sonner
      mobileOffset={mobileOffset}
      duration={3000}
      visibleToasts={3}
      swipeDirections={["left", "right"]}
      toastOptions={{
        unstyled: true,
        classNames: {
          content: "flex flex-col",
          loader:
            "translate-y-0.5 translate-x-0.5 brightness-200 size-5 absolute",
          icon: "size-5 relative shrink-0",
          title: "select-none text-white text-sm font-medium",
          description: "select-none text-xs text-white/60",
          success: "text-green-500",
          info: "text-blue-500",
          warning: "text-amber-500",
          error: "text-red-500",
          actionButton:
            "bg-white/90 text-black rounded-full text-xs font-medium px-2 py-1 shrink-0 whitespace-nowrap",
          cancelButton:
            "bg-white/30 text-white rounded-full text-xs font-medium px-2 py-1 shrink-0 whitespace-nowrap",
          toast:
            "max-w-max flex relative shrink-0 items-center justify-start min-h-10 gap-2 bg-[#1c1c1d99] backdrop-blur-md rounded-full px-2 py-1.5 pr-4 border self-center border-white/10",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
