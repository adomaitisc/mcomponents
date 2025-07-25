import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[3px] w-full grow rounded-full bg-neutral-300 dark:bg-neutral-700">
      <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block size-5 rounded-full border border-blue-500 bg-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-white"
      aria-label="Slider Thumb"
    />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;
export { Slider };
