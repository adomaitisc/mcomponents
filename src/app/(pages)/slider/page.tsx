"use client";

import { Slider } from "./slider";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";
import { Paragraph } from "@/components/paragraph";
import { CodeSection } from "@/components/code-section";

export default function SliderPage() {
  return (
    <Sandbox
      component={
        <div className="w-full py-10 px-4 max-w-sm mx-auto space-y-4">
          <Subtitle className="py-2">Slider Example</Subtitle>
          <Slider defaultValue={[50]} max={100} step={1} className="w-[70%]" />
        </div>
      }
    >
      <Title>Slider</Title>
      <Paragraph>
        The Slider is a mobile-first component built using Radix UI, styled with
        Tailwind for visual consistency. It supports dragging, keyboard control,
        and precise input.
      </Paragraph>

      <CodeSection>
        {`<Slider defaultValue={[50]} max={100} step={1} className="w-[70%]" />`}
      </CodeSection>
    </Sandbox>
  );
}
