import type { Metadata } from "next";
import "./globals.css";
import { SidebarLayout } from "@/components/sidebar-layout";
import { Header } from "@/components/header";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "mcomponents",
  description: "A modern component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <SidebarLayout>
          <Header />
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
