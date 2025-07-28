import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";

export default function IntroductionPage() {
  return (
    <Sandbox>
      <Title>Introduction</Title>
      <Paragraph>
        Welcome to the Mobile-First UI Component Library—our take on building
        web interfaces that actually feel good on mobile. Most libraries start
        desktop-first and try to “shrink” their way down. We went the other way.
        Everything here is designed with 320px–768px screens in mind, with
        smooth interactions and a lightweight setup from day one.
      </Paragraph>

      <Paragraph>
        Instead of another npm package with endless setup steps, we went with a
        copy-paste approach. Every component is headless React, styled with
        Tailwind, and comes with live mobile previews and instant code you can
        grab. No fluff, just stuff you can drop into your project and move on.
      </Paragraph>

      <Paragraph>
        The stack is simple but modern—React, Vite, Next.js, and TypeScript plus
        animations. We’ve tested everything across iOS and Android to make sure
        it just works wherever you throw it.
      </Paragraph>

      <Paragraph>
        This project is more than just a set of components—it’s our playground
        for exploring mobile UX, accessibility, and what modern frontend dev can
        look like when performance actually matters. Whether you’re building a
        PWA, a responsive site, or a mobile web app, this library is built to
        make your life easier without cutting corners.
      </Paragraph>
    </Sandbox>
  );
}
