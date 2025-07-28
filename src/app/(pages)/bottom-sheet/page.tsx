import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";
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
        The Bottom Sheet component is a simple wrapper around the Vaul library,
        providing a mobile-first bottom sheet experience. This component can be
        used as a Dialog replacement on mobile and provides smooth animations.
      </Paragraph>
      <Subtitle>Implementation</Subtitle>
      <CodeSection>{code}</CodeSection>
      <Subtitle>Usage</Subtitle>
      <CodeSection>{`<BottomSheet>
  <div className="p-4">
    <h2 className="text-lg font-semibold">Bottom Sheet Content</h2>
    <p className="text-sm text-gray-600 mt-2">
      This is the content of the bottom sheet.
    </p>
  </div>
</BottomSheet>`}</CodeSection>
      <BottomSheet />
    </Sandbox>
  );
}
