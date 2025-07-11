import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";

export default function IntroductionPage() {
  return (
    <Sandbox>
      <Title>Introduction</Title>
      <Paragraph>
        The button component is a simple wrapper around the Radix Button
        component, with the small version actually increasing the tap-area,
        arguibly providing a larger tap-area, and consequently a better user
        experience.
      </Paragraph>
    </Sandbox>
  );
}
