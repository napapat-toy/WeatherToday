import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather Today",
  description: "A site shows the weather data in specific location and only current time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} bg-gradient-to-t from-blue-600 to-blue-900`}>
        <main className="h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
