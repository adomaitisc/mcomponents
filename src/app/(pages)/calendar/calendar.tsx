import * as React from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/utils";
import "react-day-picker/dist/style.css";
import "./styles.css"; // <-- Custom compact styles (see below)

const Calendar = ({
  className,
  ...props
}: DayPickerProps & { className?: string }) => {
  return (
    <DayPicker
      className={cn(
        "w-full max-w-[255px] text-[10px] leading-tight bg-white dark:bg-neutral-900 rounded-md",
        className
      )}
      showOutsideDays
      fixedWeeks
      captionLayout="dropdown"
      fromYear={1950}
      toYear={2050}
      {...props}
    />
  );
};

Calendar.displayName = "Calendar";
export { Calendar };
