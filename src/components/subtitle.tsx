import { cn } from "@/lib/utils";

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Subtitle({ children, className }: SubtitleProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h2 className="text-xl lg:text-2xl font-semibold">{children}</h2>
    </div>
  );
}
