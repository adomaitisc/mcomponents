"use client";

import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { CodeSection } from "@/components/code-section";
import { Subtitle } from "@/components/subtitle";
import { Input } from "./input";

export default function InputPage() {
  return (
    <Sandbox
      component={
        <div className="w-full py-10 px-4 space-y-4 max-w-sm mx-auto">
          <Subtitle className="py-2">Input Examples</Subtitle>

          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Age" />
          <Input type="submit" placeholder="Submit Form!" />
        </div>
      }
    >
      <Title>Input</Title>
      <Paragraph>
        The Input component supports all native HTML input types and is styled
        for consistency across platforms. Each field includes mobile-friendly
        spacing and accessible focus styles.
      </Paragraph>

      <CodeSection>
        {`<Input type="text" placeholder="Full Name" />`}
      </CodeSection>

      <Paragraph>
        You can use this component as a base for more complex form elements, and
        it supports props like <code>disabled</code>, <code>required</code>,{" "}
        <code>autoFocus</code>, and more.
      </Paragraph>
    </Sandbox>
  );
}
