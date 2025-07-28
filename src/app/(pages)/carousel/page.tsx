import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import Carousel from "./carousel";
import { CodeSection } from "@/components/code-section";
import { Subtitle } from "@/components/subtitle";
import path from "path";
import fs from "fs";

const images = Array.from({ length: 10 }, () => `/placeholder.svg`);

export default function CarouselPage() {
  const filePath = path.join(process.cwd(), "public/raw/carousel.tsx");
  const code = fs.readFileSync(filePath, "utf-8");

  return (
    <Sandbox
      component={
        <div className="w-full py-10 relative grid place-items-center">
          <Subtitle className="py-4">Carousel Example</Subtitle>
          <Carousel images={images} />
        </div>
      }
    >
      <Title>Carousel</Title>
      <Paragraph>
        Inspired by the Instagram carousel, this component is a simple way to
        create a carousel of images.
      </Paragraph>
      <Subtitle>Implementation</Subtitle>
      <CodeSection>{code}</CodeSection>
      <Subtitle>Usage</Subtitle>
      <CodeSection>
        {`<div className="w-screen py-12">
  <Subtitle className="py-4">Carousel Example</Subtitle>
  <Carousel images={images} indicator={true} />
</div>`}
      </CodeSection>
      <Paragraph>
        We plan to implement and expose a{" "}
        <code className="text-base font-medium">renderImage</code> prop, so the
        carousel images can be further customized, behaving in any different
        ways.
      </Paragraph>
    </Sandbox>
  );
}
