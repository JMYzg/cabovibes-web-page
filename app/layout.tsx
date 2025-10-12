import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Cabovibes",
  description: "A web page for Cabovibes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
