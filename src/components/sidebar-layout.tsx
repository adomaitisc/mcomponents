"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    href: "/introduction",
  },
  {
    label: "Motivation",
    href: "/motivation",
  },
  {
    label: "Usage",
    href: "/usage",
  },
  {
    label: "References",
    href: "/references",
  },
];

const componentRoutes = [
  {
    label: "Bottom Sheet",
    href: "/bottom-sheet",
  },
  {
    label: "Bottom Tabs",
    href: "/bottom-tabs",
  },
  {
    label: "Button",
    href: "/button",
  },
  {
    label: "Card",
    href: "/card",
  },
  {
    label: "Carousel",
    href: "/carousel",
  },
  {
    label: "Dropdown",
    href: "/dropdown",
  },
  {
    label: "Toast",
    href: "/toast",
  },
];

const slugify = (text: string) => {
  return text.toLowerCase().replace(/ /g, "-");
};

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar className="bg-white border-none px-2">
        <SidebarContent className="h-full justify-center border-none">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {gettingStartedRoutes.map((route) => (
                  <SidebarMenuItem key={slugify(route.label)}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === route.href}
                    >
                      <Link href={route.href}>
                        <span className="font-semibold">{route.label}</span>
                      </Link>
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
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === route.href}
                    >
                      <Link href={route.href}>
                        <span className="font-semibold">{route.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="flex flex-col gap-4 p-4 py-32">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
