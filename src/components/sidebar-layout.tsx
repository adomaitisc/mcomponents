"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const gettingStartedRoutes = [
  {
    label: "Introduction",
    href: "/",
  },
  {
    label: "Motivation",
    href: "/",
  },

  {
    label: "Usage",
    href: "/",
  },
  {
    label: "References",
    href: "/",
  },
];

const componentRoutes = [
  {
    label: "Bottom Sheet",
    href: "/",
  },
  {
    label: "Bottom Tabs",
    href: "/",
  },
  {
    label: "Button",
    href: "/",
  },
  {
    label: "Card",
    href: "/",
  },
  {
    label: "Carousel",
    href: "/",
  },
  {
    label: "Dropdown",
    href: "/",
  },
  {
    label: "Toast",
    href: "/",
  },
];

const slugify = (text: string) => {
  return text.toLowerCase().replace(/ /g, "-");
};

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar className="bg-white border-none px-2">
        <SidebarContent className="h-full justify-center border-none">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {gettingStartedRoutes.map((route) => (
                  <SidebarMenuItem key={slugify(route.label)}>
                    <SidebarMenuButton>
                      <span className="font-semibold">{route.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {componentRoutes.map((route) => (
                  <SidebarMenuItem key={slugify(route.label)}>
                    <SidebarMenuButton>
                      <span className="font-semibold">{route.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        {/* <SidebarFooter>
          <div className="flex h-14 items-center gap-2 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-accent-foreground">
              <span className="text-xs font-semibold">m</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-medium leading-none">mcomponents</p>
              <p className="text-xs leading-none text-sidebar-muted-foreground">
                v1.0.0-beta.1
              </p>
            </div>
          </div>
        </SidebarFooter> */}
      </Sidebar>
      <SidebarInset>
        <main className="flex flex-col gap-4 p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
