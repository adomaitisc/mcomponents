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
import { useState } from "react";

const gettingStartedRoutes = [
  {
    label: "Introduction",
    href: "/introduction",
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
    label: "Input",
    href: "/input",
  },
  {
    label: "Label",
    href: "/label",
  },
  {
    label: "Shared Dialog",
    href: "/shared-dialog",
  },
  {
    label: "Slider",
    href: "/slider",
  },
  {
    label: "Switch",
    href: "/switch",
  },
  {
    label: "Toast",
    href: "/toast",
  },
];

const externalRoutes = [
  {
    label: "GitHub",
    href: "https://github.com/adomaitisc/mcomponents",
  },
];

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar className="bg-white border-none pl-6">
        <SidebarContent className="h-full justify-center border-none">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {gettingStartedRoutes.map((route) => (
                  <SidebarMenuItem key={slugify(route.label)}>
                    <SidebarMenuButton
                      asChild
                      onClick={() => setOpen(false)}
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
                      onClick={() => setOpen(false)}
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
                      onClick={() => setOpen(false)}
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
        <main className="w-screen overflow-x-hidden h-full">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
