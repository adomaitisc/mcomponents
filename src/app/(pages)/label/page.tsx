"use client";

import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { CodeSection } from "@/components/code-section";
import { Subtitle } from "@/components/subtitle";
import { Label } from "./label";
import { Input } from "../input/input";

export default function LabelPage() {
  return (
    <Sandbox
      component={
        <div className="w-full py-10 px-4 space-y-4 max-w-sm mx-auto">
          <Subtitle className="py-2">Label Example</Subtitle>
          <div className="space-y-2 w-full">
            <Label htmlFor="name" required>
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Appleseed"
              className="text-black dark:text-white"
            />
          </div>
        </div>
      }
    >
      <Title>Label</Title>
      <Paragraph>
        The Label component wraps an HTML label with mobile-friendly spacing and
        accessible markup. It can be paired with any form control and supports
        required field indicators.
      </Paragraph>

      <CodeSection>
        {`<div className="space-y-2 w-full">
  <Label htmlFor="name" required>
    Full Name
  </Label>
  <Input
    id="name"
    type="text"
    placeholder="John Appleseed"
    className="text-black dark:text-white"
  />
</div>`}
      </CodeSection>

      <Paragraph>
        To make the label even more accessible, it links to the corresponding
        form field using the{" "}
        <code className="text-base font-medium">htmlFor</code> attribute and
        optionally renders a red asterisk for required fields.
      </Paragraph>
    </Sandbox>
  );
}
