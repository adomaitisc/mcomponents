import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import Carousel from "./carousel";
import { CodeSection } from "@/components/code-section";
import { Subtitle } from "@/components/subtitle";

const images = Array.from({ length: 10 }, () => `/placeholder.svg`);

export default function CarouselPage() {
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
      <CodeSection>
        {`<div className="w-screen py-12">
  <Subtitle className="py-4">Carousel Example</Subtitle>
  <Carousel images={images} indicator={true} />
</div>`}
      </CodeSection>
      <Paragraph>
        We plan to implement and expose a renderImage prop, so the Carousel
        Images can be further customized, behaving in any different ways.
      </Paragraph>
    </Sandbox>
  );
}
