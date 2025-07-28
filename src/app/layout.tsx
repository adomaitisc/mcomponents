import type { Metadata } from "next";
import "./globals.css";
import { SidebarLayout } from "@/components/sidebar-layout";
import { Header } from "@/components/header";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Mobile Components",
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
        className={`${GeistMono.variable} font-sans antialiased overflow-x-hidden h-screen`}
      >
        <SidebarLayout>
          <Header />
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
