import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Separator } from "@/components/ui/separator";

const Zodiak = localFont({
  src: "./fonts/CabinetGrotesk-Medium.woff2",
});

const Telma = localFont({
  src: "./fonts/Telma-Regular.woff2",
  variable: "--font-temla",
});

export const metadata: Metadata = {
  title: "Pixify",
  description: "SOON ..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${Zodiak.className} ${Telma.variable} container m-auto antialiased`}
      >
        <div className="flex h-screen flex-col">
          <main className="flex-1 px-10">{children}</main>
          <Separator />
          <p className="text-gray7 py-5 text-center tracking-wider">
            Created By Mohamed Ahmed
          </p>
        </div>
      </body>
    </html>
  );
}
