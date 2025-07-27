"use client";

import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";

import { CodeSection } from "@/components/code-section";
import BottomSheet from "./bottom-sheet";

export default function CarouselPage() {
  return (
    <Sandbox>
      <Title
        links={[
          { name: "Vaul Bottom Sheet", href: "https://vaul.emilkowal.ski/" },
        ]}
      >
        Bottom Sheet
      </Title>
      <Paragraph>
        Toast is a simple wrapper around the Sonner library, with some added
        styles. The component stacks the given elements in a way that does not
        diminshes the screen real estate but also brings focus to a given
        action/consequence.
      </Paragraph>
      <CodeSection>
        {`<div className="w-screen py-12">
  <Toaster mobileOffset={{ bottom: 60 }} />
  <button onClick={() => toast.info("This is an info Toast")}>
    Click me!
  </button>
</div>`}
      </CodeSection>
      <BottomSheet />
    </Sandbox>
  );
}
