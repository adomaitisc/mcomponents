import { cn } from "@/lib/utils";
import Image from "next/image";

export function Phone({
  children,
  theme = "light",
}: {
  children?: React.ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <div className="w-[310px] relative h-[674px]">
      <div
        className={cn(
          "absolute inset-0 overflow-hidden [mask-image:url(/frame.svg)] shadow-2xl",
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
    </div>
  );
}
