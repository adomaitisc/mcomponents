import { Slider } from "./slider";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";
import { Paragraph } from "@/components/paragraph";
import { CodeSection } from "@/components/code-section";
import path from "path";
import fs from "fs";

export default function SliderPage() {
  const filePath = path.join(process.cwd(), "public/raw/slider.tsx");
  const code = fs.readFileSync(filePath, "utf-8");

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
      <Subtitle>Implementation</Subtitle>
      <CodeSection>{code}</CodeSection>
      <Subtitle>Usage</Subtitle>
      <CodeSection>{`<Slider defaultValue={[50]} max={100} step={1} className="w-[70%]" />`}</CodeSection>
    </Sandbox>
  );
}
