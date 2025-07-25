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
import { slugify } from "@/lib/utils";

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
    href: "/dropdown-menu",
  },
  {
    label: "Shared Dialog",
    href: "/shared-dialog",
  },
  {
    label: "Toast",
    href: "/toast",
  },
  {
    label: "Label",
    href: "/label",
  },
  {
    label: "Input",
    href: "/input",
  },
];

const externalRoutes = [
  {
    label: "GitHub",
    href: "https://github.com/adomaitisc/mcomponents",
  },
];

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar className="bg-white border-none pl-6">
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
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {externalRoutes.map((route) => (
                  <SidebarMenuItem key={slugify(route.label)}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === route.href}
                    >
                      <Link
                        href={route.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
        <main className="w-screen overflow-x-hidden">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
