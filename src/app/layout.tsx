import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProviders from "./components/providers";
import AppLayout from "./components/modules/app-layout";
import cn from "./utils/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I'm Sophon.I",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-screen flex flex-col")}>
        <AppProviders>
          <AppLayout>{children}</AppLayout>
        </AppProviders>
      </body>
    </html>
  );
}
