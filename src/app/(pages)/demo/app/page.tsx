"use client";

import { Subtitle } from "@/components/subtitle";
import {
  Tab,
  TabBar,
  TabContainer,
  TabProvider,
} from "../../bottom-tabs/bottom-tabs";
import { Toaster } from "../../toast/toast";
import { Button } from "../../button/button";
import { toast } from "sonner";
import { HomeIcon, SearchIcon, UserIcon, SettingsIcon } from "lucide-react";

const tabs = [
  { id: "home", label: "Home", icon: <HomeIcon className="size-5" /> },
  { id: "search", label: "Search", icon: <SearchIcon className="size-5" /> },
  { id: "profile", label: "Profile", icon: <UserIcon className="size-5" /> },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon className="size-5" />,
  },
];

export default function AppDemoPage() {
  const showToast = (type: "success" | "error" | "info" | "warning") => {
    switch (type) {
      case "success":
        toast.success("Settings saved successfully!");
        break;
      case "error":
        toast.error("Something went wrong. Please try again.");
        break;
      case "info":
        toast.info("New message received from John");
        break;
      case "warning":
        toast.warning("Battery is running low");
        break;
    }
  };

  return (
    <>
      <div className="w-full h-full relative py-16">
        <Toaster mobileOffset={{ bottom: 80 }} />

        <TabProvider defaultTab="home">
          <TabContainer className="min-h-[400px] p-4">
            <Tab id="home">
              <div className="space-y-4">
                <Subtitle>Home</Subtitle>
                <p className="text-sm text-muted-foreground">
                  Welcome to the app! This is the home screen.
                </p>
                <div className="space-y-2">
                  <Button
                    onClick={() => showToast("success")}
                    className="w-full"
                  >
                    Show Success Toast
                  </Button>
                  <Button
                    onClick={() => showToast("info")}
                    variant="outline"
                    className="w-full"
                  >
                    Show Info Toast
                  </Button>
                </div>
              </div>
            </Tab>

            <Tab id="search">
              <div className="space-y-4">
                <Subtitle>Search</Subtitle>
                <p className="text-sm text-muted-foreground">
                  Search for content, users, or settings.
                </p>
                <div className="space-y-2">
                  <Button onClick={() => showToast("info")} className="w-full">
                    Search Results
                  </Button>
                </div>
              </div>
            </Tab>

            <Tab id="profile">
              <div className="space-y-4">
                <Subtitle>Profile</Subtitle>
                <p className="text-sm text-muted-foreground">
                  View and edit your profile information.
                </p>
                <div className="space-y-2">
                  <Button
                    onClick={() => showToast("warning")}
                    variant="outline"
                    className="w-full"
                  >
                    Show Warning Toast
                  </Button>
                </div>
              </div>
            </Tab>

            <Tab id="settings">
              <div className="space-y-4">
                <Subtitle>Settings</Subtitle>
                <p className="text-sm text-muted-foreground">
                  Configure your app preferences and account settings.
                </p>
                <div className="space-y-2">
                  <Button
                    onClick={() => showToast("success")}
                    className="w-full"
                  >
                    Save Settings
                  </Button>
                  <Button
                    onClick={() => showToast("error")}
                    variant="destructive"
                    className="w-full"
                  >
                    Show Error Toast
                  </Button>
                </div>
              </div>
            </Tab>
          </TabContainer>

          <TabBar tabs={tabs} />
        </TabProvider>
      </div>
    </>
  );
}
