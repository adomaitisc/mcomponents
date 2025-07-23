import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { TabBar, TabContainer, TabProvider } from "./bottom-tabs";

const tabs = [
  { id: "home", label: "Home" },
  { id: "search", label: "Search" },
  { id: "profile", label: "Profile" },
];

export default function BottomTabsPage() {
  return (
    <Sandbox
      component={
        <div className="w-full h-full relative">
          <TabProvider>
            <TabBar tabs={tabs} />
            <TabContainer>
              <p>Home</p>
              <p>Search</p>
              <p>Profile</p>
            </TabContainer>
          </TabProvider>
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
        Bottom Tabs
      </Title>
      <Paragraph>
        Bottom tabs are a common UI pattern for mobile and desktop applications.
        They are used to navigate between different sections of an application.
        They are typically located at the bottom of the screen and are used to
        navigate between different sections of an application.
      </Paragraph>
    </Sandbox>
  );
}
