import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";
import { CodeSection } from "@/components/code-section";
import { Button } from "@/components/ui/button";
import path from "path";
import fs from "fs";

export default function SharedDialog() {
  const filePath = path.join(process.cwd(), "public/raw/shared-dialog.tsx");
  const code = fs.readFileSync(filePath, "utf-8");

  return (
    <Sandbox
      theme="dark"
      component={
        <div className="w-full h-full relative grid place-items-center">
          <Button className="active:scale-90 duration-300">Open Dialog</Button>
        </div>
      }
    >
      <Title
        links={[
          {
            name: "Radix",
            href: "https://www.radix-ui.com/primitives/docs/components/dialog",
          },
          { name: "react-spring", href: "https://www.react-spring.dev/" },
        ]}
      >
        Shared Dialog
      </Title>
      <Paragraph>
        The shared dialog is our take at a common animation from the Apple
        ecosystem. It is implemented using Radix&apos;s Dialog component and
        react-spring.
      </Paragraph>
      <Paragraph>
        It works by positioning the dialog at the exact position of the element
        that triggered it, cloning the trigger and animating it to a complete
        fullscreen.
      </Paragraph>
      <Subtitle>Implementation</Subtitle>
      <CodeSection>{code}</CodeSection>
      <Subtitle>Usage</Subtitle>
      <CodeSection>{`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}</CodeSection>
    </Sandbox>
  );
}
