import type { Metadata } from "next";
import "./globals.css";
import { SidebarLayout } from "@/components/sidebar-layout";
import { Header } from "@/components/header";
import localFont from "next/font/local";

const montreal = localFont({
  src: [{ path: "../../public/montreal.woff2" }],
  variable: "--font-montreal",
});

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
      <body className={`${montreal.variable} font-sans antialiased`}>
        <SidebarLayout>
          <Header />
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
