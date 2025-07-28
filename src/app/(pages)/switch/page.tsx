import { Label } from "../label/label";
import { Switch } from "./switch";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Paragraph } from "@/components/paragraph";
import { CodeSection } from "@/components/code-section";
import { Subtitle } from "@/components/subtitle";
import path from "path";
import fs from "fs";

export default function SwitchPage() {
  const filePath = path.join(process.cwd(), "public/raw/switch.tsx");
  const code = fs.readFileSync(filePath, "utf-8");

  return (
    <Sandbox
      component={
        <div className="w-full py-10 px-4 max-w-sm mx-auto space-y-4">
          <Subtitle className="py-2">Switch Example</Subtitle>
          <div className="flex items-center space-x-3 justify-center">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>
      }
    >
      <Title>Switch</Title>
      <Paragraph>
        The Switch component wraps Radix UI&apos;s toggle control with Tailwind
        styling, accessibility, and mobile responsiveness.
      </Paragraph>
      <Subtitle>Implementation</Subtitle>
      <CodeSection>{code}</CodeSection>
      <Subtitle>Usage</Subtitle>
      <CodeSection>{`<div className="flex items-center space-x-3">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}</CodeSection>
    </Sandbox>
  );
}
