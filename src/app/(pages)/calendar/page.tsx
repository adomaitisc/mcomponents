"use client";

import * as React from "react";
import { Calendar } from "./calendar";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";
import { Paragraph } from "@/components/paragraph";
import { CodeSection } from "@/components/code-section";

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Sandbox
      component={
        <div className="w-full py-10 px-4 max-w-sm mx-auto space-y-4">
          <Subtitle className="py-2">Calendar Example</Subtitle>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border shadow-sm"
            captionLayout="dropdown"
          />
        </div>
      }
    >
      <Title>Calendar</Title>
      <Paragraph>
        This calendar is powered by <code>react-day-picker</code> and styled for
        mobile-first interfaces. It supports single or range selection, dropdown
        navigation, and accessibility.
      </Paragraph>
      <CodeSection>
        {`<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border shadow-sm"
  captionLayout="dropdown"
/>`}
      </CodeSection>
    </Sandbox>
  );
}
