import { Paragraph } from "@/components/paragraph";
import { Sandbox } from "@/components/sandbox";
import { Title } from "@/components/title";
import { Tab, TabBar, TabContainer, TabProvider } from "./bottom-tabs";
import { Subtitle } from "@/components/subtitle";
import { HomeIcon, SearchIcon, UserIcon } from "lucide-react";

const tabs = [
  { id: "home", label: "Home", icon: <HomeIcon className="size-5" /> },
  { id: "search", label: "Search", icon: <SearchIcon className="size-5" /> },
  { id: "profile", label: "Profile", icon: <UserIcon className="size-5" /> },
];

export default function BottomTabsPage() {
  return (
    <Sandbox
      component={
        <div className="w-full h-full relative">
          <TabProvider>
            <TabBar tabs={tabs} />
            <TabContainer className="grid place-items-center">
              <Tab id="home">
                <Subtitle>Home</Subtitle>
              </Tab>
              <Tab id="search">
                <Subtitle>Search</Subtitle>
              </Tab>
              <Tab id="profile">
                <Subtitle>Profile</Subtitle>
              </Tab>
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
