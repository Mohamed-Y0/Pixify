import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const jakaraSans = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-jakaraSans",
});

export const metadata: Metadata = {
  title: "Crusher",
  description: "SOON ..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakaraSans.className} !bg-bg-color container m-auto !text-white antialiased`}
      >
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <p className="text-gray7 py-4 text-center tracking-wider">
            Created By Mohamed Ahmed
          </p>
        </div>
      </body>
    </html>
  );
}
