import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";
import { CodeSection } from "@/components/code-section";
import { Toaster } from "./toast";
import path from "path";
import fs from "fs";
import { ToastButton } from "./toast-button";

export default function CarouselPage() {
  const filePath = path.join(process.cwd(), "public/raw/toast.tsx");
  const code = fs.readFileSync(filePath, "utf-8");

  return (
    <Sandbox>
      <Title
        links={[
          { name: "Sonner Toasts", href: "https://sonner.emilkowal.ski/" },
        ]}
      >
        Toast
      </Title>
      <Toaster mobileOffset={{ bottom: 60 }} />
      <Paragraph>
        Toast is a simple wrapper around the Sonner library, with some added
        styles. The component stacks the given elements in a way that does not
        diminshes the screen real estate but also brings focus to a given
        action/consequence.
      </Paragraph>
      <ToastButton />
      <Subtitle>Implementation</Subtitle>
      <CodeSection>{code}</CodeSection>
      <Subtitle>Usage</Subtitle>
      <CodeSection>{`<div className="w-screen py-12">
  <Toaster mobileOffset={{ bottom: 60 }} />
  <ToastButton />
</div>`}</CodeSection>
    </Sandbox>
  );
}
