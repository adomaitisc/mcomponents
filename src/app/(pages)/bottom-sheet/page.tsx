import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";

import { CodeSection } from "@/components/code-section";
import BottomSheet from "./bottom-sheet";
import path from "path";
import fs from "fs";

export default function CarouselPage() {
  const filePath = path.join(process.cwd(), "public/raw/bottom-sheet.tsx");
  const code = fs.readFileSync(filePath, "utf-8");

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
      <BottomSheet />
      <CodeSection>{code}</CodeSection>
    </Sandbox>
  );
}
