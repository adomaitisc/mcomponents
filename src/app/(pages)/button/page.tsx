import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <Sandbox
      component={
        <div className="w-full h-full relative grid place-items-center">
          <Button className="active:scale-90 duration-300 rounded-full shadow-lg">
            Click me
          </Button>
        </div>
      }
    >
      <Title
        links={[
          {
            name: "Radix",
            href: "https://www.radix-ui.com/primitives/docs/components/button",
          },
        ]}
      >
        Button
      </Title>
      <Paragraph>
        The button component is a simple wrapper around the Radix Button
        component, with the small version actually increasing the tap-area,
        arguibly providing a larger tap-area, and consequently a better user
        experience.
      </Paragraph>
    </Sandbox>
  );
}
